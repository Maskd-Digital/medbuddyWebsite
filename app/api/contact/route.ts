import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend lazily to avoid build-time errors
let resend: Resend | null = null
function getResend() {
  if (!resend && process.env.RESEND_API_KEY) {
    resend = new Resend(process.env.RESEND_API_KEY)
  }
  return resend
}

// Simple in-memory rate limiting (for production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

// Rate limit: 5 requests per hour per IP
const RATE_LIMIT_MAX = 5
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour in milliseconds

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const userLimit = rateLimitMap.get(ip)

  if (!userLimit || now > userLimit.resetTime) {
    // Reset or create new limit
    rateLimitMap.set(ip, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW
    })
    return true
  }

  if (userLimit.count >= RATE_LIMIT_MAX) {
    return false
  }

  userLimit.count++
  return true
}

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown'
  return ip
}

function sanitizeInput(input: string): string {
  // Remove potential XSS attempts
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim()
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIp = getClientIp(request)

    // Check rate limit
    if (!checkRateLimit(clientIp)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Parse request body
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      )
    }

    // Validate email format
    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      )
    }

    // Validate field lengths
    if (name.length > 100 || subject.length > 200 || message.length > 5000) {
      return NextResponse.json(
        { error: 'Input exceeds maximum length.' },
        { status: 400 }
      )
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters.' },
        { status: 400 }
      )
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name)
    const sanitizedEmail = sanitizeInput(email)
    const sanitizedSubject = sanitizeInput(subject)
    const sanitizedMessage = sanitizeInput(message)

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact support directly.' },
        { status: 500 }
      )
    }

    // Send email using Resend
    const resendClient = getResend()
    if (!resendClient) {
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact support directly.' },
        { status: 500 }
      )
    }

    const { data, error } = await resendClient.emails.send({
      from: process.env.CONTACT_EMAIL_FROM || 'noreply@medbuddy.com',
      to: process.env.CONTACT_EMAIL_TO || 'hello@medbuddy.com',
      reply_to: sanitizedEmail,
      subject: `Contact Form: ${sanitizedSubject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #64D072;">New Contact Form Submission</h2>

          <div style="background-color: #f2f3f7; padding: 20px; border-radius: 10px; margin: 20px 0;">
            <p><strong>From:</strong> ${sanitizedName}</p>
            <p><strong>Email:</strong> ${sanitizedEmail}</p>
            <p><strong>Subject:</strong> ${sanitizedSubject}</p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #010B03;">Message:</h3>
            <p style="white-space: pre-wrap;">${sanitizedMessage}</p>
          </div>

          <hr style="border: 1px solid #e5e7ec; margin: 20px 0;">

          <p style="color: #666; font-size: 12px;">
            This email was sent from the MedBuddy contact form.<br>
            IP Address: ${clientIp}<br>
            Timestamp: ${new Date().toISOString()}
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      )
    }

    // Send auto-reply to user
    await resendClient.emails.send({
      from: process.env.CONTACT_EMAIL_FROM || 'noreply@medbuddy.com',
      to: sanitizedEmail,
      subject: 'We received your message - MedBuddy',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #64D072 0%, #4BC05D 100%); padding: 30px; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0;">Thank You for Contacting MedBuddy!</h1>
          </div>

          <div style="background-color: #f2f3f7; padding: 30px; border-radius: 0 0 10px 10px;">
            <p>Hi ${sanitizedName},</p>

            <p>We've received your message and will get back to you within 24 hours.</p>

            <div style="background-color: white; padding: 20px; border-radius: 10px; margin: 20px 0;">
              <h3 style="color: #010B03; margin-top: 0;">Your Message:</h3>
              <p><strong>Subject:</strong> ${sanitizedSubject}</p>
              <p style="white-space: pre-wrap; color: #666;">${sanitizedMessage}</p>
            </div>

            <p>If you need immediate assistance, please visit our <a href="${process.env.NEXT_PUBLIC_SITE_URL}/faq" style="color: #64D072;">FAQ page</a> or contact us at <a href="tel:+1234567890" style="color: #64D072;">+1 (234) 567-890</a>.</p>

            <p style="margin-top: 30px;">
              Best regards,<br>
              <strong>The MedBuddy Team</strong>
            </p>
          </div>

          <p style="color: #666; font-size: 12px; text-align: center; margin-top: 20px;">
            © ${new Date().getFullYear()} MedBuddy. All rights reserved.
          </p>
        </div>
      `,
    })

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    )
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}

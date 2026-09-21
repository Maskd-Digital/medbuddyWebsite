import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

const MAX_LEN = { name: 200, email: 320, message: 8000 }
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000
const RATE_LIMIT_MAX = 5

const rateLimit = new Map<string, number[]>()

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function clientIp(request: Request) {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) {
    return forwarded.split(',')[0]?.trim() || 'unknown'
  }
  return request.headers.get('x-real-ip') || 'unknown'
}

function isRateLimited(ip: string) {
  const now = Date.now()
  const recent = (rateLimit.get(ip) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  )
  if (recent.length >= RATE_LIMIT_MAX) {
    rateLimit.set(ip, recent)
    return true
  }
  recent.push(now)
  rateLimit.set(ip, recent)
  return false
}

function parseSecure(value: string | undefined, port: number) {
  if (value === 'true') return true
  if (value === 'false') return false
  return port === 465
}

export async function POST(request: Request) {
  if (isRateLimited(clientIp(request))) {
    return NextResponse.json(
      { error: 'Too many messages. Please wait a few minutes and try again.' },
      { status: 429 }
    )
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const {
    name: rawName,
    email: rawEmail,
    message: rawMessage,
    website: honeypot,
  } = body as Record<string, unknown>

  // Honeypot: bots that fill hidden fields get a fake success
  if (typeof honeypot === 'string' && honeypot.trim()) {
    return NextResponse.json({ ok: true })
  }

  const name = typeof rawName === 'string' ? rawName.trim() : ''
  const email = typeof rawEmail === 'string' ? rawEmail.trim() : ''
  const message = typeof rawMessage === 'string' ? rawMessage.trim() : ''

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Please fill in your name, email, and message.' },
      { status: 400 }
    )
  }

  if (
    name.length > MAX_LEN.name ||
    email.length > MAX_LEN.email ||
    message.length > MAX_LEN.message
  ) {
    return NextResponse.json(
      { error: 'One or more fields are too long.' },
      { status: 400 }
    )
  }

  if (message.length < 10) {
    return NextResponse.json(
      { error: 'Message must be at least 10 characters.' },
      { status: 400 }
    )
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: 'Please enter a valid email address.' },
      { status: 400 }
    )
  }

  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS?.replace(/\s+/g, '')

  if (!smtpUser || !smtpPass) {
    console.error('Contact form: SMTP_USER or SMTP_PASS is not set.')
    return NextResponse.json(
      { error: 'Email is not configured. Please try again later.' },
      { status: 503 }
    )
  }

  const host = process.env.SMTP_HOST || 'smtp.gmail.com'
  const port = Number(process.env.SMTP_PORT) || 465
  const secure = parseSecure(process.env.SMTP_SECURE, port)
  const to = process.env.CONTACT_EMAIL_TO?.trim() || smtpUser
  const submittedAt = new Date().toLocaleString('en-LK', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Asia/Colombo',
  })

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user: smtpUser, pass: smtpPass },
  })

  const text = [
    'New message from the MedBuddy website contact form',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Submitted: ${submittedAt}`,
    '',
    'Message:',
    message,
  ].join('\n')

  const html = `
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Submitted:</strong> ${escapeHtml(submittedAt)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\r\n/g, '\n').split('\n').join('<br/>')}</p>
  `

  try {
    await transporter.sendMail({
      from: `"MedBuddy website" <${smtpUser}>`,
      to,
      replyTo: email,
      subject: `MedBuddy contact: ${name}`,
      text,
      html,
    })
  } catch (error) {
    console.error('Contact form send error:', error)
    return NextResponse.json(
      { error: 'Could not send your message. Please try again later.' },
      { status: 502 }
    )
  }

  return NextResponse.json({ ok: true })
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
}

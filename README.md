# MedBuddy Website 💊

The official website for MedBuddy - your personal medication manager. Built with Next.js 14, TypeScript, and TailwindCSS.

![MedBuddy](public/og-image.png)

## 🌟 Features

- ✅ **Modern Tech Stack**: Next.js 14, TypeScript, TailwindCSS
- ✅ **Fully Responsive**: Mobile-first design that works on all devices
- ✅ **SEO Optimized**: Meta tags, Open Graph, sitemap, robots.txt
- ✅ **Performance**: Fast loading with optimized images and code splitting
- ✅ **Accessibility**: WCAG compliant with semantic HTML
- ✅ **Contact Form**: Serverless API with Resend email integration
- ✅ **Security**: Input validation, rate limiting, XSS protection
- ✅ **Healthcare Design**: Clean, trustworthy UI with healthcare-focused branding

## 📄 Pages

- **Home** (`/`) - Hero, features overview, testimonials, CTA
- **Features** (`/features`) - Detailed feature showcase
- **How It Works** (`/how-it-works`) - 3-step onboarding guide
- **About** (`/about`) - Mission, values, team, certifications
- **Contact** (`/contact`) - Contact form with email notifications
- **FAQ** (`/faq`) - Searchable frequently asked questions
- **Blog** (`/blog`) - SEO-optimized blog with categories
- **Privacy Policy** (`/privacy`) - Comprehensive privacy policy
- **Terms of Service** (`/terms`) - Legal terms and conditions

## 🎨 Branding

### Color Palette

```css
Primary Green: #64D072
Dark: #010B03
Neutral: #F2F3F7
```

### Typography

- **Font**: Inter (Google Fonts)
- **Headings**: Bold, 600-800 weight
- **Body**: Regular, 400 weight

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Resend API key (for contact form)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd medbuddyWebsite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your configuration:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   CONTACT_EMAIL_TO=hello@medbuddy.com
   CONTACT_EMAIL_FROM=noreply@medbuddy.com
   NEXT_PUBLIC_SITE_URL=https://medbuddy.com
   NEXT_PUBLIC_APP_STORE_URL=https://apps.apple.com/app/medbuddy
   NEXT_PUBLIC_PLAY_STORE_URL=https://play.google.com/store/apps/medbuddy
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## 📧 Email Configuration (Resend)

### Setup Instructions

1. **Create a Resend account** at [resend.com](https://resend.com)

2. **Get your API key** from [resend.com/api-keys](https://resend.com/api-keys)

3. **Add API key to `.env`**
   ```env
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   ```

4. **Configure email addresses**
   ```env
   CONTACT_EMAIL_TO=hello@medbuddy.com    # Where form submissions go
   CONTACT_EMAIL_FROM=noreply@medbuddy.com # Sender address
   ```

5. **Verify your domain** (for production)
   - Go to Resend dashboard → Domains
   - Add your domain and follow DNS verification steps
   - Use your verified domain in `CONTACT_EMAIL_FROM`

### Testing Contact Form Locally

The contact form will work in development mode with any Resend API key. Test emails will be sent to your configured `CONTACT_EMAIL_TO` address.

## 🌐 Deployment to Vercel

### Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-repo/medbuddy-website)

### Manual Deployment

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Add environment variables** in Vercel dashboard:
   - Go to Project Settings → Environment Variables
   - Add all variables from `.env.example`

5. **Deploy to production**
   ```bash
   vercel --prod
   ```

### Automatic Deployment

Connect your GitHub repository to Vercel for automatic deployments:

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your Git repository
3. Add environment variables
4. Deploy!

Every push to `main` branch will trigger a production deployment.

## 📁 Project Structure

```
medbuddyWebsite/
├── app/                      # Next.js 14 App Router
│   ├── about/               # About page
│   ├── api/                 # API routes
│   │   └── contact/         # Contact form endpoint
│   ├── blog/                # Blog listing page
│   ├── contact/             # Contact page
│   ├── faq/                 # FAQ page
│   ├── features/            # Features page
│   ├── how-it-works/        # How it works page
│   ├── privacy/             # Privacy policy
│   ├── terms/               # Terms of service
│   ├── layout.tsx           # Root layout with SEO
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles
│   ├── sitemap.ts           # Dynamic sitemap
│   └── robots.ts            # Robots.txt
├── components/              # React components
│   ├── layout/              # Layout components
│   │   ├── Navbar.tsx       # Navigation bar
│   │   └── Footer.tsx       # Footer
│   └── ui/                  # Reusable UI components
│       ├── Button.tsx       # Button component
│       ├── Card.tsx         # Card component
│       ├── Input.tsx        # Input component
│       └── Textarea.tsx     # Textarea component
├── public/                  # Static assets
│   ├── og-image.png         # Open Graph image
│   └── favicon.ico          # Favicon
├── .env.example             # Environment variables template
├── .gitignore               # Git ignore rules
├── next.config.mjs          # Next.js configuration
├── package.json             # Dependencies
├── postcss.config.mjs       # PostCSS configuration
├── tailwind.config.ts       # TailwindCSS configuration
├── tsconfig.json            # TypeScript configuration
├── vercel.json              # Vercel deployment config
├── BRANDING.md              # Branding guidelines
└── README.md                # This file
```

## 🛠️ Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

### Code Style

- **TypeScript** for type safety
- **ESLint** for code quality
- **Prettier** for code formatting (optional)

## 🔒 Security Features

- ✅ Input validation and sanitization
- ✅ Rate limiting on contact form (5 requests/hour per IP)
- ✅ XSS protection
- ✅ CSRF protection
- ✅ Security headers (CSP, X-Frame-Options, etc.)
- ✅ HTTPS enforcement in production

## 🎯 SEO Features

- ✅ Dynamic meta tags for all pages
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card tags
- ✅ Structured data (JSON-LD) ready
- ✅ Sitemap.xml generation
- ✅ Robots.txt configuration
- ✅ Semantic HTML structure
- ✅ Fast loading times
- ✅ Mobile-friendly design

## 📱 Responsive Breakpoints

```css
sm:  640px   /* Small devices */
md:  768px   /* Medium devices */
lg:  1024px  /* Large devices */
xl:  1280px  /* Extra large devices */
2xl: 1536px  /* 2X large devices */
```

## 🧩 Components

### UI Components

All components are fully typed with TypeScript and support customization:

- **Button**: Multiple variants (primary, secondary, outline, ghost)
- **Card**: Hover effects, padding options
- **Input**: Label, error states, full validation
- **Textarea**: Multi-line input with validation

### Layout Components

- **Navbar**: Sticky navigation with mobile menu
- **Footer**: Multi-column footer with social links

## 📸 Adding App Screenshots

Replace placeholder images with your actual MedBuddy app screenshots:

1. Export screenshots from your app (9:16 aspect ratio recommended)
2. Save in `public/screenshots/` directory
3. Replace placeholder divs in pages with actual images:

```tsx
<Image
  src="/screenshots/home.png"
  alt="MedBuddy Home Screen"
  width={400}
  height={800}
  className="rounded-xl"
/>
```

## 🔄 Environment Variables

| Variable | Description | Required | Example |
|----------|-------------|----------|---------|
| `RESEND_API_KEY` | Resend API key for emails | Yes | `re_xxxxx` |
| `CONTACT_EMAIL_TO` | Recipient for contact forms | Yes | `hello@medbuddy.com` |
| `CONTACT_EMAIL_FROM` | Sender email address | Yes | `noreply@medbuddy.com` |
| `NEXT_PUBLIC_SITE_URL` | Production website URL | Yes | `https://medbuddy.com` |
| `NEXT_PUBLIC_APP_STORE_URL` | iOS App Store link | No | `https://apps.apple.com/...` |
| `NEXT_PUBLIC_PLAY_STORE_URL` | Google Play Store link | No | `https://play.google.com/...` |

## 📝 Customization

### Changing Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#YOUR_COLOR',
    // ... add more shades
  }
}
```

### Updating Content

- **Copy text**: Edit page files in `app/` directory
- **Images**: Add to `public/` and reference in components
- **Navigation**: Edit `components/layout/Navbar.tsx`
- **Footer**: Edit `components/layout/Footer.tsx`

## 🐛 Troubleshooting

### Contact form not working

- Check `RESEND_API_KEY` is set correctly
- Verify email addresses are valid
- Check console for API errors
- Ensure rate limit hasn't been exceeded

### Build errors

- Run `npm install` to ensure all dependencies are installed
- Clear `.next` folder and rebuild: `rm -rf .next && npm run build`
- Check Node.js version (18+ required)

### Styling issues

- Clear browser cache
- Run `npm run dev` to rebuild CSS
- Check TailwindCSS configuration

## 📞 Support

For issues or questions:

- **Email**: dev@medbuddy.com
- **GitHub Issues**: [Create an issue](https://github.com/your-repo/issues)

## 📄 License

© 2024 MedBuddy. All rights reserved.

---

**Built with ❤️ for better health outcomes**

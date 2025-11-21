# MedBuddy Branding Guide 🎨

This document outlines the visual identity and branding guidelines for the MedBuddy website.

## Brand Overview

**Mission**: Empowering better health through simple, accessible medication management.

**Brand Personality**:
- Trustworthy & Professional
- Modern & Approachable
- Healthcare-focused
- User-friendly
- Compassionate

---

## Color Palette

### Primary Colors

#### Primary Green
```
HEX:  #64D072
RGB:  100, 208, 114
HSL:  127°, 55%, 60%
Use:  CTAs, buttons, accents, icons
```

**Shades:**
- `primary-50`: #E8F9EA (Light backgrounds)
- `primary-100`: #D1F3D5 (Hover backgrounds)
- `primary-400`: #64D072 (Main brand color)
- `primary-600`: #4BC05D (Hover states)
- `primary-700`: #3DA04D (Active states)

#### Dark
```
HEX:  #010B03
RGB:  1, 11, 3
HSL:  135°, 83%, 2%
Use:  Text, headings, dark backgrounds
```

**Shades:**
- `dark-50`: #F2F3F7 (Very light gray)
- `dark-600`: #636F9F (Medium gray)
- `dark-900`: #212740 (Dark gray)
- `dark-950`: #010B03 (Near black)

#### Neutral
```
HEX:  #F2F3F7
RGB:  242, 243, 247
HSL:  228°, 20%, 96%
Use:  Backgrounds, cards, sections
```

**Shades:**
- `neutral-50`: #FFFFFF (White)
- `neutral-100`: #FAFBFC (Off-white)
- `neutral-200`: #F2F3F7 (Main neutral)
- `neutral-300`: #E5E7EC (Borders)
- `neutral-400`: #D8DBE1 (Inactive elements)

### Secondary Colors

#### Accent Colors (used sparingly)
- **Blue**: `#3B82F6` - Information, links
- **Purple**: `#8B5CF6` - Premium features
- **Amber**: `#F59E0B` - Warnings
- **Red**: `#EF4444` - Errors, alerts

---

## Typography

### Font Family

**Primary Font**: [Inter](https://fonts.google.com/specimen/Inter)

```css
font-family: 'Inter', system-ui, -apple-system, sans-serif;
```

### Font Weights

- **Regular (400)**: Body text, paragraphs
- **Medium (500)**: Labels, subtitles
- **Semibold (600)**: Subheadings, buttons
- **Bold (700)**: Headings, emphasis
- **Extrabold (800)**: Hero headings

### Type Scale

```css
/* Headings */
h1: 4rem (64px) - Hero titles
h2: 3rem (48px) - Section headings
h3: 2rem (32px) - Card titles
h4: 1.5rem (24px) - Subsections
h5: 1.25rem (20px) - Small headings
h6: 1rem (16px) - Labels

/* Body */
text-lg: 1.125rem (18px) - Large body
text-base: 1rem (16px) - Normal body
text-sm: 0.875rem (14px) - Small text
text-xs: 0.75rem (12px) - Captions
```

### Line Height

- Headings: `1.2` (tight)
- Body text: `1.6` (relaxed)
- Captions: `1.4` (normal)

---

## Spacing System

Based on 4px base unit:

```
0.5  = 2px
1    = 4px
2    = 8px
3    = 12px
4    = 16px
5    = 20px
6    = 24px
8    = 32px
10   = 40px
12   = 48px
16   = 64px
20   = 80px
24   = 96px
32   = 128px
```

### Common Spacing Patterns

- **Component padding**: 24px (p-6)
- **Section padding**: 64px - 128px (py-16 to py-32)
- **Card gaps**: 32px (gap-8)
- **Element margins**: 16px - 24px (mb-4 to mb-6)

---

## Border Radius

Healthcare-friendly rounded corners:

```css
rounded-lg:   8px   - Small elements
rounded-xl:   12px  - Inputs, buttons
rounded-2xl:  16px  - Cards
rounded-3xl:  24px  - Large sections
rounded-full: 9999px - Pills, badges, avatars
```

---

## Shadows

Soft, healthcare-appropriate shadows:

```css
shadow-soft:   0 2px 15px rgba(0, 0, 0, 0.08)  - Cards
shadow-medium: 0 4px 25px rgba(0, 0, 0, 0.12)  - Hover states
shadow-strong: 0 8px 40px rgba(0, 0, 0, 0.16)  - Modals, popups
```

---

## Components

### Buttons

#### Primary Button
```tsx
Background: #64D072 (primary)
Text: White
Padding: 24px 32px (lg)
Border Radius: 12px (rounded-xl)
Font Weight: 600 (semibold)
Shadow: shadow-soft
Hover: #4BC05D (primary-600)
```

#### Secondary Button
```tsx
Background: #010B03 (dark)
Text: White
Padding: 24px 32px
Border Radius: 12px
Font Weight: 600
Shadow: shadow-soft
Hover: #212740 (dark-900)
```

#### Outline Button
```tsx
Background: White
Text: #010B03
Border: 2px solid #E5E7EC
Padding: 24px 32px
Border Radius: 12px
Hover: Border becomes primary color
```

### Cards

```tsx
Background: White
Padding: 24px (default)
Border Radius: 16px (rounded-2xl)
Shadow: shadow-soft
Hover: shadow-medium + translate-y-1
```

### Inputs

```tsx
Background: White
Border: 2px solid #E5E7EC (neutral-300)
Padding: 12px 16px
Border Radius: 12px
Focus: Border #64D072, Ring primary-100
```

---

## Iconography

### Icon Style

- **Library**: Lucide React
- **Stroke Width**: 2px
- **Size**: 20px - 24px (standard), 32px+ (featured)
- **Color**: Primary green for accents, dark for general use

### Common Icons

- Pills: Medication/prescriptions
- Bell: Reminders/notifications
- Calendar: Appointments
- Heart: Health/wellness
- Shield: Security/privacy
- Smartphone: Mobile app
- CheckCircle: Success/completed
- AlertCircle: Important information

---

## Imagery

### Photography Style

- **Tone**: Warm, welcoming, professional
- **Subjects**: Diverse people, healthcare settings, families
- **Composition**: Clean, uncluttered, focused
- **Color Grading**: Slightly warm tones, high contrast

### Illustration Style

- **Type**: Friendly, modern, minimal
- **Colors**: Brand colors (primary green, neutrals)
- **Usage**: Feature explanations, empty states, error pages

### App Screenshots

- **Format**: PNG with rounded corners
- **Aspect Ratio**: 9:16 (mobile screen)
- **Background**: Gradient or neutral
- **Mockups**: iPhone/Android device frames (optional)

---

## Gradients

### Primary Gradient
```css
background: linear-gradient(135deg, #64D072 0%, #4BC05D 100%);
```
**Use**: CTAs, hero sections, featured cards

### Dark Gradient
```css
background: linear-gradient(135deg, #010B03 0%, #212740 100%);
```
**Use**: Footer, dark sections

### Neutral Gradient
```css
background: linear-gradient(135deg, #F2F3F7 0%, #E5E7EC 100%);
```
**Use**: Subtle backgrounds

---

## Layout Grid

### Container Widths

```css
max-width: 1280px (max-w-7xl)
padding: 16px (mobile), 24px (tablet), 32px (desktop)
```

### Grid System

```css
Mobile:   1 column
Tablet:   2 columns (md:grid-cols-2)
Desktop:  3-4 columns (lg:grid-cols-3)
```

### Breakpoints

```css
sm:  640px  (Small tablets)
md:  768px  (Tablets)
lg:  1024px (Small laptops)
xl:  1280px (Desktops)
2xl: 1536px (Large screens)
```

---

## Accessibility

### Color Contrast

All text meets WCAG AA standards:
- Normal text: 4.5:1 contrast ratio
- Large text: 3:1 contrast ratio

### Focus States

- **Outline**: 2px solid primary color
- **Offset**: 2px
- **Visible on all interactive elements**

### Alt Text

- All images must have descriptive alt text
- Decorative images: `alt=""`

---

## Voice & Tone

### Writing Style

- **Clear & Concise**: Short sentences, simple words
- **Empathetic**: Understanding of health challenges
- **Professional**: Trustworthy, credible
- **Encouraging**: Positive, supportive language
- **Action-Oriented**: Clear CTAs, next steps

### Examples

✅ **Good**: "Never miss a dose again. Get started free."
❌ **Avoid**: "Revolutionize your life with our cutting-edge platform."

✅ **Good**: "We protect your health information with bank-level encryption."
❌ **Avoid**: "Your data is totally 100% secure, guaranteed!"

---

## Dos and Don'ts

### ✅ Do

- Use plenty of white space
- Maintain consistent spacing
- Keep content scannable with headings
- Use icons to support text
- Make CTAs clear and prominent
- Ensure mobile responsiveness
- Test color contrast

### ❌ Don't

- Use too many colors at once
- Make text too small (under 14px)
- Overcrowd pages with content
- Use medical jargon unnecessarily
- Forget mobile users
- Use low-quality images
- Ignore accessibility

---

## File Formats

### Logos
- **Vector**: SVG (preferred for web)
- **Raster**: PNG with transparent background

### Images
- **Photos**: JPG (optimized, 80-90% quality)
- **Graphics**: PNG or SVG
- **Icons**: SVG

### Optimization
- Compress all images before upload
- Use WebP format when possible
- Lazy load images below the fold

---

## Brand Applications

### Social Media

#### Open Graph Images
- **Size**: 1200 x 630px
- **Format**: PNG or JPG
- **Include**: Logo, tagline, brand colors

#### Profile Pictures
- **Size**: 400 x 400px
- **Format**: PNG
- **Content**: Logo on brand background

### Email Templates

- **Width**: 600px max
- **Colors**: Brand colors
- **Font**: Web-safe fallbacks (Arial, Helvetica)
- **CTA**: Primary green buttons

---

## Resources

### Design Tools

- **Figma**: Design files and components
- **Lucide Icons**: https://lucide.dev
- **Google Fonts**: https://fonts.google.com/specimen/Inter
- **TailwindCSS**: https://tailwindcss.com

### Code Implementation

All colors, spacing, and typography are pre-configured in:
- `tailwind.config.ts`
- `app/globals.css`

---

## Contact

For branding questions or design assets:
- **Email**: design@medbuddy.com
- **Design Lead**: Emma Rodriguez

---

**Last Updated**: January 2024

This is a living document. Update as the brand evolves.

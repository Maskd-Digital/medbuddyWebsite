/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/privacy', destination: '/legal#privacy', permanent: true },
      { source: '/terms', destination: '/legal#terms', permanent: true },
      { source: '/about', destination: '/', permanent: true },
      { source: '/blog', destination: '/', permanent: true },
      { source: '/faq', destination: '/', permanent: true },
      { source: '/contact', destination: '/', permanent: true },
      { source: '/how-it-works', destination: '/#how-it-works', permanent: true },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  }
}

export default nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // Serve AVIF first, fall back to WebP, then the original format.
    formats: ['image/avif', 'image/webp'],
    // Widths used to generate responsive `srcset` candidates.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Cache optimized images aggressively (1 year).
    minimumCacheTTL: 31536000,
  },
}

module.exports = nextConfig

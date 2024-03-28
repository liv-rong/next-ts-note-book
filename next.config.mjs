/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'standalone',
  experimental: {
    sharedArrayBuffer: true
  },
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp'
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin'
          }
        ]
      }
    ]
  }
}
export default nextConfig

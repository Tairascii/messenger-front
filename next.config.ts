import type { NextConfig } from 'next'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: 'http://127.0.0.1:8000',
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'static.xx.fbcdn.net' },
      { protocol: 'https', hostname: 'scontent.fala3-2.fna.fbcdn.net' },
      { protocol: 'https', hostname: 'scontent.fala11-1.fna.fbcdn.net' },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
    prependData: `
      @import "mixins.scss";
      @import "vars.scss";
      @import "extends.scss";
    `,
  },
}

export default nextConfig

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Key Expiry Predictor — Predict API key expiration before outages',
  description: 'Monitor API keys across multiple services, analyze usage patterns to predict expiration dates, and receive proactive alerts before service disruption.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6240df6e-3758-49ff-9398-711959103fd0"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shivam Shelke | AI & ML Engineering Portfolio',
  description: 'A scrollytelling personal portfolio for Shivam Shelke',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} min-h-screen bg-[#0b0d12] text-white antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  )
}

import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Panel de administración',
    template: '%s — Admin — Ruth Delgado',
  },
  robots: { index: false, follow: false },
}

export default function AdminRootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} bg-background`}>
      <body className="min-h-screen bg-sand/20 font-sans antialiased">{children}</body>
    </html>
  )
}

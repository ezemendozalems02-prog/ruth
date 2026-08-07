import type React from 'react'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Suspense } from 'react'
import { Preloader } from '@/components/preloader'
import { CustomCursor } from '@/components/custom-cursor'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

const siteUrl = 'https://ruthdelgado.art'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Ruth Delgado — Artista Visual',
    template: '%s — Ruth Delgado',
  },
  description:
    'Ruth Delgado es una artista visual contemporánea. Obras originales, objetos pintados, talleres y encargos personalizados. El arte que transforma espacios, emociones e historias.',
  keywords: [
    'Ruth Delgado',
    'artista visual',
    'arte contemporáneo',
    'obras originales',
    'talleres de arte',
    'murales',
    'objetos pintados',
    'arte abstracto',
  ],
  authors: [{ name: 'Ruth Delgado' }],
  creator: 'Ruth Delgado',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: siteUrl,
    title: 'Ruth Delgado — Artista Visual',
    description:
      'El arte que transforma espacios, emociones e historias. Obras originales, objetos pintados, talleres y encargos.',
    siteName: 'Ruth Delgado',
    images: [{ url: '/images/ruth-hero.png', width: 1200, height: 630, alt: 'Ruth Delgado' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ruth Delgado — Artista Visual',
    description: 'El arte que transforma espacios, emociones e historias.',
    images: ['/images/ruth-hero.png'],
  },
  robots: { index: true, follow: true },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#f8f6f2',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        <Preloader />
        <CustomCursor />
        <SiteNav />
        <Suspense fallback={null}>{children}</Suspense>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

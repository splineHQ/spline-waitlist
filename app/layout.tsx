import { siteConfig } from '@spline/config/site'
import type { Metadata } from 'next'
import React from 'react'
import { Toaster } from 'react-hot-toast'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['spline', 'اسپلاین', 'طراحی گرافیکی', 'طراحی', 'ساخت طراحی گرافیکی'],
  authors: [
    {
      name: 'spline',
      url: 'https://spline.ir',
    },
  ],
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.ogImage}`],
    creator: '@spline_ir',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}

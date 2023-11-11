import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.VERCEL_APP}`),
  title: 'Dhsian Atelier',
  description: 'Website Dhisan Atelier Arsitektur: melayani developer indonesia',
  openGraph: {
    url: process.env.VERCEL_APP,
    type: 'website',
    title: 'Dhsian Atelier',
    description: 'Website Dhisan Atelier Arsitektur: melayani developer indonesia',
    images: [
      {
        url: 'https://cdn.discordapp.com/attachments/725228007501070336/1170759591693394021/metadata-og.png?ex=655a35d6&is=6547c0d6&hm=98326de7e199c799bf9efcd7c78121dc2f499565db3edaf7c660b44e8c915d35&',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dhsian Atelier',
    description: 'Website Dhisan Atelier Arsitektur: melayani developer indonesia',
    images: [
      {
        url: 'https://cdn.discordapp.com/attachments/725228007501070336/1170759591693394021/metadata-og.png?ex=655a35d6&is=6547c0d6&hm=98326de7e199c799bf9efcd7c78121dc2f499565db3edaf7c660b44e8c915d35&',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

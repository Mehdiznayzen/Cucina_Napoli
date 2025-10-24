"use client";

import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/app/components/Layout/Header'
import Footer from '@/app/components/Layout/Footer'
import ScrollToTop from '@/app/components/ScrollToTop'
import WhatssapIcon from './components/whatssap'
import { useState } from 'react';
const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${font.className}`}>
        <Header onReserveClick={() => setIsOpen(true)} />
        {children}
        <Footer />
        <WhatssapIcon />
        <ScrollToTop />
      </body>
    </html>
  )
}
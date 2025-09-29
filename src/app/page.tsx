import React from 'react'
import Hero from '@/app/components/Home/Hero'
import Features from '@/app/components/Home/Features'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Cucina Napoli',
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
    </main>
  )
}

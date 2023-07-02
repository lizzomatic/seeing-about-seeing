import React, { Component } from 'react'
import Link from 'next/link'
import { Header } from '@/src/components/header/header'
import { Footer } from '@/src/components/footer/footer'

const AboutPage = () => {
  return (
    <div className='bg-white'>
      <Header />
      <h1 className='px-4 text-2xl text-gray-700 font-bold'>About</h1>
      <p className='px-4'>
        Elizabeth Goltz is a visual artist, designer and technologist, aiming to explore and envision our collective understanding of the visual world.
      </p>
      <Footer />
    </div>
  )
}

export default AboutPage;
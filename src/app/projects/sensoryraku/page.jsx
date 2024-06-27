import React from 'react'
import Image from 'next/image'
import { Header } from 'src/app/components/header/header.jsx';
import { Footer } from 'src/app/components/footer/footer.jsx';

export default () => {
  return (
    <div className='bg-white'>
      <Header />
      <h1 className='px-4 text-3xl text-gray-700 font-bold'>Ceramics for Deep Listening</h1>
      <p className='px-4'>coming soon</p>
      <div className='bg-white'>
      </div>
      <Footer />
    </div>
  )
}
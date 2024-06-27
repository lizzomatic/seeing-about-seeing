import React from 'react'
import Image from 'next/image'
import { Header } from 'src/app/components/header/header.jsx';
import { Footer } from 'src/app/components/footer/footer.jsx';

export default () => {
  return (
    <div className='bg-white'>
      <Header />
      <h1 className='px-4 text-3xl text-gray-700 font-bold'>archive</h1>
      <Image className='center' src={'/images/max/bridgetRiley_00.jpg'} width={400} height={400} />

      <div className='bg-white'>
      </div>
      <Footer />
    </div>
  )
}
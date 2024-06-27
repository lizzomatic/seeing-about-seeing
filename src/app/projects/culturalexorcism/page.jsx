import React from 'react'
import Image from 'next/image'
import { Header } from 'src/app/components/header/header.jsx';
import { Footer } from 'src/app/components/footer/footer.jsx';

export default () => {
  return (
    <div className='bg-white'>
      <Header />
      <h1 className='px-4 text-3xl text-gray-700 font-bold'>AI-assisted Cultural Exorcism</h1>
      <p className='px-4'></p>

      <div className='bg-white'>
        <Image className='p-8' src={'/images/max/bridgetRiley_00.jpg'} width={400} height={400} />
      </div>
      <Footer />
    </div>
  )
}
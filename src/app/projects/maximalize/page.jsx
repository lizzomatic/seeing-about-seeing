import React from 'react'
import Image from 'next/image'
import { Header } from 'src/app/components/header/header.jsx';
import { Footer } from 'src/app/components/footer/footer.jsx';

export default () => {
  return (
    <div className='bg-white'>
      <Header />
      <h1 className='px-4 text-3xl text-gray-700 font-bold'>Maximalizing Minimalism</h1>
      <p className='px-4'>These are some experiments in exploring big meaning in minimalist art using AI image models. Inspired by an exhibit of Bridget Riley drawings at the Hammer Museum in Los Angeles, CA, I started feeding my photos of minimalist art into Stable Diffusion--"hacking" the model by telling AI that a greyscale abstract image was actually depth information. The results felt like unabstracting the abstraction.</p>

      <div className='bg-white'>
        <Image className='p-8' src={'/images/max/bridgetRiley_00.jpg'} width={400} height={400} />
        <Image className='p-8' src={'/images/max/br_00_out.png'} width={400} height={400} />
        <Image className='p-8' src={'/images/max/br_00_out1.png'} width={400} height={400} />
        <Image className='p-8' src={'/images/max/bridgetRiley_01.jpg'} width={400} height={400} />
        <Image className='p-8' src={'/images/max/bridgetRiley.gif'} width={400} height={400} />
        <h2 className='p-4'>Marylin Monroe by Andy Worhol</h2>
        <p></p>
        <Image className='p-8' src={'/images/max/mm_00.png'} width={400} height={400} />
        <p className='p-4'>stable diffusion output:</p>
        <Image className='p-8' src={'/images/max/mm_01.png'} width={400} height={400} />
        <Image className='p-8' src={'/images/max/mm_02.png'} width={400} height={400} />
        <p className='p-4'>I used python pillow library and some basic image math to combine sd output images:</p>
        <Image className='p-8' src={'/images/max/mm_combined_01.png'} width={400} height={400} />
        <Image className='p-8' src={'/images/max/mm_combined_02.png'} width={400} height={400} />
        <p className='p-4'>The purpose of these images may seem unclear, but I'm trying to introduce meaning by random, increase or interject noise and chaos. I'm intentionally maximalizing minimalism. On their own, these images are low quality noise, but I find them useful as reference material for painting.</p>
      </div>
      <Footer />
    </div>
  )
}
import React from 'react'
import Image from 'next/image'
import { Header } from 'src/app/components/header/header.jsx';
import { Footer } from 'src/app/components/footer/footer.jsx';

export default () => {
  return (
    <div className='bg-white'>
      <Header />
      <h1 className='px-4 text-3xl text-gray-700 font-bold'>Chairs Challenge</h1>
      <p className='px-4'>This project began as a group design challenge inspired by Bruno Munari chairs manifesto. Here are some of his sketches:</p>
      <Image className='p-6' src={'/images/chairs/brunoMunariChairs.jpeg'} width={400} height={570} />
      <p className='px-4'>The challenge was to use stable diffusion to 'draw all chairs.' I approached the problem by using photos of existing chairs, converting them to depthmap images and using those as input to controlnet.</p>
      <Image className='p-6 h-auto' src={'/images/chairs/chair_02_depth.png'} width={400} height="0" />
      <p className='px-4'>I found that when I blurred the depthmap image becuase it allowed for the model to produce more 'creative' results</p>
      <Image className='p-6 h-auto' src={'/images/chairs/chair_02_depthBlur.jpg'} width={400} height="0" />
      <p className='px-4'>I used several different chair photos in a similar manner. Here are some of my favorite results:</p>
      <Image className='p-6 h-auto' src={'/images/chairs/chair_ornate.png'} width={400} height="0" />
      <Image className='p-6 h-auto' src={'/images/chairs/chair_caring1.png'} width={400} height="0" />
      <Image className='p-6 h-auto' src={'/images/chairs/chair_arm_shiney.png'} width={400} height="0" />
      <Image className='p-6 h-auto' src={'/images/chairs/chair_devil.png'} width={400} height="0" />
      <Image className='p-6 h-auto' src={'/images/chairs/chair_party.png'} width={400} height="0" />
      <Image className='p-6 h-auto' src={'/images/chairs/chair_bubble_01.png'} width={400} height="0" />
      <Image className='p-6 h-auto' src={'/images/chairs/chair_bubble.png'} width={400} height="0" />
      <Image className='p-6 h-auto' src={'/images/chairs/bubble_chairs.gif'} loading="lazy" alt={''} width={400} height="0" />
      <p className='px-4'>I then explored the problem from a material study by using textual inversion to train a "style" on some images of tangles of. I</p>
      <Image className='p-6 h-auto' src={'/images/chairs/hairChair_01.png'} width={400} height="0" />
      <Image className='p-6 h-auto' src={'/images/chairs/hairChair_02.png'} width={400} height="0" />
      <Image className='p-6 h-auto' src={'/images/chairs/hairChair_03.png'} width={400} height="0" />
      <Image className='p-6 h-auto' src={'/images/chairs/hairChair_04.png'} width={400} height="0" />
      <Image className='p-6 h-auto' src={'/images/chairs/hairChair_05.png'} width={400} height="0" />
      <Image className='p-6 h-auto' src={'/images/chairs/hairChair_06.png'} width={400} height="0" />
      <Footer />
    </div>
  )
}
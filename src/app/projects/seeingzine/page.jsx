import React from 'react'
import Image from 'next/image'
import { Header } from 'src/app/components/header/header.jsx';
import { Footer } from 'src/app/components/footer/footer.jsx';

export default () => {
  return (
    <div className='bg-white'>
      <Header />
      <h2 className='px-4 text-3xl text-gray-700 font-bold'>seeing comes before words</h2>
      <p className='px-4'>A zine of visual meditation games I made for Sou\'wester Artsweek 2022 in Seaview, WA</p>

      <div className='bg-white'>
        <Image className='p-8' src={'/images/seeingComesBeforeWords/z1.png'} width={400} height={100} />
        <Image className='p-8' src={'/images/seeingComesBeforeWords/z2.png'} width={800} height={100} />
        <Image className='p-8' src={'/images/seeingComesBeforeWords/z3.png'} width={800} height={100} />
        <Image className='p-8' src={'/images/seeingComesBeforeWords/z4.png'} width={800} height={100} />
        <Image className='p-8' src={'/images/seeingComesBeforeWords/z5.png'} width={800} height={100} />
        <Image className='p-8' src={'/images/seeingComesBeforeWords/z6.png'} width={800} height={100} />
        <Image className='p-8' src={'/images/seeingComesBeforeWords/z7.png'} width={800} height={100} />
        <Image className='p-8' src={'/images/seeingComesBeforeWords/z8.png'} width={800} height={100} />
        <Image className='p-8' src={'/images/seeingComesBeforeWords/z9.png'} width={800} height={100} />
        <Image className='p-8' src={'/images/seeingComesBeforeWords/z10.png'} width={800} height={100} />
        <Image className='p-8' src={'/images/seeingComesBeforeWords/z11.png'} width={400} height={100} />
      </div>
      <Footer />
    </div>
  )
}
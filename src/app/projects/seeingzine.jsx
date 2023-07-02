import React from 'react'
import Image from 'next/image'
import { Header } from '@/src/components/header/header'

export default function seeingzine() {
  return (
    <div className='bg-white'>
      <Header />
      <h2 className='px-4 text-3xl text-gray-700 font-bold'>seeing comes before words</h2>
      <p className='px-4'>A zine of visual meditation games I made for Sou\'wester Artsweek 2022 in Seaview, WA</p>

      <div className='bg-white'>
        <Image className='p-8' src={'/seeingComesBeforeWords/1.png'} width={400} height={100} />
        <Image className='p-8' src={'/seeingComesBeforeWords/2.png'} width={800} height={100} />
        <Image className='p-8' src={'/seeingComesBeforeWords/3.png'} width={800} height={100} />
        <Image className='p-8' src={'/seeingComesBeforeWords/4.png'} width={800} height={100} />
        <Image className='p-8' src={'/seeingComesBeforeWords/5.png'} width={800} height={100} />
        <Image className='p-8' src={'/seeingComesBeforeWords/6.png'} width={800} height={100} />
        <Image className='p-8' src={'/seeingComesBeforeWords/7.png'} width={800} height={100} />
        <Image className='p-8' src={'/seeingComesBeforeWords/8.png'} width={800} height={100} />
        <Image className='p-8' src={'/seeingComesBeforeWords/9.png'} width={800} height={100} />
        <Image className='p-8' src={'/seeingComesBeforeWords/10.png'} width={800} height={100} />
        <Image className='p-8' src={'/seeingComesBeforeWords/11.png'} width={400} height={100} />
      </div>
    </div>
  )
}
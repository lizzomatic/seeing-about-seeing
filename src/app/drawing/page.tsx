// 'use client'
import Image from 'next/image';
// import { useState } from 'react';
import React from 'react';
import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";

const images1 = [
  {
    src: '/images/drawings/S1.png',
    width: 4,
    height: 6,
    alt: ""
  },
  {
    src: '/images/drawings/S2.png',
    width: 4,
    height: 6,
    alt: ""
  },
  {
    src: '/images/drawings/S3.png',
    width: 4,
    height: 6,
    alt: ""
  },
  {
    src: '/images/drawings/S4.png',
    width: 6,
    height: 4,
    alt: ""
  },
  {
    src: '/images/drawings/S5.png',
    width: 4,
    height: 6,
    alt: ""
  },
  {
    src: '/images/drawings/S6.png',
    width: 4,
    height: 6,
    alt: ""
  },
  {
    src: '/images/drawings/S7.png',
    width: 4,
    height: 6,
    alt: ""
  },
  {
    src: '/images/drawings/S8.png',
    width: 4,
    height: 6,
    alt: ""
  },
  {
    src: '/images/drawings/S9.png',
    width: 4,
    height: 6,
    alt: ""
  },
  {
    src: '/images/drawings/S10.png',
    width: 4,
    height: 6,
    alt: ""
  },
  {
    src: '/images/drawings/S11.png',
    width: 4,
    height: 6,
    alt: ""
  },
  {
    src: '/images/drawings/S12.png',
    width: 4,
    height: 6,
    alt: ""
  },
  {
    src: '/images/drawings/S13.png',
    width: 4,
    height: 6,
    alt: ""
  },
  {
    src: '/images/drawings/S14.png',
    width: 4,
    height: 6,
    alt: ""
  },
  {
    src: '/images/drawings/S15.png',
    width: 4,
    height: 6,
    alt: ""
  },

  {
    src: '/images/drawings/S18.png',
    width: 4,
    height: 6,
    alt: ""
  },
  {
    src: '/images/drawings/S22.png',
    width: 4,
    height: 6,
    alt: ""
  },
  {
    src: '/images/drawings/S23.png',
    width: 4,
    height: 6,
    alt: ""
  },
  {
    src: '/images/drawings/S24.png',
    width: 4,
    height: 6,
    alt: ""
  },
  {
    src: '/images/drawings/S25.png',
    width: 4,
    height: 6,
    alt: ""
  },
  {
    src: '/images/drawings/S26.png',
    width: 4,
    height: 6,
    alt: ""
  },
]

export default () => {

  return (
    <div className='bg-white px-4'>
      <Header />
      <h1 className='px-4'>Pocket-sized drawings of stuff I see.</h1>
      <p className='px-4'>I draw to tune my vision.</p>
      <Image src={images1[0]} loading="lazy" alt={''} className="p-4" width={400} height={400} />
      <Image src={images1[1]} loading="lazy" alt={''} className="p-4" width={400} height={400} />
      <Image src={images1[2]} loading="lazy" alt={''} className="p-4" width={400} height={400} />
      <Image src={images1[3]} loading="lazy" alt={''} className="p-4" width={400} height={400} />
      <Image src={images1[4]} loading="lazy" alt={''} className="p-4" width={400} height={400} />
      <Image src={images1[5]} loading="lazy" alt={''} className="p-4" width={400} height={400} />
      <Image src={images1[6]} loading="lazy" alt={''} className="p-4" width={400} height={400} />
      <Image src={images1[7]} loading="lazy" alt={''} className="p-4" width={400} height={400} />
      <Image src={images1[8]} loading="lazy" alt={''} className="p-4" width={400} height={400} />
      <Image src={images1[9]} loading="lazy" alt={''} className="p-4" width={400} height={400} />
      <Image src={images1[10]} loading="lazy" alt={''} className="p-4" width={400} height={400} />
      <Image src={images1[12]} loading="lazy" alt={''} className="p-4" width={400} height={400} />
      <Image src={images1[13]} loading="lazy" alt={''} className="p-4" width={400} height={400} />
      <Image src={images1[14]} loading="lazy" alt={''} className="p-4" width={400} height={400} />
      <Image src={images1[15]} loading="lazy" alt={''} className="p-4" width={400} height={400} />
      <Image src={images1[16]} loading="lazy" alt={''} className="p-4" width={400} height={400} />
      <Image src={images1[18]} loading="lazy" alt={''} className="p-4" width={400} height={400} />
      <Image src={images1[19]} loading="lazy" alt={''} className="p-4" width={400} height={400} />
      <Image src={images1[20]} loading="lazy" alt={''} className="p-4" width={400} height={400} />


      <Footer />
    </div>
  );
}
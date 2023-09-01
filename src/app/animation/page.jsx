'use client'

// import { Gifa11y } from 'gifa11y.js';
import { Component } from "react";
import { useState } from 'react';
import React from 'react';
import Image from 'next/image';
import Link, { LinkProps } from 'next/link';
import { Header } from 'src/app/components/header/header.jsx';
import { Footer } from 'src/app/components/footer/footer.jsx';

const images02 = [
  {
    src: '/images/animation/tax_dissolve.gif',
    width: 4,
    height: 4,
    alt: "1040 tax form dissolving into noise"
  },
  {
    src: '/images/animation/bubble_chair.gif',
    width: 4,
    height: 4,
    alt: 'an irridescent chair transforming into a bubble',
  },
  {
    src: '/images/animation/bridgetRiley.gif',
    width: 4,
    height: 4,
    alt: 'an irridescent chair transforming into a bubble',
  },
  {
    src: '/images/animation/trashWitch.gif',
    width: 4,
    height: 4,
    alt: 'a witch made of bubble wrap that melts into mold',
  }

]


export default () => {
  return (
    <div className='bg-white'>
      <Header />
      <h1>animations through visual latent space</h1>
      <p>uses depthmap input to a stable diffusion ai image model</p>

      <Image src={images02[0]} loading="lazy" alt={''} className="p-4" width={400} height={400} />
      <Image src={images02[1]} loading="lazy" alt={''} className="p-4" width={400} height={400} />
      <Image src={images02[2]} loading="lazy" alt={''} className="p-4" width={400} height={400} />
      <Image src={images02[3]} loading="lazy" alt={''} className="p-4" width={400} height={400} />

      <Footer />
    </div>
  )
}
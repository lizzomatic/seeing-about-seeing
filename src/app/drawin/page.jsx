'use client'

import { useState } from 'react';
import React, { useRef } from 'react';
import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer.jsx";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { images, CustomImage } from "./images";


export default () => {

  const ChipStyles = useRef({
    position: 'absolute',
    top: Math.floor(Math.random() * 50),
    left: '50%',
    transform: 'translate(-50%, -50%)'
  });

  return (
    <div className='bg-white'>
      <Header />
      <img src='/images/drawings/c_bbq.png' style={ChipStyles.current} alt="bbq" />
      <Footer />
    </div >
  )
}
// const Image = () => {
// export default Image
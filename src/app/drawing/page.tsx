'use client'

import { useState } from 'react';
import React from 'react';
import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { Gallery } from "react-grid-gallery";
import { images, CustomImage } from "./images";
//import Lightbox from "react-image-lightbox";
// import "react-image-lightbox/style.css";



export default () => {
  // const [index, setIndex] = useState(-1);

  // const currentImage = images[index];
  // const nextIndex = (index + 1) % images.length;
  // const nextImage = images[nextIndex] || currentImage;
  // const prevIndex = (index + images.length - 1) % images.length;
  // const prevImage = images[prevIndex] || currentImage;

  // const handleClick = (index: number, item: CustomImage) => setIndex(index);
  // const handleClose = () => setIndex(-1);
  // const handleMovePrev = () => setIndex(prevIndex);
  // const handleMoveNext = () => setIndex(nextIndex);

  return (
    <div className='bg-white px-4'>
      <Header />
      <h3>Pocket-sized drawings of stuff I see. I draw to tune my vision.</h3>  
        <Gallery images={images}/>

    
      <Footer />
    </div>
  );
}

// import React, { useRef } from 'react';
    
// const Image = () => {
//    const ChipStyles = useRef({
//        position: 'absolute',
//        top: Math.floor(Math.random()*50),
//        left: '50%',
//        transform: 'translate(-50%, -50%)'
//    });

//    return (
//      <img src={myImg} style={ChipStyles.current} alt=""}/>
//    )
// }
    
// export default Image

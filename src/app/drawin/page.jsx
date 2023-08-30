'use client'

import { useCallback, useState, useId } from 'react';
import React, { useRef } from 'react';
import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer.jsx";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { images, CustomImage } from "./images";

const projects = [
  {
    title: "Drawing Hands",
    desc: "Inspired by MC Escher's 'Drawing Hands', I experimented with digitally hand-painted depthmap images that I passed into a Stable Diffusion AI model as depth information to generate a logo representing human and AI in collaboration.",
    img: "/images/depthMap_16.png",
    href: "https://docs.google.com/presentation/d/e/2PACX-1vRltiDEraUNGqveIuMLLGXEL4heZMHh3-7fAANRVmqH_ppOb5pdNDDb-BxGE9eSskFR9DF81T_P18sX/pub?start=false&loop=false&delayms=3000",
    tags: ['ai', 'drawing', 'digital painting']
  },
  {
    title: "Seeing comes before words",
    desc: "A zine of visual meditation games I made for Sou'wester Artsweek 2022 in Seaview, WA",
    img: "/images/eye.png",
    href: "/projects/seeingzine",
    tags: ['zine', 'drawing']
  },
  {
    title: "Ceramics for deep listening",
    desc: "Raku fired ceramics devices for focusing and filtering sensory attention. These are inspired by Pauline Oliveros' Deep Listening practices and an urgent desire to unlearn cultural attachment to our devices and \"re-vice\" a connection to our sensory experience.",
    img: "/images/ceramicsForDeepListening.jpg",
    href: "",
    tags: ['ceramics', 'deep listening']
  },
  {
    title: "i/o{&infin;}",
    desc: "A visual conversation through time and technoogy processes. One output is another input. Keep going: always somewhere, never ends. Some of these images I have been working with for years. This is a story about getting lost and finding meaning in visual artifacts gained along the way. The plotline is the product of entropy.",
    img: "/images/arrowsFingers.jpg",
    href: "",
    tags: ['photography', 'drawing', 'painting', 'digital', 'mixed media']
  },
  {
    title: "sketchbook",
    desc: "pocket-sized drawings of stuff I see",
    img: "/images/bbq.png",
    href: "/drawing",
    tags: ['drawing']
  },
  {
    title: "latent space animations",
    desc: "animation experiments through visual latent space using image input to stable diffusion ai models",
    img: "/images/animations/riley.png",
    href: "/animations",
    tags: ['ai', 'digital', 'animation']
  },
  {
    title: "unfinished collection of unfinished collections",
    desc: "where each object is a member of two and only two collections, and each collection has two and only two objects. I break the rules a lot, otherwise it would be 'finished'.",
    img: "/images/.png",
    href: "/",
    tags: ['collections']
  },
  {
    title: "crayon box",
    desc: "",
    img: "/images/.png",
    href: "/",
    tags: ['collections', 'colors']
  },
  {
    title: "ambiguous use vessels",
    desc: "",
    img: "/images/.png",
    href: "/",
    tags: ['ceramics', 'product design']
  },
  {
    title: "how-to make a backpack out of anything",
    desc: "workshop originally held at ADX maker space in Portland, Oregon",
    img: "/images/.png",
    href: "/",
    tags: ['workshop', 'textiles', 'product design', 'user interface']
  },
  {
    title: "post-prehensile",
    desc: "",
    img: "/images/.png",
    href: "/",
    tags: ['product design', 'drawing', 'body', 'user interface']
  },
  {
    title: "how are you feeling in your body?",
    desc: "drawing the daily data of sensation in my body began as a communication with my accupuncturist. As a visual language, helped me to learn/unlearn a way of knowing/living my body through communication and feedback.",
    img: "/images/.png",
    href: "/",
    tags: ['body', 'drawing']
  },
  {
    title: "xomatic studio",
    desc: "",
    img: "/images/.png",
    href: "https://www.xomatic.studio",
    tags: ['body', 'fashion', 'textiles', 'product design', 'branding']
  },
  {
    title: "which-craft",
    desc: "trash witch videogame graphics",
    img: "/images/.png",
    href: "/",
    tags: ['drawing', 'illustration', 'game']
  },
  {
    title: "a picture can be a question about user experience",
    desc: "",
    img: "/images/.png",
    href: "/",
    tags: ['fashion', 'illustration', 'ai']
  },
  {
    title: "color data",
    desc: "tools for extracting color information from pictures and fairytales",
    img: "/images/.png",
    href: "/",
    tags: ['data', 'illustration', 'color']
  }
]
const addTag = useCallback(
  (tag) => () => {
    if (!tags.includes(tag)) {
      return setHttpClientAndAgentOptions((prevTags) => [...prevTags, tag]);
    }
  },
  [tags]
);

const deleteTag = useCallback(
  (tagId) => () => {
    const tagsFiltered = tags.filter((tag) => {
      return tag !== tagId;
    });
    setTags(tagsFiltered);
  },
  [tags]
);

const matchTags = (current, target) => {
  return target.every((tag) => current.includes(tag));
};
// export default () => {

//   const ChipStyles = useRef({
//     position: 'absolute',
//     top: Math.floor(Math.random() * 50),
//     left: '50%',
//     transform: 'translate(-50%, -50%)'
//   });

//   return (
//     <div className='bg-white'>
//       <Header />
//       <img src='/images/drawings/c_bbq.png' style={ChipStyles.current} alt="bbq" />
//       <Footer />
//     </div >
//   )
// }


// export default () => {
//   return (
//     <>
//       <div className='tags-container'>
//         <h1 className='tag-filter'>tags</h1>
//         <div>
//           {tags.length > 0
//             ? tags.map((tag) => {
//               return (
//                 <button
//                   key={'close-button-${id'}
//                   className='close'
//                   onclick={deleteTag(tag)}
//                 >
//                   {tag} &nbsp; x
//                 </button>
//               );
//             })
//             : 'No tags selected'}
//         </div>
//         {projects
//           .filter((proj) = matchTags(proj.tags, tags))
//           .map(({ title, description, tags }) => {
//             return (
//               <div key={`car-${id}`} className='card'>
//                 <div>
//                   <p>{title}</p>
//                   <p>{desc}</p>
//                 </div>
//               </div>
//               {
//               tags.map((tag) => {
//                 return (
//                   <button
//                     key={'add-button-${id}`}
//                     type='button'
//                     onClick={addTag(tag)}
//                   >
//                     #{tag}
//                   </button>
//                 );
//               })
//             }
//       </div >
//       );

//       )
//     </>
//   })
// // }))
// // </div >
// // );
// // }

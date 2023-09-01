'use client'

import { useCallback, useState, useId } from 'react';
import React, { useRef } from 'react';
import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer.jsx";
import { images, CustomImage } from "./images";

// const addTag = useCallback(
//   (tag) => () => {
//     if (!tags.includes(tag)) {
//       return setHttpClientAndAgentOptions((prevTags) => [...prevTags, tag]);
//     }
//   },
//   [tags]
// );

// const deleteTag = useCallback(
//   (tagId) => () => {
//     const tagsFiltered = tags.filter((tag) => {
//       return tag !== tagId;
//     });
//     setTags(tagsFiltered);
//   },
//   [tags]
// );

// const matchTags = (current, target) => {
//   return target.every((tag) => current.includes(tag));
// };
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

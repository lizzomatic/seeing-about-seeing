import Image from 'next/image';
import Link, { LinkProps } from 'next/link';
import React from 'react';
import { Header } from 'src/app/components/header/header.jsx';
import { Footer } from 'src/app/components/footer/footer.jsx'

const projects = [
  {
    title: "Drawing Hands",
    desc: "Inspired by MC Escher's 'Drawing Hands', I experimented with digitally hand-painted depthmap images that I passed into a Stable Diffusion AI model as depth information to generate a logo representing human and AI in collaboration.",
    img: "/images/depthMap_16.png",
    href: "https://docs.google.com/presentation/d/e/2PACX-1vRltiDEraUNGqveIuMLLGXEL4heZMHh3-7fAANRVmqH_ppOb5pdNDDb-BxGE9eSskFR9DF81T_P18sX/pub?start=false&loop=false&delayms=3000"
  },
  {
    title: "Seeing comes before words",
    desc: "A zine of visual meditation games I made for Sou'wester Artsweek 2022 in Seaview, WA",
    img: "/images/eye.png",
    href: "/seeingzine"
  },
  {
    title: "Ceramics for deep listening",
    desc: "Raku fired ceramics devices for focusing and filtering sensory attention. These are inspired by Pauline Oliveros' Deep Listening practices and an urgent desire to unlearn cultural attachment to our devices and \"re-vice\" a connection to our sensory experience.",
    img: "/images/ceramicsForDeepListening.jpg",
    href: ""
  },
  // {
  //   title: "Arrows pointers",
  //   desc: "this is a project about getting lost, losing direction in the process of abstraction: and making meaning from the visual artifacts gained along the way. various media: photograph, painting, photocopy, scan, print, scan, print, photo, scan, print, color pencil, solvent, scan.",
  //   img: "/images/arrowsFingers.jpg",
  //   href: ""
  // }
]

export default () => {
  return (
    <div className='bg-white'>
      <Header />
      <h2 className='px-4 text-2xl text-gray-700 font-bold'>Projects</h2>
      <ul className="">
        {
          projects.map((items, key) => (
            <li className="p-1" key={key}>
              <Link className="flex sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3" href={`${items.href}`} >
                <Image src={items.img} loading="lazy" alt={items.title} className="p-2 flex-none" width={200} height={200} />
                <div className="justify-items-start p3">
                  <h3 className="text-lg text-gray-800 duration-150 group-hover:text-gray-800 font-semibold">
                    {items.title}
                  </h3>
                  <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">{items.desc}</p>
                </div>
              </Link>
            </li>
          ))
        }
      </ul>
      <Footer />
    </div>
  )
}

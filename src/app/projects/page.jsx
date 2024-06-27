import Image from 'next/image';
import Link, { LinkProps } from 'next/link';
import React from 'react';
import { Header } from 'src/app/components/header/header.jsx';
import { Footer } from 'src/app/components/footer/footer.jsx'

const projects = [
  {
    title: "drawing hands",
    desc: "branding/visual identity work for a startup exploring AI-human collaboration. I used digitally hand-painted depthmap images of MC Escher's'drawing hands' passed into a stable diffusion ai model as depth information",
    img: "/images/depthMap_16.png",
    href: "https://docs.google.com/presentation/d/e/2PACX-1vRltiDEraUNGqveIuMLLGXEL4heZMHh3-7fAANRVmqH_ppOb5pdNDDb-BxGE9eSskFR9DF81T_P18sX/pub?start=false&loop=false&delayms=3000",
    tags: []
  },
  {
    title: "maximalizing minimalism",
    desc: "uses stable diffusion controlnet to explore big complex meaning in minimalist art",
    img: "/images/animation/riley.png",
    href: "/projects/maximalize",
    tags: []
  },
  {
    title: "chairs challenge",
    desc: "design challenge inspired by Bruno Munari chairs project",
    img: "/images/chairs/chair_caring1.png",
    href: "/projects/chairs",
    tags: []
  },
  {
    title: "seeing comes before words",
    desc: "zine of visual meditation games",
    img: "/images/eye.png",
    href: "/projects/seeingzine",
    tags: []
  },
  {
    title: "ceramics for deep listening",
    desc: "raku fired ceramics devices for focusing and filtering sensory attention, and unlearning cultural attachment to devices",
    img: "/images/ceramicsForDeepListening.jpg",
    href: "/projects/sensoryraku",
    tags: []
  },
  {
    title: "sketchbook",
    desc: "pocket-sized drawings of stuff I see",
    img: "/images/drawings/computers.png",
    href: "/drawing",
    tags: []
  },
  {
    title: "i/o \u221E",
    desc: "archive",
    img: "/images/arrowsFingers.jpg",
    href: "",
    tags: []
  },
]

export default () => {
  return (
    <div className='bg-white'>
      <Header />
      {/* <h2 className='px-4 text-2xl text-gray-700 font-bold'>Projects</h2> */}
      <ul className="">
        {
          projects.map((items, key) => (
            <li className="p-1" key={key}>
              <Link className="flex sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3" href={`${items.href}`} >
                <Image src={items.img} loading="lazy" alt={items.title} className="p-2 flex-none" width={400} height={400} />
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

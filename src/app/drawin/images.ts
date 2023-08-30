import { Image } from "react-grid-gallery";

export interface CustomImage extends Image {
  alt: string;
}

export const images: CustomImage[] = [
  {
    src: '/images/drawings/c_bbq.png',
    width: 3,
    height: 5,
    alt: "drawing of a bbq grill and a wooden bench",
    tags: [],
  },
  {
    src: '/images/drawings/c_cafe.png',
    width: 3,
    height: 5,
    alt: "drawing of a cafe and record store"
  },
  {
    src: '/images/drawings/d_car.png',
    width: 6,
    height: 4,
    alt: "drawing of the hood of a car"
  },
  {
    src: '/images/drawings/d_computers.png',
    width: 6,
    height: 4,
    alt: "drawing of computers"
  },
];

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
    title: "which witch",
    desc: "",
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
    title: "color story data viz",
    desc: "tools for extracting color information from pictures and fairytales",
    img: "/images/.png",
    href: "/",
    tags: ['data', 'illustration', 'color']
  }
]

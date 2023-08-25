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

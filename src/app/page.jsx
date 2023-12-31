import Head from 'next/head'
import Image from 'next/image';
import Link, { LinkProps } from "next/link"
import { Header } from '/src/app/components/header/header.jsx';
import { Footer } from '/src/app/components/footer/footer.jsx';
import { Metadata } from 'next'

export const metadata = {
  title: 'seeing about seeing',
  icon: 'images/favicon.ico',
}
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

export default function Home() {
  return (
    <div className='bg-white'>
      <Head>
        <title>seeing about seeing</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className='bg-white'>

        <Link className='px-4 grid' href='/projects' >
          <Image src="/images/iDontKnowNorKnowWhoKnows_01.jpeg" className='' width="600" height="600"
            alt="a striped faceless figure with butterfly wings as ears" />
        </Link>
      </main >
      <Footer />

    </div>
  )
}

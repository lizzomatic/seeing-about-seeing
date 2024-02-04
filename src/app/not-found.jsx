import Link from 'next/link';
import { Header } from '/src/app/components/header/header.jsx';
import { Footer } from '/src/app/components/footer/footer.jsx';
import { Inter } from 'next/font/google';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div>
      <Header />
      <main className='bg-white'>
        <h1>404 error</h1>
        <h2>one of us is lost or hasn't arrived yet</h2>
        <Image src="/images/urbanFreeway.jpeg" className='' width="600" height="600" />
      </main>
      <Footer />
    </div>
  )
}
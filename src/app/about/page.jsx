import React from 'react';
import { Header } from 'src/app/components/header/header.jsx';
import { Footer } from 'src/app/components/footer/footer.jsx';

export default () => {
  return (
    <div className='bg-white'>
      <Header />
      <p className='px-4'>
        <b>Elizabeth Goltz</b> is a visual artist, designer, and creative technologist.
        <br />
        <b>Seeing about seeing</b> is a repository for visual research.
      </p>
      <Footer />
    </div>
  )
}


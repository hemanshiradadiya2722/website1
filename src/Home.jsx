import React from 'react'
// import Header from './Header'
// import Faq from './Faq'
import Layout from './Layout';
import Cards from './Cards';
import Price from './Price';
import Testimonials from './Testimonials';
// import F_top from './F_top';
// import Footer from './Footer';
import Head from './Head';
import FTop from './FTop';

export default function Home ()  {
  return (
    <div>
      {/* <Header/> */}
      <Head/>
      <Cards/>
      <Layout/>
      <Price/>
      <Testimonials/>
      <FTop/>
      {/* <F_top/> */}
      {/* <Footer/> */}

        {/* <button><a href="/about">go to about</a></button> */}
    </div>
  )
}


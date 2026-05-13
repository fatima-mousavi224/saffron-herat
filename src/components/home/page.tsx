import React from 'react'
import Hero from './Hero'
import AboutUs from './AboutUs'
import ProductList from './ProductList'
import Categories from './Categories'
import GiftBanner from './GiftBanner'
import Blog from './Blog'

const LandingPage = () => {
  return (
    <>
    <section className="max-w-7xl mx-auto lg:px-10 md:px-8 sm:px-6 px-4">
      <Hero />
      <ProductList />
      <AboutUs />
      <Categories />
      <GiftBanner />
    </section>
    <section className='w-full bg-grey-100'>
     <Blog />
    </section>
    </>
  )
}

export default LandingPage

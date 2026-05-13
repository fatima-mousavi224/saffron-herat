import React from 'react'
import Hero from './Hero'
import AboutUs from './AboutUs'

const LandingPage = () => {
  return (
    <section className="max-w-7xl mx-auto lg:px-10 md:px-8 sm:px-6 px-4">
      <Hero />
      <AboutUs />
    </section>
  )
}

export default LandingPage

import { useState } from 'react'
import Nav from './components/nav/Nav'
import Hero from './components/hero/Hero'
import Footer from './components/footer/Footer'

export default function App() {

  return (
    <>
      <div className="">
        <Nav />
        <Hero />

        <Footer />
      </div>
    </>
  )
}

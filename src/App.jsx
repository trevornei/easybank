import { useState } from 'react'
import Nav from './components/nav/Nav'
import Hero from './components/hero/Hero'
import CardTwo from './components/cardTwo/CardTwo'
import CardThree from './components/cardThree/CardThree'
import Footer from './components/footer/Footer'

export default function App() {

  return (
    <>
        <div className="selection-eCash/20 scroll-smooth cursor-crosshair">
          <Nav />
            <Hero />
            <CardTwo />
            <CardThree />
          <Footer />
        </div>
    </>
  )
}

import { useState } from "react";
import Nav from "./components/nav/Nav";
import Hero from "./components/hero/Hero";
import CardTwo from "./components/cardTwo/CardTwo";
import CardThree from "./components/cardThree/CardThree";
import Footer from "./components/footer/Footer";
import HeroAssets from "./components/hero/HeroAssets";

export default function App() {
  return (
    <>
      <div className="selection-eCash/20 scroll-smooth cursor-crosshair relative w-screen h-auto">
        <Nav />
        <div className="relative">
          <Hero />
          <HeroAssets />
        </div>
        <CardTwo />
        <CardThree />
        <Footer />
      </div>
    </>
  );
}

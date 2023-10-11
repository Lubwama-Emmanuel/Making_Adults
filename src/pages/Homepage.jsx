import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Offer from "../components/Offer";
import { useState } from "react";
import MobileMenu from "../components/MobileMenu";
import BottonLine from "../ui/BottonLine";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Homepage() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="mx-auto max-w-screen-2xl">
      <Header clicked={clicked} setClicked={setClicked} />
      {clicked && <MobileMenu />}

      <Hero />
      <Offer />
      <Contact />
      <About />

      <BottonLine />
      <Footer />
    </div>
  );
}

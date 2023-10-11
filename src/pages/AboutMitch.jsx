import { useState } from "react";
import Mitch from "../components/Mitch";
import MobileMenu from "../components/MobileMenu";
import BottonLine from "../ui/BottonLine";
import Footer from "../components/Footer";
import Header from "../components/Header";

// About Mitch
export default function AboutMitch() {
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <Header clicked={clicked} setClicked={setClicked} />
      {clicked && <MobileMenu />}

      <Mitch />

      <BottonLine />
      <Footer />
    </div>
  );
}

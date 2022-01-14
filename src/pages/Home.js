import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import React from "react";

const Home = () => {
   return (
      <React.Fragment>
         <Navbar />
         <Hero
            htitle="Hello!"
            hsubtitle="I'm Juan J. Malaver"
            hparagraph="Web developer with a passion for art, design and photography."
         />
         <Footer />
      </React.Fragment>
   );
};

export { Home };

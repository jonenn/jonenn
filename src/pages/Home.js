import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { Layout } from "../components/Layout";
import React from "react";

const Home = () => {
   return (
      <Layout>
         <React.Fragment>
            <Hero
               htitle="Hello!"
               hsubtitle="I'm Juan J. Malaver"
               hparagraph="Web developer with a passion for art, design and photography."
            />
         </React.Fragment>
      </Layout>
   );
};

export { Home };

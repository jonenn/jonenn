import { Hero } from "../components/Hero";
import { Layout } from "../components/Layout";
import React from "react";

const Home = () => {
   return (
      <Layout className="layout">
         <Hero
            htitle="Hello!"
            hsubtitle="I'm Juan J. Malaver"
            hparagraph="Web developer with a passion for art, design and photography."
         />
      </Layout>
   );
};

export { Home };

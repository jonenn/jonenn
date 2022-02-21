import { Hero } from "../components/Hero";
import { Layout } from "../components/Layout";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const Home = () => {
   const { showMenu } = useContext(DataContext);
   return (
      <Layout>
         <Hero
            currentState={showMenu}
            htitle="Hello!"
            hsubtitle="I'm Juan J. Malaver"
            hparagraph="Web developer with a passion for art, design and photography."
         />
      </Layout>
   );
};

export { Home };

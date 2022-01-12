import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Home = () => {
   return (
      <div>
         <Navbar />
         <Hero
            htitle="Hello!"
            hsubtitle="I'm Juan J. Malaver"
            hparagraph="Web developer with a passion for art, design and photography."
         />
      </div>
   );
};

export default Home;

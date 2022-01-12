import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const Home = () => {
   return (
      <div>
         <Navbar />
         <Hero
            htitle="Hello!"
            hsubtitle="I'm Juan J. Malaver"
            hparagraph="Web developer with a passion for art, design and photography."
         />
         <Footer />
      </div>
   );
};

export default Home;

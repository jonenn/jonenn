import jonennHero from "../images/hero.png";
import "../styles/Hero.css";

const Hero = (props) => {
   return (
      <main className="hero">
         <img className="hero__image" src={jonennHero}></img>
         <section className="hero__content">
            <h1 className="hero__title">{props.htitle}</h1>
            <h2 className="hero__subtitle">{props.hsubtitle}</h2>
            <p className="hero__paragraph">{props.hparagraph}</p>
         </section>
      </main>
   );
};

export default Hero;

import jonennHero from "../images/hero.png";
import "../styles/Hero.css";

const Hero = ({ currentState, htitle, hsubtitle, hparagraph }) => {
   let heroClass = "hero";
   if (currentState) {
      heroClass += " active";
   } else {
      heroClass = "hero";
   }
   return (
      <main className={heroClass}>
         <img className="hero__image" src={jonennHero}></img>
         <section className="hero__content">
            <h1 className="hero__title">{htitle}</h1>
            <h2 className="hero__subtitle">{hsubtitle}</h2>
            <p className="hero__paragraph">{hparagraph}</p>
         </section>
      </main>
   );
};

export { Hero };

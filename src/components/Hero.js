import jonennHero from "../images/hero.png";
import "../styles/Hero.css";

const Hero = ({ currentState, htitle, hsubtitle, hparagraph }) => {
   let heroClass = "hero";
   currentState ? (heroClass += " active") : (heroClass = "hero");
   return (
      <main>
         <div className={heroClass}>
            <img className="hero__image" src={jonennHero}></img>
            <section className="hero__content">
               <h1 className="hero__title">{htitle}</h1>
               <h2 className="hero__subtitle">{hsubtitle}</h2>
               <p className="hero__paragraph">{hparagraph}</p>
               <button
                  className="hero__button"
                  onClick={() => (window.location.href = "/portfolio")}
               >
                  Show more
               </button>
            </section>
         </div>
      </main>
   );
};

export { Hero };

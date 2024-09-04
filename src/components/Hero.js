import jonennHero from '../images/hero.png';
import '../styles/Hero.css';
import { Link } from 'react-router-dom';

const Hero = ({ currentState, htitle, hsubtitle, hparagraph }) => {
   let heroClass = 'hero';
   currentState ? (heroClass += ' active') : (heroClass = 'hero');
   return (
      <main>
         <div className={heroClass}>
            <img
               className="hero__image"
               src={jonennHero}
               alt="Website's Hero"
            ></img>
            <section className="hero__content">
               <h1 className="hero__title">{htitle}</h1>
               <h2 className="hero__subtitle">{hsubtitle}</h2>
               <p className="hero__paragraph">{hparagraph}</p>
               <Link
                  className="hero__button"
                  to={'/about'}
                  style={{ textDecoration: 'none' }}
               >
                  Show more
               </Link>
            </section>
         </div>
      </main>
   );
};

export { Hero };

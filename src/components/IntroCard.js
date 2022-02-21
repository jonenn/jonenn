import profile from "../images/me.jpeg";
import "../styles/IntroCard.css";

const IntroCard = ({ currentState, ctitle, cparagraph, csubtitle }) => {
   let cardWrapperClass = "card__wrapper";
   currentState
      ? (cardWrapperClass += " active")
      : (cardWrapperClass = "card__wrapper");
   return (
      <div className={cardWrapperClass}>
         <div className="card">
            <img className="card__image" src={profile}></img>
            <div className="card__container">
               <h1 className="card__title">{ctitle}</h1>
               <p className="card__paragraph">{cparagraph}</p>
               <h2 className="card__subtitle">{csubtitle}</h2>
               <section className="card__list">
                  <ul className="card__list--items">
                     <li>HTML5</li>
                     <li>CSS3</li>
                     <li>JavaScript</li>
                  </ul>
                  <ul className="card__list--items">
                     <li>JSON</li>
                     <li>Bootstrap</li>
                     <li>Git/GitHub</li>
                  </ul>
                  <ul className="card__list--items">
                     <li>React</li>
                     <li>Photoshop</li>
                     <li>Illustrator</li>
                  </ul>
               </section>
            </div>
         </div>
      </div>
   );
};

export { IntroCard };

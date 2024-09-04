import profile from '../images/me.jpeg';
import '../styles/IntroCard.css';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';

const IntroCard = ({ currentState, ctitle, cparagraph, csubtitle }) => {
   let cardWrapperClass = 'card__wrapper';
   currentState
      ? (cardWrapperClass += ' active')
      : (cardWrapperClass = 'card__wrapper');
   return (
      <div className={cardWrapperClass}>
         <div className="card">
            <img className="card__image" src={profile}></img>
            <div className="card__subcontainer">
               <h1 className="card__title">{ctitle}</h1>
               <p className="card__paragraph">{cparagraph}</p>
               <h2 className="card__subtitle">{csubtitle}</h2>
               <section className="card__list">
                  <ul className="card__list--items">
                     <li>HTML5</li>
                     <li>CSS3</li>
                     <li>JavaScript</li>
                     <li>JSON</li>
                     <li>Bash</li>
                     <li>CSS Flex</li>
                     <li>Grid Layout</li>
                  </ul>
                  <ul className="card__list--items">
                     <li>Responsiveness</li>
                     <li>Git/GitHub</li>
                     <li>Vite</li>
                     <li>React</li>
                     <li>React Router</li>
                     <li>React Context</li>
                     <li>Redux</li>
                  </ul>
                  <ul className="card__list--items">
                     <li>NPM</li>
                     <li>Axios</li>
                     <li>Bootstrap</li>
                     <li>Photoshop</li>
                     <li>Illustrator</li>
                     <li>Figma</li>
                     <li>Agile/SCRUM</li>
                  </ul>
               </section>
            </div>
            <section className="contact">
               <p>Contact me:</p>
               <a href="https://www.linkedin.com/in/juan-j-malaver-04013119b">
                  <img src={linkedin} width="33"></img>
               </a>
               <a href="https://github.com/jonenn">
                  <img src={github} width="33"></img>
               </a>
            </section>
         </div>
      </div>
   );
};

export { IntroCard };

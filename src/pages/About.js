import { Layout } from "../components/Layout";
import { date } from "../App";
import profile from "../images/me.jpeg";
import "../styles/About.css";

const About = () => {
   return (
      <Layout className="layout">
         <div className="box">
            <div className="image__container">
               <img className="box__image" src={profile}></img>
            </div>
            <div className="box__container">
               <h1 className="box__title">About me</h1>
               <p className="box__paragraph">
                  I am Juan J. Malaver, a {`${date.getFullYear() - 1999}`} year
                  old front-end developer that loves learning new things every
                  day. I have always been passionate about art, literature,
                  photography, cinematography, design and technology as much as
                  solving problems.
               </p>
               <h2 className="box__subtitle">Skills</h2>
               <section className="box__list">
                  <ul className="box__list--items">
                     <li>HTML5</li>
                     <li>CSS3</li>
                     <li>JavaScript</li>
                  </ul>
                  <ul className="box__list--items">
                     <li>JSON</li>
                     <li>Bootstrap</li>
                     <li>Git/GitHub</li>
                  </ul>
                  <ul className="box__list--items">
                     <li>React</li>
                     <li>Photoshop</li>
                     <li>Illustrator</li>
                  </ul>
               </section>
            </div>
         </div>
      </Layout>
   );
};

export { About };

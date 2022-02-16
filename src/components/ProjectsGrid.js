import { Project } from "./Project";
import "../styles/ProjectsGrid.css";
import monet from "../images/monet.png";
import musique from "../images/musique.png";
import renoir from "../images/renoir.png";
import simon from "../images/simon.png";

const ProjectsGrid = () => {
   return (
      <div className="portfolio">
         <h1 className="portfolio__title">My Portfolio</h1>
         <section className="portfolio__wrapper">
            <Project title="musique - The web's music player" image={musique} />
            <Project title="Simon Game" image={simon} />
            {/* <Project title="Converter" image={converter} /> */}
            <Project title="Renoir's Gallery" image={renoir} />
            <Project title="Claude Monet" image={monet} />
         </section>
      </div>
   );
};

export { ProjectsGrid };

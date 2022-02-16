import "../styles/Project.css";

const Project = (props) => {
   return (
      <section className="window">
         <section className="window__title">
            <div className="window__control close"></div>
            <div className="window__control minimize"></div>
            <div className="window__control maximize"></div>
            <h6 className="window__title--project">{props.title}</h6>
         </section>
         <img className="window__image" src={props.image}></img>
      </section>
   );
};

export { Project };

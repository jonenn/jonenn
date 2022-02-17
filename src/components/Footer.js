import "../styles/Footer.css";
import { date } from "../App";

const Footer = () => {
   return (
      <footer>
         <section className="footer__wrapper">
            <p className="footer__credits">{`Jonenn Developer - ${date.getFullYear()}`}</p>
         </section>
      </footer>
   );
};
export { Footer };

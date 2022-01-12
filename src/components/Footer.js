import "../styles/Footer.css";

const Footer = () => {
   let date = new Date();
   return (
      <footer>
         <section className="footer__wrapper">
            <p className="footer__credits">{`Jonenn Developer - ${date.getFullYear()}`}</p>
         </section>
      </footer>
   );
};
export default Footer;

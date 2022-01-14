import jonennLogo from "../images/logo.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import "../styles/Navbar.css";

const Navbar = () => {
   return (
      <header>
         <nav>
            <ul className="on-site">
               <li>
                  <a href="#">Home</a>
               </li>
               <li>
                  <a href="#">Portfolio</a>
               </li>
               <li>
                  <a href="#">About</a>
               </li>
               <li>
                  <a href="#">Contact</a>
               </li>
            </ul>
            <a href="#">
               <img className="logo" src={jonennLogo} height="78"></img>
            </a>
            <ul className="off-site">
               <li>
                  <a href="https://www.linkedin.com/in/juan-j-malaver-04013119b">
                     <img src={linkedin} width="27"></img>
                  </a>
               </li>
               <li>
                  <a href="https://github.com/jonenn">
                     <img src={github} width="27"></img>
                  </a>
               </li>
            </ul>
         </nav>
      </header>
   );
};

export { Navbar };

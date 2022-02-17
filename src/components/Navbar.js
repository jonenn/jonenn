import jonennLogo from "../images/logo.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
   return (
      <header>
         <nav>
            <ul className="on-site">
               <li>
                  <Link to={"/"}>Home</Link>
               </li>
               <li>
                  <Link to={"/portfolio"}>Portfolio</Link>
               </li>
               <li>
                  <Link to="/about">About</Link>
               </li>
               <li>
                  <Link to="#">Contact</Link>
               </li>
            </ul>
            <ul className="off-site">
               <li>
                  <a href="https://www.linkedin.com/in/juan-j-malaver-04013119b">
                     <img src={linkedin} width="33"></img>
                  </a>
               </li>
               <li>
                  <a href="https://github.com/jonenn">
                     <img src={github} width="33"></img>
                  </a>
               </li>
            </ul>
            <Link className="logo--link" to="/">
               <img className="logo--image" src={jonennLogo} height="78"></img>
            </Link>
         </nav>
      </header>
   );
};

export { Navbar };

import "../styles/OnSiteNav.css";
import { Link } from "react-router-dom";

const OnSiteNav = ({ currentState }) => {
   const mobileMenu = document.querySelector(".on-site");
   if (currentState) {
      mobileMenu.classList.add("active");
   } else {
      mobileMenu.classList.remove("active");
   }
   return (
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
         {/* <li>
                  <Link to="#">Gallery</Link>
               </li> */}
      </ul>
   );
};

export { OnSiteNav };

import "../styles/OnSiteNav.css";
import { Link } from "react-router-dom";

const OnSiteNav = ({ currentState }) => {
   const mobileMenu = document.querySelector(".on-site");
   let onSiteClass = "on-site";
   if (currentState) {
      onSiteClass += " active";
   } else {
      onSiteClass = "on-site";
   }
   return (
      <ul className={onSiteClass}>
         <li>
            <Link to={"/"}>Home</Link>
         </li>
         <li>
            <Link to={"/portfolio"}>Portfolio</Link>
         </li>
         <li>
            <Link to="/about">About</Link>
         </li>
      </ul>
   );
};

export { OnSiteNav };

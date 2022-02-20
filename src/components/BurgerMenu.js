import { useContext, useState } from "react";
import { OnSiteNav } from "./OnSiteNav";
import "../styles/BurgerMenu.css";

const BurgerMenu = ({ currentState, setShowMenu }) => {
   console.log(currentState);
   return (
      <div className="menu-mobile" onClick={() => setShowMenu(!currentState)}>
         <div className="burger-b"></div>
         <div className="burger-b"></div>
         <div className="burger-b"></div>
      </div>
   );
};

export { BurgerMenu };

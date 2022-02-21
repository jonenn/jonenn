import "../styles/BurgerMenu.css";

const BurgerMenu = ({ currentState, setShowMenu }) => {
   return (
      <div
         className="menu-mobile"
         onClick={() => {
            setShowMenu(!currentState);
         }}
      >
         <div className="burger-b"></div>
         <div className="burger-b"></div>
         <div className="burger-b"></div>
      </div>
   );
};

export { BurgerMenu };

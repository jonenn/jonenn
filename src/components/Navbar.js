import jonennLogo from '../images/logo.png';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import { BurgerMenu } from './BurgerMenu';
import { OnSiteNav } from './OnSiteNav';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

const Navbar = () => {
   const { showMenu, setShowMenu } = useContext(DataContext);
   return (
      <header>
         <nav>
            <BurgerMenu currentState={showMenu} setShowMenu={setShowMenu} />
            <OnSiteNav currentState={showMenu} />
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

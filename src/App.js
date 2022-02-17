import "./global.css";
import { About } from "./pages/About";
import { Portfolio } from "./pages/Portfolio";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
   return (
      <Router>
         <Switch>
            <Route path="/about">
               <About />
            </Route>
            <Route path="/portfolio">
               <Portfolio />
            </Route>
            <Route path="/">
               <Home />
            </Route>
         </Switch>
      </Router>
   );
};

const date = new Date();
export { date };

export { App };

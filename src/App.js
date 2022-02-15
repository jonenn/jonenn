import "./global.css";
import { Portfolio } from "./pages/Portfolio";
import { Hero } from "./components/Hero";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
   return (
      <Router>
         <Switch>
            <Route path="/Portfolio">
               <Portfolio />
            </Route>
            <Route path="/">
               <Home />
            </Route>
         </Switch>
      </Router>
   );
};

export { App };

import './App.css';

import {NavLink, Route, Switch, Redirect} from "react-router-dom"
import Home from "./views/Home"
import About from "./views/About"
import MyNavLink from './components/MyNavLink';

function App() {
  return (
    <div className="App">
        <nav>
          {/* <NavLink to="/home" activeClassName="activeNav">Home</NavLink>
          <NavLink to="/about" activeClassName="activeNav">About</NavLink> */}
          <MyNavLink to="/home">Home</MyNavLink> | &nbsp;
          <MyNavLink to="/about">About</MyNavLink>
        </nav>
        <section>
          {/* 只显示其中一个 */}
          <Switch>
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Redirect to="/home" />
          </Switch>
        </section>
    </div>
  );
}

export default App;

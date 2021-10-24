import './App.css';

import React,{Component, Fragment} from "react";
import { Switch,Route,Redirect } from 'react-router-dom';
import Home from './views/home';
import About from './views/about';
import MyNavLink from './components/MyNavLink'

class App extends Component {
    render(){
        return(
            <Fragment>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <MyNavLink to="/home">Home</MyNavLink>
                  </li>
                  <li className="breadcrumb-item">
                    <MyNavLink to="/about">About</MyNavLink>
                  </li>
                </ol>
              </nav>
              <div>
                <Switch>
                  <Route path="/home" component={Home}/>
                  <Route path="/about" component={About}/>
                  <Redirect to="/home"/>
                </Switch>
              </div>
            </Fragment>
        )
    }
}

export default App;


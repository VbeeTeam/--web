import { Component } from "react";

import Home from "../views/home";

import { Switch, Route, Redirect } from "react-router-dom";

export default class AdminRouter extends Component {
  render() {
    var user = true;
    if(!user){
        return <Redirect to="/login" />
    }
    return (
      <div className="adminRouter">
       <Switch>
          <Route path="/home" component={Home} />
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

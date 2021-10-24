import React, { Component } from "react";
import { Switch,Route,Redirect } from "react-router-dom";
import MyNavLink from "../components/MyNavLink";
import News from "./news";
import Messages from "./messages";

class Home extends Component {
  render() {
    return (
      <>
        <h1>我是Home页</h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <MyNavLink to="/home/news">News</MyNavLink>
            </li>
            <li className="breadcrumb-item">
              <MyNavLink to="/home/messages">Messages</MyNavLink>
            </li>
          </ol>
        </nav>
        <Switch>
            <Route path="/home/news" component={News}/>
            <Route path="/home/messages" component={Messages}/>
            <Redirect to="/home/news" />
        </Switch>
      </>
    );
  }
}

export default Home;

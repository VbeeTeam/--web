import { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import AdminRouter from "./components/AdminRouter";
import Login from "./views/login";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <AdminRouter />
        <Route path="/login" component={Login} />
      </div>
    );
  }
}

import './App.css';
import './menu.css';

import {DoSth, MyRoutes, RouteWithSubRoutes} from './components/my-routes';
import {
  Link,
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import React, { Fragment } from "react";

import About from './components/admin/about';
import AdminNavBar from './components/admin/admin-navbar';
import Contact from './components/admin/contact';
import HomeNavBar from './components/home/home-navbar';
import Signin from './components/signin';
import Signup from './components/signup';
import logo from './logo.svg';

function App() {
  return (

    <div className="App">

    <Switch>
    {MyRoutes.map((route, i) => (

      <RouteWithSubRoutes key={i} {...route} />

    ))}

  </Switch>
  
    </div>
  );
}

export default App;

import './App.css';
import './menu.css';

import {
  Route,
  BrowserRouter as Router,
} from "react-router-dom";

import AdminNavBar from './components/admin/admin-navbar';
import HomeNavBar from './components/home/home-navbar';
import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    <Router>
    <div className="App">

    <Route path="/home">
        <HomeNavBar />
    </Route>
    
    <Route  path="/admin">
        <AdminNavBar />
    </Route>
    
    </div>
    </Router>
  );
}

export default App;

import './App.css';
import './menu.css';

import {
  Route,
  BrowserRouter as Router,
} from "react-router-dom";

import Navbar from './components/admin/navbar';
import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    <Router>
    <div className="App">
    <Navbar />
    </div>
    </Router>
  );
}

export default App;

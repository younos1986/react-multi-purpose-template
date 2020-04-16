import {
    Link,
    Route,
    BrowserRouter as Router,
    Switch
} from "react-router-dom";

import About from './about';
import Contact from './contact';
import Index from './index';
import React from "react";
import { RouteWithSubRoutes } from '../my-routes';

const AdminNavBar = ({ routes }) => {
  return (

    
    <div className="wrapper">
    
    <nav id="sidebar">
        <div className="sidebar-header">
            <div>Bootstrap Sidebar</div>
        </div>

        <ul className="list-unstyled components">
            <li className="active">
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Home</a>
                <ul className="collapse list-unstyled" id="homeSubmenu">
                    <li>
                    <Link className="nav-item nav-link" to="/admin/index">
                        Home
                     </Link>
                    </li>
                    <li>
                    <Link className="nav-item nav-link" to="/admin/about">
                    About
                 </Link>
                    </li>
                    <li>
                    <Link className="nav-item nav-link" to="/admin/contact">
                    contact
                 </Link>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>

    
    <div id="content">

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">

                <button type="button" id="sidebarCollapse" className="navbar-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-align-justify"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Page</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Page</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        
    

        <Switch>
        {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
        ))}
        </Switch>




        </div>
</div>


  );
};

export default AdminNavBar;
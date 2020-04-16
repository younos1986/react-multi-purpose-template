import {
    Route,
    BrowserRouter as Router,
} from "react-router-dom";

import HomeAbout from "./home-about";
import HomeContact from "./home-contact";
import HomeFeatures from "./home-features";
import HomeServices from "./home-services";
import Index from "./index";
import { Link } from "react-router-dom";
import React from "react";

const HomeNavBar = () => {
  return (
    <div>
    
    
    <div className="loader"></div>
    <header id="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#" id="header-logo">
                    <img src="img/logo.png" className="img-fluid" width="200"
                        alt="Icon"/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#top-navigation" aria-controls="top-navigation"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="top-navigation">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                        <Link className="nav-item nav-link" to="/home/index">
                                Home
                                <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-item nav-link" to="/home/about">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-item nav-link" to="/home/features">
                                 Features
                             </Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-item nav-link" to="/home/services">
                        Services
                    </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-item nav-link" to="/home/contact">
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn-success ml-lg-3" href="#">
                                <i className="fa fa-cart-plus"></i> Cart</a>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn-primary ml-lg-3" href="#">
                                <i className="fa fa-sign-in"></i> Sign In</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
   

    <Route path="/home/index">
    <Index />
    </Route>
    <Route path="/home/about">
    <HomeAbout />
    </Route>
    <Route path="/home/features">
    <HomeFeatures />
    </Route>
    <Route path="/home/services">
    <HomeServices />
    </Route>
    
    <Route path="/home/contact">
    <HomeContact />
    </Route>


    <footer id="footer">
        <p className="copyright">Made with
            <i className="fa fa-heart"></i> By
            <a target="_blank" title="Themes" href="http://www..com"> Themes</a> &copy;
            <span id="currentYear"></span> All Rights Reserved.
        </p>
        <div className="social">
            <a traget="_blank" href="https://facebook.com/" title="facebook">
                <i className="fa fa-facebook"></i>
            </a>
            <a traget="_blank" href="https://twitter.com/" title="twitter">
                <i className="fa fa-twitter"></i>
            </a>
            <a traget="_blank" href="https://plus.google.com/+" title="Google+" target="_blank">
                <i className="fa fa-google-plus"></i>
            </a>
            <a traget="_blank" href="https://github.com/" title="github" target="_blank">
                <i className="fa fa-github"></i>
            </a>
            <a traget="_blank" href="https://www.behance.net/" title="Behance" target="_blank">
                <i className="fa fa-behance"></i>
            </a>
            <a traget="_blank" href="https://dribbble.com/" title="Dribbble" target="_blank">
                <i className="fa fa-dribbble"></i>
            </a>
            <a traget="_blank" href="https://www.pinterest.com//" title="Pinterest" target="_blank">
                <i className="fa fa-pinterest"></i>
            </a>
            <a traget="_blank" href="https://www.reddit.com/user/" title="Reddit" target="_blank">
                <i className="fa fa-reddit"></i>
            </a>
            <a traget="_blank" href="https://.com/blog/" title="RSS" target="_blank">
                <i className="fa fa-rss"></i>
            </a>
        </div>
    </footer>


    </div>
  );
};

export default HomeNavBar;
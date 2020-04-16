import {
    Link,
    Redirect,
    Route,
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import React, { Fragment } from "react";

import About from './admin/about';
import AdminNavBar from './admin/admin-navbar';
import Contact from './admin/contact';
import HomeAbout from './home/home-about';
import HomeContact from "./home/home-contact";
import HomeFeatures from './home/home-features';
import HomeIndex from "./home/home-index";
import HomeNavBar from './home/home-navbar';
import HomeServices from './home/home-services';
import Signin from './signin';
import Signup from './signup';

const MyRoutes = [
    {
      path: "/signin",
      component: Signin
    },
    {
      path: "/signup",
      component: Signup
    },
    {
      path: "/admin",
      component: AdminNavBar,
      routes: [
        {
          path: "/admin/about",
          component: About
        },
        {
          path: "/admin/contact",
          component: Contact
        }
      ]
    }
    ,
    {
      path: "/",
      component: HomeNavBar,
      routes: [
        {
            path: "/index",
            component: HomeIndex,
            isDefault: true,
          },
        {
          path: "/about",
          component: HomeAbout
        },
        {
            path: "/features",
            component: HomeFeatures
          },
          {
            path: "/services",
            component: HomeServices
          },
        {
          path: "/contact",
          component: HomeContact
        }
      ]
    }
  ];
  

  const DoSth = (route) => {
    return (
        <div> {route.path} </div>
    );
  };

  const RouteWithSubRoutes = (route) => {
    return (
            <Route
            path={route.path}
            render={props => (

                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}
          />
    );
  };
  

  export { MyRoutes, RouteWithSubRoutes, DoSth };


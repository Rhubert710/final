import React from "react";
import { Link, Outlet } from "react-router-dom";

import logo from '../logo.svg';
import "./NavBar.css"

const NavBar = () => {
  return (
    <div id="navBar">
      <nav>
      <div id='title'>
            <span>🌲 TaskTree</span>
        </div>
        <div id="links">
            <Link to="/">Home</Link>
            <Link to="/user-list">Tasks</Link>
            <Link to="/post-user">Sign up/ Login</Link>
            {/* <Link to="/post-user">Sign up/ Login</Link> */}
      </div>
      </nav>
      <br />
      <Outlet />
    </div>
  );
};

export default NavBar;

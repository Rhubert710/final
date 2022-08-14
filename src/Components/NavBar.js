import React from "react";
import { Link, Outlet } from "react-router-dom";

import logo from '../logo.svg';
import "./NavBar.css"

const NavBar = () => {
  return (
    <div id="navBar">
      <nav>
      <div id='title'>
            <img src={logo} className="App-logo" alt="logo" />
            <span>Heroku Deploy</span>
          </div>
        <div id="links">
          <div>
            <Link to="/">Home</Link>
          </div>
          <br />
          <div>
            <Link to="/post-user">Create New User</Link>
          </div>
          <div>
            <Link to="/user-list">User List</Link>
          </div>
          <br />
          <div>
            <Link to="/dogs">Dogs</Link>
          </div>
          <br />
        </div>
      </nav>
      <br />
      <Outlet />
    </div>
  );
};

export default NavBar;

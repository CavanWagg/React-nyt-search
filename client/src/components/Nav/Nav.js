import React from "react";
import "./Nav.css";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="/saved">
      Saved Articles
    </a>
    <a className="navbar-brand" href="/">
      Home
    </a>
  
  </nav>
);

export default Nav;
import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          UNESCO LOGO
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="sass.html">
              <i className="material-icons">search</i>
            </a>
          </li>
          <li>
            <Link to="/locations"> Locations </Link>
          </li>
          <li>
            <Link to="/favorites"> Favorites </Link>
          </li>
          <li>
            <Link to="/destinations"> Destinations</Link>
          </li>
          <li>
            <Link to="/visited"> Visited </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

import React from "react";
import "../App.css";

function NavBar() {
  return (
    <nav>
      <h3>UNESCO LOGO</h3>
      <ul>
        <li>
          <a href="/locations"> Locations </a>
        </li>
        <li>
          <a href="/favorites"> Favorites </a>
        </li>
        <li>
          <a href="/destinations"> Destinations </a>
        </li>
        <li>
          <a href="/visited"> Visited</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

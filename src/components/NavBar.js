import React from "react";
// import "../App.css";

function NavBar() {
  return (
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">
          UNESCO LOGO
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a href="sass.html">
              <i class="material-icons">search</i>
            </a>
          </li>
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
      </div>
    </nav>
  );
}

export default NavBar;

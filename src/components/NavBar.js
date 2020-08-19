import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";

function NavBar() {
  return (
    <nav>
      <h3>UNESCO LOGO</h3>
      <ul>
        <li>LocationsList</li>
        <li>FavoritesList</li>
        <li>DestinationsList</li>
        <li>VisitedList</li>
      </ul>
    </nav>
  );
}

export default NavBar;

import React, { Component } from "react";

import "./App.css";
class App extends Component {
  componentDidMount() {
    fetch("http://localhost:3000/locations", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  render() {
    return <div className="App">App</div>;
  }
}

export default App;

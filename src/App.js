import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchLocations, fetchUnescoData } from "./actions";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LocationsList from "./containers/LocationsList";

import "./App.css";
import FavoritesList from "./containers/FavoritesList";
import DestinationsList from "./containers/DestinationsList";
import VisitedList from "./containers/VisitedList";
import NavBar from "./components/NavBar";
import "materialize-css/dist/css/materialize.min.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchLocations();
    this.props.fetchUnescoData();
  }

  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <div className="App">
            <Route path="/locations" component={LocationsList}></Route>
            <Route path="/favorites" component={FavoritesList}></Route>
            <Route path="/destinations" component={DestinationsList}></Route>
            <Route path="/visited" component={VisitedList}></Route>
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(null, { fetchLocations, fetchUnescoData })(App);

import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchLocations } from "./actions/fetchLocations"; //am i going to use t his?
import LocationsContainer from "./containers/LocationsContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LocationsList from "./components/LocationsList";

import "./App.css";
import FavoritesList from "./components/FavoritesList";
import DestinationsList from "./components/DestinationsList";
import VisitedList from "./components/VisitedList";

class App extends Component {
  //great way to test that you're getting the data to make sure it's coming through properly
  componentDidMount() {
    this.props.fetchLocations({
      type: "FETCH_LOCATIONS",
      payload: { name: "Location" },
    });
  }

  render() {
    return (
      <div>
        <a href="/locations"> locations </a>
        <a href="/favorites"> favorites</a>

        <Router>
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
// const mapStateToProps = () => {
//   //mapStateToProps gives us access to SEE waht is already in our store //we have to pass it to connect becasue the connect is our way of connecting that redux store to this specific component

//   //our way of accessing value in our store as props.
//   return {
//     locations: state.locations,
//   };
// };

export default connect(null, { fetchLocations })(App);

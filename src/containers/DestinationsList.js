import React from "react";
import "../App.css";
import { connect } from "react-redux";

// import "./App.css";

const DestinationsList = (props) => {
  return (
    <ul>
      {props.locations.map((location, index) => (
        <li key={index}>{location.name}</li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    locations: state.locations.filter((location) => location.destination),
  };
};

export default connect(mapStateToProps)(DestinationsList);

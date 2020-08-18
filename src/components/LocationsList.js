import React from "react";
import { connect } from "react-redux";

//functional because it's just going to do a list of compnents
//need 5 funcitonal components

const LocationsList = (props) => {
  //from locations container props

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
    locations: state.locations,
  };
};

export default connect(mapStateToProps)(LocationsList);

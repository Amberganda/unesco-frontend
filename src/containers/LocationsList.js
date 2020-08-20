import React from "react";
import { connect } from "react-redux";
import Location from "../containers/Location";

//functional because it's just going to do a list of compnents
//need 5 funcitonal STATELESS components

const LocationsList = (props) => {
  //from locations container props

  return (
    <div>
      <div class="row">
        {props.locations.map((location, index) => (
          <div class="col s4">
            <Location index={index} location={location} />
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    locations: state.locations,
  };
};

export default connect(mapStateToProps)(LocationsList);

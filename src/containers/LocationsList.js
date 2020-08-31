import React from "react";
import { connect } from "react-redux";
import Location from "../containers/Location";

const LocationsList = (props) => {
  //from locations container props

  return (
    <div>
      <div className="row">
        {props.locations.map((location, index) => (
          <div className="col s4" key={index}>
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

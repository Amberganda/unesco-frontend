import React from "react";
import { connect } from "react-redux";
import Location from "../containers/Location";

//functional because it's just going to do a list of compnents
//need 5 funcitonal STATELESS components

const LocationsList = (props) => {
  //from locations container props

  const unesco_location = (id) => {
    return props.unesco_locations.find(
      (unesco_location) => unesco_location.unesco_id_number == id
    );
  };

  return (
    <div>
      <div class="row">
        {props.locations.map((location, index) => (
          <div class="col s4">
            <Location
              index={index}
              location={location}
              unesco_location={unesco_location(location.unesco_api_id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    locations: state.locations,
    unesco_locations: state.unesco_locations,
  };
};

export default connect(mapStateToProps)(LocationsList);

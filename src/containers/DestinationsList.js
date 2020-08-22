import React from "react";
import "../App.css";
import { connect } from "react-redux";
import Location from "../containers/Location";

const DestinationsList = (props) => {
  return (
    <div>
      <div class="row">
        {props.locations.map((location, index) => (
          <div class="col s4">
            <Location key={index} location={location} />
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    locations: state.locations.filter((location) => location.destination),
  };
};

export default connect(mapStateToProps)(DestinationsList);

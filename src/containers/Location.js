import React from "react";
import Name from "../components/Name";
import Actions from "./Actions";
import { connect } from "react-redux";

//if props.unesco_locaiton is defined in img
const Location = (props) => {
  const getUnescoImage = () => {
    if (props.unesco_location !== undefined) {
      return props.unesco_location.image_url;
    } else {
      return "https://www.clker.com/cliparts/p/D/p/X/b/W/gray-globe-hi.png";
    }
  };

  return (
    <div className="card small">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={getUnescoImage()} />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          <Name name={props.location.name} />
        </span>
        <Actions location={props.location} />
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">
          Card Title<i className="material-icons right">close</i>
        </span>
        <p>
          Here is some more information about this product that is only revealed
          once clicked on.
        </p>
      </div>
    </div>
  );
  {
    /* <li key={props.index}>{props.location.name}</li>; */
  }
};
//https://stackoverflow.com/questions/41198842/what-is-the-use-of-the-ownprops-arg-in-mapstatetoprops-and-mapdispatchtoprops
const mapStateToProps = (state, props) => {
  const unesco_location = state.unesco_locations.find(
    (element) => element.unesco_id_number == props.location.unesco_api_id
  );
  return {
    ...props,
    unesco_location: unesco_location,
  };
};

export default connect(mapStateToProps)(Location);

import React from "react";
import Name from "../components/Name";
import Actions from "./Actions";
import { connect } from "react-redux";
import Description from "../components/Description";

const Location = (props) => {
  const getUnescoImage = () => {
    if (props.unesco_location !== undefined) {
      return props.unesco_location.image_url;
    } else {
      return "https://www.clker.com/cliparts/p/D/p/X/b/W/gray-globe-hi.png";
    }
  };
  const getUnescoDescription = () => {
    if (props.unesco_location !== undefined) {
      return props.unesco_location.short_description;
    } else {
      return "";
    }
  };

  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={getUnescoImage()} alt="pic" />
      </div>
      <div className="card-content">
        <span className="card-title">
          <Name name={props.location.name} />
        </span>
        <Description short_description={getUnescoDescription()} />

        <Actions location={props.location} />
      </div>
    </div>
  );
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

import React from "react";
import Name from "../components/Name";
import Actions from "./Actions";

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
    <div class="card small">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src={getUnescoImage()} />
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">
          <Name name={props.location.name} />
        </span>
        <Actions location={props.location} />
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">
          Card Title<i class="material-icons right">close</i>
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

export default Location;

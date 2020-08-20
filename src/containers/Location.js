import React from "react";
import Name from "../components/Name";
import Actions from "./Actions";

const Location = (props) => {
  return (
    <div class="card small">
      <div class="card-image waves-effect waves-block waves-light">
        <img
          class="activator"
          src="https://materializecss.com/images/office.jpg"
        />
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">
          <Name name={props.location.name} />
        </span>
        <Actions />
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

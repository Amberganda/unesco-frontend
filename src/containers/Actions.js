import React from "react";

const Actions = (props) => {
  console.log(props);
  return (
    <div class="card-action">
      <button class="btn waves-effect waves-light" type="submit" name="action">
        <i class="material-icons right">
          {props.location.favorite ? "favorite" : "favorite_border"}
        </i>
      </button>
      <button class="btn waves-effect waves-light" type="submit" name="action">
        <i class="material-icons right">
          {props.location.destination ? "add_box" : "add"}
        </i>
      </button>
      <button class="btn waves-effect waves-light" type="submit" name="action">
        <i class="material-icons right">
          {props.location.visited ? "check_box" : "check"}
        </i>
      </button>
    </div>
  );
};

export default Actions;

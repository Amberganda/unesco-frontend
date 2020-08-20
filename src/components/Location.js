import React from "react";

const Location = (props) => {
  return <li key={props.index}>{props.location.name}</li>;
};

export default Location;

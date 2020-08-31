//this is our action creator function.
export function fetchLocations() {
  return (dispatch) => {
    //returning a fucnitona that takes a funciton.
    fetch("http://localhost:3000/locations")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "GET_LOCATIONS_SUCCESS", data: data })); //text into js object.
  };
}

export function fetchUnescoData() {
  return (dispatch) => {
    fetch("https://unesco-api.herokuapp.com/sites")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "GET_UNESCO_SUCCESS", data: data }));
  };
}
export function updateFavoriteState(id) {
  return (dispatch) => {
    //dealer, hit me up. call you back
    //returns a function a that takes a dispatch function. returns a function that takes a function.
    fetch(`http://localhost:3000/location/${id}/favorite`, {
      //no body, only headers & status code.
      method: "POST",
    }).then((data) => dispatch({ type: "POST_FAVORITE_SUCCESS", id: id }));
  };
}

export function updateDestinationState(id) {
  return (dispatch) => {
    fetch(`http://localhost:3000/location/${id}/destination`, {
      method: "POST",
    }).then((data) => dispatch({ type: "POST_DESTINATION_SUCCESS", id: id }));
  };
}

export function updateVisitedState(id) {
  return (dispatch) => {
    fetch(`http://localhost:3000/location/${id}/visited`, {
      method: "POST",
    }).then((data) => dispatch({ type: "POST_VISITED_SUCCESS", id: id }));
  };
}

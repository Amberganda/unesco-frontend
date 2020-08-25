//this is our action creator function.
//what we return from this function for what we dispatch is an action object (or just an action)
// so an action creator creates an action object, and then that action object will be dispatched to our reducer
//which will then return our new version of our state based on the action that we sent.
export function fetchLocations() {
  return (dispatch) => {
    fetch("http://localhost:3000/locations")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "GET_LOCATIONS_SUCCESS", data: data }));
    //THUNK LETS US CALL DISPATCH FROM INSIDE THIS ACTION CREATOR.
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
    fetch(`http://localhost:3000/location/${id}/favorite`, {
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

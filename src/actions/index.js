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

export function updateFavoriteState() {
  return (dispatch) => {
    fetch("http://localhost:3000/location/2/favorite", { method: "POST" }) //hard coded id
      .then((data) => dispatch({ type: "POST_FAVORITE_SUCCESS", data: data }));
  };
}

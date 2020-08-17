//this is our action creator function.
//what we return from this function for what we dispatch is an action object (or just an action)
// so an action creator creates an action object, and then that action object will be dispatched to our reducer
//which will then return our new version of our state based on the action that we sent.
export function fetchLocations(action) {
  //   fetch("http://localhost:3000/locations")
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  //THUNK LETS US CALL DISPATCH FROM INSIDE THIS ACTION CREATOR.
  //   dispatch();
  return action;
}

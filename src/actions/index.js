export function fetchLocations() {
  return (dispatch) => {
    fetch("http://localhost:3000/locations")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "GET_LOCATIONS_SUCCESS", data: data }));
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

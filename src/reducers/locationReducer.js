export default function locationReducer(state = { locations: [] }, action) {
  switch (action.type) {
    case "GET_LOCATIONS_SUCCESS": {
      return Object.assign({}, state, {
        locations: action.data.map((location) => {
          return location;
        }),
      });
      // console.log("ok");
    }
    case "POST_FAVORITE_SUCCESS": {
      return Object.assign({}, state, {
        locations: state.locations.map((location) => {
          if (location.id == action.id) {
            return { ...location, favorite: !location.favorite };
          } else {
            return location;
          }
        }),
      });
    }
    default:
      return state;
  }
}

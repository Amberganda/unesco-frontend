export default function locationReducer(
  state = { locations: [], favorite: [] },
  action
) {
  switch (action.type) {
    case "GET_LOCATIONS_SUCCESS": {
      return Object.assign({}, state, {
        locations: action.data.map((location) => {
          return location;
        }),
      });
      // console.log("ok");
    }
    case "GET_FAVORITE_ACTION": {
      return Object.assign({}, state, {
        favorite: action.data.map((favorite) => {
          return favorite;
        }),
      });
    }
    default:
      return state;
  }
}

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
    default:
      return state;
  }
}

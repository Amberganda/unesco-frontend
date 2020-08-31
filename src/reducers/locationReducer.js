export default function locationReducer(
  state = { locations: [], unesco_locations: [] }, //default initial state. location backend & unesco 3rd party
  action //action that just happened. return result of the state.
) {
  switch (action.type) {
    case "GET_LOCATIONS_SUCCESS": {
      return {
        ...state,
        locations: action.data.map((location) => {
          return location;
        }),
      };
      // return Object.assign({}, state, {
      //   locations: action.data.map((location) => {
      //     return location;
      //   }),
      // });
      // console.log("ok");
    }
    case "GET_UNESCO_SUCCESS": {
      return Object.assign({}, state, {
        unesco_locations: action.data.map((unesco_location) => {
          return unesco_location;
        }),
      });
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
    case "POST_DESTINATION_SUCCESS": {
      return Object.assign({}, state, {
        locations: state.locations.map((location) => {
          if (location.id == action.id) {
            return { ...location, destination: !location.destination };
          } else {
            return location;
          }
        }),
      });
    }
    case "POST_VISITED_SUCCESS": {
      return Object.assign({}, state, {
        locations: state.locations.map((location) => {
          if (location.id == action.id) {
            return { ...location, visited: !location.visited };
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

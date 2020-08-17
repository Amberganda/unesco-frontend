export default function locationReducer(state = { locations: [] }, action) {
  //this was just to see that our action was coming in correct. & the store could properly be updated by the reducer.
  return action.payload;
}

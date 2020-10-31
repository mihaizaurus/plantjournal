const initialState = {
  plants: [],
};

const plantReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PLANT":
      let newPlant = action.payload;
      newPlant["id"] = parseInt(state.plants[state.plants.length-1].id)+1;
      return Object.assign({}, state, {
        plants: [...state.plants, newPlant],
      });
    case "REMOVE_PLANT":
      return state;
    default:
      return state;
  }
};
export default plantReducer;

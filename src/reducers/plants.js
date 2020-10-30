const initialState = {
  plants: [],
};

const plantReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PLANT":
      return Object.assign({}, state, {
        plants: [...state.plants, action.payload],
      });
    case "REMOVE_PLANT":
      return state;
    default:
      return state;
  }
};
export default plantReducer;

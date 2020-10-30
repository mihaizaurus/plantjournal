export const addPlant = (plant) => {
  return {
    type: "ADD_PLANT",
    payload: plant,
  };
};

export const removePlant = (plant) => {
  return {
    type: "REMOVE_PLANT",
    payload: plant,
  };
};

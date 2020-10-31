import React, { Component, useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function PlantDisplay({ match }) {
  const plantCollection = useSelector((state) => state.plantCollection);

  useEffect(() => {
    fetchPlantInfo();
  }, []);

  const [plant, setPlant] = useState({});

  const fetchPlantInfo = () => {
    const plant = plantCollection.plants.find((myPlant) => {
      return myPlant.id === match.params.id;
    });
    setPlant(plant);
  };
  if (plant.type) {
    return (
      <div className="flex-shrink-0" style={{ paddingTop: "150px" }}>
        <h1>
          {plant.name} the {plant.type.plantType}
        </h1>
        <h1>{plant.description}</h1>
        <h1>{plant.name}</h1>
        <h1>{plant.name}</h1>
      </div>
    );
  } else {
    return <div />;
  }
}

export default PlantDisplay;

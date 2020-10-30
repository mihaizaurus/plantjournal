import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { TimePeriod } from "../types/timePeriod.ts";
import { PlantStatus } from "../types/plantStatus.ts";
import { LightLevel } from "../types/lightLevel.ts";
import { addPlant, removePlant } from "../actions/plant";

function Home() {
  const plants = useSelector((state) => state.plants);
  const dispatch = useDispatch();

  return (
    <main role="main" className="flex-shrink-0">
      <div className="container">
        <Button
          onClick={() => {
            dispatch(
              addPlant({
                id: "000001",
                name: "Kelly",
                description: "Enter a description here for your plant friend",
                type: {
                  plantType: "Kalanchoe",
                  waterNeeds: {
                    qty: 2,
                    period: TimePeriod.Week,
                  },
                },
                dob: "10/09/2020",
                status: {
                  level: PlantStatus.Level3,
                  icon: "icon_placeholder",
                  lastWatered: "18/09/2020",
                  lastFertilized: "",
                },
                location: {
                  room: "",
                  lightLevel: LightLevel.Level3,
                },
              })
            );
          }}
        >
          Add a New Plant
        </Button>
      </div>
    </main>
  );
}

export default Home;

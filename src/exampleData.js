import { TimePeriod } from "./types/timePeriod.ts";
import { PlantStatus } from "./types/plantStatus.ts";
import { LightLevel } from "./types/lightLevel.ts";

const sampleData = {
  id: "12345",
  belongsTo: {},
  collection: [
    {
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
        level: PlantStatus.L2,
        icon: "icon_placeholder",
        lastWatered: "18/09/2020",
        lastFertilized: "",
      },
      location: {
        room: "",
        lightLevel: LightLevel.Level3,
      },
    },
    {
      id: "000002",
      name: "Benny",
      description: "Enter a description here for your plant friend",
      type: {
        plantType: "Ficcus Benjamina",
        waterNeeds: {
          qty: 1,
          period: TimePeriod.Day,
        },
      },
      dob: "10/08/2020",
      status: {
        level: PlantStatus.L2,
        icon: "icon_placeholder",
        lastWatered: "18/09/2020",
        lastFertilized: "",
      },
      location: {
        room: "",
        lightLevel: LightLevel.Level2,
      },
    },
    {
      id: "000003",
      name: "Karen",
      description: "Enter a description here for your plant friend",
      type: {
        plantType: "Kalanchoe",
        waterNeeds: {
          qty: 2,
          period: TimePeriod.Week,
        },
      },
      dob: "10/08/2020",
      status: {
        level: PlantStatus.L1,
        icon: "icon_placeholder",
        lastWatered: "18/09/2020",
        lastFertilized: "",
      },
      location: {
        room: "",
        lightLevel: LightLevel.Level3,
      },
    },
  ],
};

export default sampleData;

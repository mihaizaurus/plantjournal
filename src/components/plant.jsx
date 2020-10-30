import React, { Component } from "react";
// import ReactTooltip from "react-tooltip";
import { TimePeriodDisplay } from "../types/timePeriod.ts";
import { PlantStatusDisplay } from "../types/plantStatus.ts";
import { LightLevelDisplay } from "../types/lightLevel.ts";

class Plant extends Component {
  state = {};
  render() {
    return (
      <div className="container row">
        <div className="col-md-3">
          <img
            src={require("../assets/" + this.props.plant.id + ".jpg")}
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-6 mt-1 mb-1">
          <div className="mt-1 mb-1">
            <div className="row">
              <span>Name: {this.props.plant.name}</span>
            </div>
            <div className="row">
              <span>Type: {this.props.plant.type.plantType}</span>
            </div>
            <div className="row">
              <span>
                Needs water every{" "}
                {TimePeriodDisplay.toLabel(
                  this.props.plant.type.waterNeeds.qty,
                  this.props.plant.type.waterNeeds.period
                )}
              </span>
            </div>
            <div className="row">
              <span>Date of Birth: {this.props.plant.dob}</span>
            </div>
          </div>
          <div className="row">
            <span>Last watered on: {this.props.plant.status.lastWatered}</span>
          </div>
          <div className="row">
            <span>
              Last fertilized on: {this.props.plant.status.lastFertilized}
            </span>
          </div>
          <div className="row">
            <span>
              Status:{" "}
              {PlantStatusDisplay.toDisplay(this.props.plant.status.level)}
            </span>
          </div>
          <div className="row">
            <span>
              Light:{" "}
              {LightLevelDisplay.toDisplay(
                this.props.plant.location.lightLevel
              )}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Plant;

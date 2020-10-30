import React, { Component } from "react";
// import PlantCollection from "./plantCollection";
import sampleData from "../exampleData";
import { Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

class PlantJournal extends Component {
  state = {};
  render() {
    return (
      <main role="main" className="flex-shrink-0">
        <div className="container">
          <h1>
            This journal showcases {sampleData.collection.length} plants on
            display:
          </h1>
          {sampleData.collection.map((c) => {
            return (
              <div
                key={c.name + "_the_" + c.type.plantType}
                className="container"
              >
                <Card>
                  <Card.Img
                    src={require("../assets/" + c.id + ".jpg")}
                    style={{ objectFit: "scale-down", width: "20%" }}
                  />
                  <Card.Body>
                    <Card.Title>{c.name}</Card.Title>
                    <Card.Subtitle>{c.type.plantType}</Card.Subtitle>
                    <Card.Text>{c.description}</Card.Text>
                    <Link to={`/plantCollection/${c.id}`}>
                      <Button variant="dark">Go to {c.name}'s Page</Button>
                    </Link>
                  </Card.Body>
                </Card>
                {/* <Plant plant={c} /> */}
              </div>
            );
          })}
        </div>
      </main>
    );
  }
}

export default PlantJournal;

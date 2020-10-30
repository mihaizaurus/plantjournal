import React, { useState } from "react";
// import Plant from "./plant";
import {
  Button,
  Col,
  Figure,
  Form,
  FormControl,
  InputGroup,
  ListGroup,
  Modal,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import AddPlant from "./addPlant";
import AddPlantContainer from "./addPlant.container";

function PlantCollection() {
  const plantCollection = useSelector((state) => state.plantCollection);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);

  return (
    <div className="container">
      <Button onClick={handleShow} variant="dark">
        +
      </Button>
      <AddPlantContainer onHide={handleHide} show={show} />
      <h1>
        This collection has {plantCollection.plants.length} plants on display:
      </h1>
      <div className="row">
        <div className="col-4">
          <ListGroup variant="flush">
            {plantCollection.plants != undefined &&
              plantCollection.plants.map((c) => {
                return (
                  <div
                    key={c.name + "_the_" + c.type.plantType}
                    className="container"
                  >
                    <ListGroup.Item action href={`/plantCollection/${c.id}`}>
                      <Figure>
                        {/* <Figure.Image
                          width={171}
                          height={180}
                          alt="171x180"
                          src={require("../assets/" + c.id + ".jpg")}
                        /> */}
                        <Figure.Caption style={{ textAlign: "center" }}>
                          {c.name}
                        </Figure.Caption>
                      </Figure>
                    </ListGroup.Item>
                  </div>
                );
              })}
          </ListGroup>
        </div>
        <div className="col-8">Other Stuff goes here</div>
      </div>
    </div>
  );
}

export default PlantCollection;

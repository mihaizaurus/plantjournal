import React, { Component, useState, setState } from "react";
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
import DatePicker from "react-datepicker";
import { addPlant, removePlant } from "../actions/plant";
import { TimePeriod } from "../types/timePeriod.ts";
import { PlantStatus } from "../types/plantStatus.ts";
import { LightLevel } from "../types/lightLevel.ts";

class AddPlant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plant: {
        id: "",
        name: "",
        description: "",
        type: {
          plantType: "",
          waterNeeds: {
            qty: 1,
            period: TimePeriod.Week,
          },
        },
        dob: "",
        status: {
          level: PlantStatus.L2,
          icon: "icon_placeholder",
          lastWatered: "",
          lastFertilized: "",
        },
        location: {
          room: "",
          lightLevel: LightLevel.Level3,
        },
      },
    };
  }

  handleClose = (event) => {
    this.props.onHide();
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addPlant(this.state.plant);
    this.props.onHide();
  };

  handleEventChange = (event) => {
    const targetID = event.currentTarget.id;
    const targetValue = event.currentTarget.value;
    switch (targetID) {
      case "plantNameInput":
        this.setState({ plant: { ...this.state.plant, name: targetValue } });
        break;
      case "plantTypeInput":
        this.setState({
          plant: {
            ...this.state.plant,
            type: { ...this.state.plant.type, plantType: targetValue },
          },
        });
        break;
      case "typeWaterValue":
        this.setState({
          plant: {
            ...this.state.plant,
            type: {
              ...this.state.plant.type,
              waterNeeds: {
                ...this.state.plant.type.waterNeeds,
                qty: targetValue,
              },
            },
          },
        });
        break;
      case "typeWaterSelect":
        const idx = event.currentTarget.value;
        const timeVal = event.currentTarget.options[idx].text;
        console.log(timeVal);
        const time = TimePeriod[timeVal];
        this.setState({
          plant: {
            ...this.state.plant,
            type: {
              ...this.state.plant.type,
              waterNeeds: {
                ...this.state.plant.type.waterNeeds,
                period: time,
              },
            },
          },
        });
        break;
      case "":
        break;
      case "":
        break;
    }
  };

  render() {
    return (
      <div className="container">
        <Modal show={this.props.show} onHide={this.handleClose}>
          <Form onSubmit={this.handleSubmit} validated={null}>
            <Modal.Header closeButton>
              <Modal.Title>Add a new plant to your collection</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group>
                <FormControl
                  placeholder="Please Enter a name for your plant"
                  id="plantNameInput"
                  onChange={this.handleEventChange}
                />
                <Form.Control.Feedback type="valid">
                  Looks good!
                </Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Looks Bad!
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <FormControl
                  placeholder="What type of plant is it?"
                  id="plantTypeInput"
                  onChange={this.handleEventChange}
                />
                <Form.Row className="mt-2">
                  <Col>
                    <Form.Label>Needs Watering Every</Form.Label>
                  </Col>
                  <Col>
                    <FormControl
                      placeholder="how many?"
                      id="typeWaterValue"
                      onChange={this.handleEventChange}
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      as="select"
                      className="mr-sm-2"
                      id="typeWaterSelect"
                      custom
                      onChange={this.handleEventChange}
                    >
                      <option value="0">{TimePeriod.Day}</option>
                      <option value="1">{TimePeriod.Week}</option>
                      <option value="2">{TimePeriod.Month}</option>
                    </Form.Control>
                  </Col>
                </Form.Row>
              </Form.Group>
              <Form.Group>
                <FormControl
                  placeholder="Enter a description here for your plant friend"
                  id="plantDescriptionInput"
                />
              </Form.Group>
              <Form.Group>
                <Form.Row>
                  <Col className="col-4">
                    <Form.Label>How is it doing?</Form.Label>
                  </Col>
                  <Col>
                    <Form.Control
                      as="select"
                      className="mr-sm-2"
                      id="statusSelect"
                      custom
                    >
                      <option value="0">{PlantStatus.L4}</option>
                      <option value="1">{PlantStatus.L3}</option>
                      <option value="2">{PlantStatus.L2}</option>
                      <option value="3">{PlantStatus.L1}</option>
                      <option value="4">{PlantStatus.L0}</option>
                    </Form.Control>
                  </Col>
                </Form.Row>
              </Form.Group>
              <Form.Group>
                <Form.Row>
                  <Col>
                    <Form.Label>When was it last watered?</Form.Label>
                  </Col>
                  <Col>
                    <DatePicker></DatePicker>
                  </Col>
                </Form.Row>
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="dark" type="submit">
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default AddPlant;

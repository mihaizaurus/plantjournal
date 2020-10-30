import { connect } from "react-redux";
import { addPlant, removePlant } from "../actions/plant";
import AddPlant from "./addPlant";

const mapDispatchToProps = {
  addPlant,
};

export default connect(null, mapDispatchToProps)(AddPlant);

import React, { Component } from "react";
import PlantJournal from "./components/plantJournal";
import About from "./components/about";
import Home from "./components/home";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import PlantCollection from "./components/plantCollection";
import PlantDisplay from "./components/plantDisplay";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/plantJournal" component={PlantJournal} />
            <Route path="/plantCollection" exact component={PlantCollection} />
            <Route path="/plantCollection/:id" component={PlantDisplay} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { withRouter } from "react-router-dom";

class NavBar extends Component {
  state = {
    selectKey: "1",
  };

  render() {
    return (
      <nav className="topNav" id="topNav">
        <a className="navbar-item" href="/"><Icon.Journals /> Plant Journal</a>
        <a className="navbar-item" href="/about">About</a>
        <div className="dropdown">
          <button className="dropdown-button"> Plant Collection <Icon.CaretDown/></button>
          <div className="dropdown-content">
            <a className="navbar-item" href="/plantCollection">Plant Collection</a>
            <a className="navbar-item" href="/plantJournal">Plant Journal</a>
          </div>
        </div>
        
      </nav>
      // <Navbar bg="dark" expand="lg" variant="dark">
      //   <Navbar.Brand href="/">
      //     <Icon.Journals /> Plant Journal
      //   </Navbar.Brand>
      //   <Nav activeKey={this.props.location.pathname}>
      //     <Nav.Item>
      //       <Nav.Link href="/about" eventKey="/about">
      //         About
      //       </Nav.Link>
      //     </Nav.Item>
      //     <NavDropdown title="Plant Journal" id="nav-dropdown">
      //       <NavDropdown.Item href="/plantJournal" eventKey="/plantJournal">
      //         Journal Entries
      //       </NavDropdown.Item>
      //       <NavDropdown.Divider /> {/*Optional */}
      //       <NavDropdown.Item
      //         href="/plantCollection"
      //         eventKey="/plantCollection"
      //       >
      //         Plant Collection
      //       </NavDropdown.Item>
      //     </NavDropdown>
      //   </Nav>
      // </Navbar>
    );
  }
}

export default withRouter(NavBar);

//page for dislike.js

//needs home button and add button

//needs search bar
import React, { Component } from "react";
import ColNavbar from "../Collection/ColNavbar"
import { Panel } from "react-bootstrap"
import {FormControl, FormGroup, Button} from "react-bootstrap"

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>

        <Panel bsStyle="info">
          <Panel.Heading>
            <Panel.Title componentClass="h3">Movies I Didn't Like</Panel.Title>
          </Panel.Heading>
          <Panel.Body><ColNavbar /></Panel.Body>
        </Panel>
        <p>Dislike</p>
        <FormGroup>
    <FormControl type="text" placeholder="Search Movie" />
    <br></br>
    <Button type= "submit">Add Movie</Button>
  </FormGroup>
      </React.Fragment>
    );
  }
}
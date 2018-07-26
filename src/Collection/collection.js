//collection page includes collection navbar includes links to DVD-VHS-BLURAY

import React, { Component } from "react"
import TypeNavbar from "./TypeNavbar"
import { Panel } from "react-bootstrap"
import {FormControl, FormGroup, Button} from "react-bootstrap"


export default class Collection extends Component {
  render() {
    return (
      <React.Fragment>
       
 <Panel bsStyle="info">
    <Panel.Heading>
      <Panel.Title componentClass="h3">My Collection</Panel.Title>
    </Panel.Heading>
    <Panel.Body><TypeNavbar/>
  
        <p>Collection Page</p>
        <FormGroup>
    <FormControl type="text" placeholder="Search Movie" />
    <br></br>
    <Button type= "submit">Add Movie</Button>
  </FormGroup>
  </Panel.Body>
  </Panel>
      </React.Fragment>
    );
  }
}
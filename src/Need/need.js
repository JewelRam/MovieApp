//movies i need to buy page
//needs home button, add button also move to collection button

//needs search bar
import ColNavbar from "../Collection/ColNavbar"
import React, { Component } from "react"
import {Panel} from "react-bootstrap"
import {FormControl, FormGroup, Button} from "react-bootstrap"

export default class Need extends Component {
    render() {
      return (
          <React.Fragment>
              {/* <PageHeader>
            Movies I Need To Buy <small>Wooo tiny header</small>
              <ColNavbar/>
              </PageHeader> */}
              <Panel bsStyle="info">
          <Panel.Heading>
            <Panel.Title componentClass="h3">Movies I Need To Buy</Panel.Title>
          </Panel.Heading>
          <Panel.Body><ColNavbar /></Panel.Body>
        </Panel>
        <p>Need</p>
        <FormGroup>
    <FormControl type="text" placeholder="Search Movie" />
    <br></br>
    <Button type= "submit">Add Movie</Button>
  </FormGroup>
        </React.Fragment>
      );
    }
  }
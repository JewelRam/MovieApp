//page for dislike.js

//needs home button and add button

//needs search bar
import React, { Component } from "react";
import ColNavbar from "../Collection/ColNavbar"
import { Panel } from "react-bootstrap"
import SearchComponent from "../Random/SearchComponent"

export default class Home extends Component {
  render() {
    return (
      <div id="dislike">

        <Panel bsStyle="info">
          <Panel.Heading>
            <Panel.Title componentClass="h3">Movies I Didn't Like</Panel.Title>
          </Panel.Heading>
          <Panel.Body><ColNavbar /></Panel.Body>
        <SearchComponent/>
    
  </Panel>
      </div>
    );
  }
}
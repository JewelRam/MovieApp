//collection page includes collection navbar includes links to DVD-VHS-BLURAY

import React, { Component } from "react"
import TypeNavbar from "./TypeNavbar"
import { Panel } from "react-bootstrap"
import SearchComponent from "../Random/SearchComponent"
// import MovieCard from "../Random/card"


export default class Collection extends Component {


  render() {
    return (
      <div id="collection">
       
 <Panel bsStyle="info">
    <Panel.Heading>
      <Panel.Title componentClass="h3">My Collection</Panel.Title>
    </Panel.Heading>
    <Panel.Body><TypeNavbar/>
  <SearchComponent/>
 
  </Panel.Body>
  </Panel>
      </div>
    );
  }
}
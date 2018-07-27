//movies i need to buy page
//needs home button, add button also move to collection button

//needs search bar
import ColNavbar from "../Collection/ColNavbar"
import React, { Component } from "react"
import { Panel } from "react-bootstrap"
import SearchComponent from "../Random/SearchComponent"

export default class Need extends Component {
    render() {
        return (
            <div id="need">
                {/* <PageHeader>
            Movies I Need To Buy <small>Wooo tiny header</small>
              <ColNavbar/>
              </PageHeader> */}
                <Panel bsStyle="info">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">Movies I Need To Buy</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body><ColNavbar /></Panel.Body>

                    <SearchComponent />
                </Panel>
            </div>
        );
    }
}
//home page needs links to collection-need-meh

import NavigationBar from "./NavigationBar"
import React, { Component } from "react"

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <NavigationBar />
                <p>HomePage</p>
            </React.Fragment>
        )
    }
}
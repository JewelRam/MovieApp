//home page needs links to collection-need-meh

import NavigationBar from "./NavigationBar"
import React, { Component } from "react"
import Popular from "../Random/Popular"

export default class Home extends Component {
    render() {
        return (
            
                <div id="home">
                <NavigationBar />
                <Popular/>
                </div>
            
        )
    }
}
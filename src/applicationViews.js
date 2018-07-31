//where all routing happens
import {Route} from "react-router-dom"
import Login from "./Random/login"
import React, { Component } from "react"
import Home from "./Home/Home"
import Collection from "./Collection/Collection"
import Need from "./Need/need"
import Dislike from "./Random/dislike"


export default class ApplicationViews extends Component {
    isAuthenticated = () => localStorage.getItem("credentials") !== null

    render() {
        return (

            <React.Fragment>
                <Route exact path="/" render={props => {
                    if (this.isAuthenticated()) {
                        return <Home />
                        
                    } else {
                        return <Login{...props}/>
                    }
                }} />
                <Route path="/Home" component={Home} />
                <Route path="/Collection" component={Collection}  />
                <Route path="/need" component={Need} />
                <Route path="/dislike" component={Dislike} />
            </React.Fragment>
        )
    }
}
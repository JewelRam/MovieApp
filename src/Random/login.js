//login page

//needs submit button

import React, { Component } from "react";
export default class Login extends Component {
    state = {
        userName: " ",
        password: " "
    }

    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)

    }

    // Simplistic handler for login submit
    handleLogin = (e) => {
        e.preventDefault()

        /*
            For now, just store the email and password that
            the customer enters into local storage.
        */
        localStorage.setItem(
            "credentials",
            JSON.stringify({
                email: this.state.userName,
                password: this.state.password
            })
        )
    }

    render() {
        return (
            <div id="login">
            <form onSubmit={this.handleLogin}>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                
                <label htmlFor="inputPassword">
                    User Name:
                </label>
                <input onChange={this.handleFieldChange} type="text"
                    id="userName"
                    placeholder="User Name"
                    required="" />
                <label htmlFor="inputUserName">
                    Password:
                </label>
                <input onChange={this.handleFieldChange} type="password"
                    id="password"
                    placeholder="Enter Password"
                    required="" />
                <button type="submit"onClick={() => window.location.reload()
                }>
                Sign In
                </button>
                
            </form>
            </div>
            

        )
    }
}
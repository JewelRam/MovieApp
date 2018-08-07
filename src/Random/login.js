//login page

//needs submit button

import React, { Component } from "react";
import {Container, Col, Form, FormGroup, Label, Input, Button,} from "reactstrap"

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

        localStorage.setItem(
            "credentials",
            JSON.stringify({
                userName: this.state.userName,
                password: this.state.password
            })
        )
    }

    render() {
        return (
            <div id="login-div">
            <Container id="login">
        <h2 id="login-title">Sign In</h2>
        <Form onSubmit={this.handleLogin} className="form">
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="text"
                name="userName"
                id="userName"
                onChange={this.handleFieldChange}
                placeholder="Enter User Name"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                onChange={this.handleFieldChange}
                placeholder="********"
              />
            </FormGroup>
          </Col>
          <Button id="submitBtn" onClick={() => window.location.reload() } type="submit" >Login</Button>
        </Form>
      </Container>
            </div>

        )
    }
}
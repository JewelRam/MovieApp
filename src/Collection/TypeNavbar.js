//navbar for collection page
import React from "react"
import { Navbar, NavItem,  Nav, Button } from 'react-bootstrap'

export default props => {
  return (
<Navbar>
  
  <Navbar.Header>
    <Navbar.Brand>
     <Button> <a href="Home">Home</a></Button>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="#">
      VHS
    </NavItem>
    <NavItem eventKey={2} href="#">
      DVD
    </NavItem>
    <NavItem eventKey={3} href="#">
      BluRay
    </NavItem>
  </Nav>
</Navbar>
  )
}
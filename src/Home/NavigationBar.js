//navbar for homepage, needs links to collection-need-meh
import React from "react"
import { Navbar, NavItem,  Nav } from 'react-bootstrap'

export default props => {
  return (
<Navbar>
  
  <Navbar.Header>
    <Navbar.Brand>
      <a href="Home">Movie App</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="collection">
      Collection
    </NavItem>
    <NavItem eventKey={2} href="need">
      Need To Buy
    </NavItem>
    <NavItem eventKey={3} href="dislike">
      Eh, I'm Good
    </NavItem>
  </Nav>
</Navbar>
  )
}
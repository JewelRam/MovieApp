//navbar for homepage, needs links to collection-need-meh
import React from "react"
import { Navbar, NavItem,  Nav, Button } from 'react-bootstrap'

export default props => {
  return (
<Navbar id="navbar">
  
  <Navbar.Header>
    <Navbar.Brand>
      {/* <a href="Home">Movie App</a> */}
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    
     <Button id="navBtn"  href="collection" bsSize="large">
      Go To My Colleciton
    </Button>
    
    <Button id="navBtn"  href="need" bsSize="large">
      Go To My Need To Buy Page
    </Button>
    <Button id="navBtn"  href="dislike" bsSize="large">
      Movies That Sucked Ass
    </Button>
    
  </Nav>
</Navbar>
  )
}
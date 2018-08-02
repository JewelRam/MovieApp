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
  
    <NavItem eventKey={1} onClick={() => props.getMoviesByType("VHS")}>
      VHS
    </NavItem>
    <NavItem eventKey={2} onClick={() => props.getMoviesByType("DVD")}>
      DVD
    </NavItem>
    <NavItem eventKey={3} onClick={() => props.getMoviesByType("BLURAY")}>
      BluRay
    </NavItem>
    <NavItem>-- Or --</NavItem>
    <NavItem eventKey={4} onClick={() => props.getMoviesByGenre("Drama")}>
      Drama
    </NavItem>
    <NavItem eventKey={5} onClick={() => props.getMoviesByGenre("Horror")}>
      Horror
    </NavItem>
    <NavItem eventKey={6} onClick={() => props.getMoviesByGenre("Family")}>
      Family
    </NavItem>
    <NavItem eventKey={7} onClick={() => props.getMoviesByGenre("SciFi")}>
      SciFi
    </NavItem>
    <NavItem eventKey={7} onClick={() => props.getMoviesByGenre("Comedy")}>
      Comedy
    </NavItem>
  </Nav>
</Navbar>
  )
}
//navbar for collection page
import React from "react"
import { Navbar, NavItem,  Nav, Button } from 'react-bootstrap'


export default props => {
  return (
<Navbar >
  
  <Navbar.Header>
    <Navbar.Brand>
     <Button> <a href="Home">Home</a></Button>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
  
    <NavItem id="nav-item" eventKey={1} onClick={() => props.getMoviesByType("VHS")}>
      VHS
    </NavItem>
    <NavItem id="nav-item" eventKey={2} onClick={() => props.getMoviesByType("DVD")}>
      DVD
    </NavItem>
    <NavItem id="nav-item" eventKey={3} onClick={() => props.getMoviesByType("BLURAY")}>
      BluRay
    </NavItem>
    <NavItem>-- Or --</NavItem>
    <NavItem id="nav-item" eventKey={4} onClick={() => props.getMoviesByGenre("Drama")}>
      Drama
    </NavItem>
    <NavItem id="nav-item" eventKey={5} onClick={() => props.getMoviesByGenre("Horror")}>
      Horror
    </NavItem>
    <NavItem id="nav-item" eventKey={6} onClick={() => props.getMoviesByGenre("Family")}>
      Family
    </NavItem>
    <NavItem id="nav-item" eventKey={7} onClick={() => props.getMoviesByGenre("SciFi")}>
      SciFi
    </NavItem>
    <NavItem id="nav-item" eventKey={7} onClick={() => props.getMoviesByGenre("Comedy")}>
      Comedy
    </NavItem>
  </Nav>
</Navbar>
  )
}
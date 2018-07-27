import React, { Component } from "react"
import {FormControl, FormGroup, Button} from "react-bootstrap"
import SearchForm from "../Random/SearchForm"

export default class SearchComponent extends Component {

  constructor() {
      super();
      this.state = {
          movies: []
      };
    }
    performSearch = (query) => {
        fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=7cd3eb7f73f94864b2e6a0bfd441b3dd&page=1&language="en"
        `)
        .then(response => response.json())
        .then(responseData => {
            this.setState({movies: responseData.results})
        })
    }

componentDidMount() {
    fetch("http://localhost:3000/collection")
    .then(response => response.json())
    .then(responseData => {
        this.setState({movies: responseData.results})
    })
}
render() {
    return (
        <FormGroup>
        <FormControl onSearch= {this.performSearch} id="searchBar" type="text" placeholder="Search Movie" />
        <br></br>
        <Button type= "submit">Add Movie</Button>
        <SearchForm onSearch={this.performSearch}/>
      </FormGroup>
    )
}


}
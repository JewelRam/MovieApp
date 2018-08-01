//collection page includes collection navbar includes links to DVD-VHS-BLURAY

import React, { Component } from "react"
import TypeNavbar from "./TypeNavbar"
import { Panel } from "react-bootstrap"
import SearchComponent from "../Random/SearchComponent"
import MovieCard from "../Random/card"
import Database from "../Random/APIManager"
import { FormGroup, Label, Input } from 'reactstrap';


export default class Collection extends Component {

  constructor() {
    super();
    this.state = {
      movies: []

    };
  }
  
 addNewMovie = (searchResult) => {
   
   let newMovie= {
  
    "title": searchResult.title,
    "image": searchResult.poster_path,
    "type": this.state.selectedOption,
    "genreId": 1,
    "userId": 1,
    "owned": "true",
    "liked": "true",
    "review": "review"

  }
  Database.addMovie(newMovie)
  .then(response => {
return Database.getAllOwnedMovies()
  })
  .then(responseData => {
    this.setState({ movies: responseData })
})
 }
 performSearch = (query) => {
  Database.performSearch(query)
       .then(movie => {
        console.log(movie)
        this.addNewMovie(movie)
          //  this.setState({ movies: allMovies }
       } 
       )
      
}
getMoviesByType = (type) => {
  Database.getMoviesByType(type)
  .then(movieType => {
    this.setState({movies: movieType})
  } )
}

  componentDidMount() {
    Database.getAllOwnedMovies()
        .then(responseData => {
          // console.log(responseData)
            this.setState({ movies: responseData })
        })
}
handleOptionChange = (changeEvent) => {
  // console.log("hey", changeEvent.target.value)
  this.setState({
    selectedOption: changeEvent.target.value
  });
}
  deleteMovie = movieId => {
    // Delete the specified movie from the API
    Database.deleteMovie( movieId)

      .then(() => {
        return Database.getAllOwnedMovies("movies")
      })      
      .then(card => {
        this.setState({
          movies: card
        });
      });
  };

  render() {
    return (
      <div id="collection">

        <Panel bsStyle="info">
          <Panel.Heading>
            <Panel.Title componentClass="h3">My Collection</Panel.Title>
          </Panel.Heading>
          <Panel.Body><TypeNavbar getMoviesByType={this.getMoviesByType}/>
          <FormGroup tag="fieldset">
          <legend id="checkbox-heading">What Kind?</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" value="DVD" 
              checked={this.state.selectedOption === 'DVD'} 
              onChange={this.handleOptionChange} />{' '}
              DVD
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio2" value="BLURAY" 
              checked={this.state.selectedOption === 'BLURAY'} 
              onChange={this.handleOptionChange}/>{' '}
              BLURAY
            </Label>
          </FormGroup>
          <FormGroup check >
            <Label check>
              <Input type="radio" name="radio3" value="VHS" 
              checked={this.state.selectedOption === 'VHS'} 
              onChange={this.handleOptionChange} />{' '}
              VHS
            </Label>
          </FormGroup>
        </FormGroup>
            <SearchComponent 
            performSearch={this.performSearch} />
    
            <ul class="movieContainer">
              {this.state.movies.map(movie => (

                <MovieCard
                  key={movie.id}
                  movie={movie}

                  deleteMovie={this.deleteMovie}
                />


              ))
              }
            </ul>
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}

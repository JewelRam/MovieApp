//collection page includes collection navbar includes links to DVD-VHS-BLURAY

import React, { Component } from "react"
import TypeNavbar from "./TypeNavbar"
import { Panel } from "react-bootstrap"
// import SearchPage from "../Need/SearchPage"
import SearchComponent from "../Random/SearchComponent"
import MovieCard from "../Random/card"
import Database from "../Random/APIManager"
import { FormGroup, Label, Input } from 'reactstrap';

import SearchPage from "../Need/SearchPage"


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
    "genre": this.state.selectedGenre,
    "userId": 1,
    "owned": "true",
    "liked": "true",
    "isReviewed": "false"

  }
  Database.addMovie(newMovie)
  .then(response => {
return Database.getAllOwnedMovies()
  })
  .then(responseData => {
    this.setState({ movies: responseData })
})
 }
//  performSearch = (query) => {
//    console.log(query)
//   Database.performSearch(query)
//        .then(movie => {
//         console.log(movie)
//         this.addNewMovie(movie)
//           //  this.setState({ movies: movie })
//        } 
//        )
      
// }
getMoviesByType = (type) => {
  Database.getMoviesByType(type)
  .then(movieType => {
    this.setState({movies: movieType})
  } )
}
getMoviesByGenre = (genre) => {
  Database.getMoviesByGenre(genre)
  .then(movieGenre => {
    this.setState({movies: movieGenre})
  } )
}

  componentDidMount() {
    Database.getAllOwnedMovies()
        .then(responseData => {
          // console.log(responseData)
            this.setState({ movies: responseData })
        })
}
componentFromCollection = () => {
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
handleGenreChange = (changeEvent) => {
  // console.log("hey", changeEvent.target.value)
  this.setState({
    selectedGenre: changeEvent.target.value
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

        <Panel className="collection-div" bsStyle="info">
          <Panel.Heading>
            <Panel.Title componentClass="h3">My Collection</Panel.Title>
          </Panel.Heading>
          <Panel.Body><TypeNavbar getMoviesByGenre={this.getMoviesByGenre} 
          getMoviesByType={this.getMoviesByType}/>
          <div className="radio-container">
          <div className="type-radios">
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
              <Input type="radio" name="radio1" value="BLURAY" 
              checked={this.state.selectedOption === 'BLURAY'} 
              onChange={this.handleOptionChange}/>{' '}
              BLURAY
            </Label>
          </FormGroup>
          <FormGroup check >
            <Label check>
              <Input type="radio" name="radio1" value="VHS" 
              checked={this.state.selectedOption === 'VHS'} 
              onChange={this.handleOptionChange} />{' '}
              VHS
            </Label>
          </FormGroup>
        </FormGroup>
        </div>
        <div className="genre-radios">
        <FormGroup tag="fieldset">
          <legend id="checkbox-heading">What Genre?</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio4" value="Horror" 
              checked={this.state.selectedGenre === 'Horror'} 
              onChange={this.handleGenreChange} />{' '}
              Horror
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio4" value="SciFi" 
  
              checked={this.state.selectedGenre === 'SciFi'} 
              onChange={this.handleGenreChange}/>{' '}
              SciFi
            </Label>
          </FormGroup>
          <FormGroup check >
            <Label check>
              <Input type="radio" name="radio4" value="Drama" 
              checked={this.state.selectedGenre === 'Drama'} 
              onChange={this.handleGenreChange} />{' '}
              Drama
            </Label>
          </FormGroup>
          <FormGroup check >
            <Label check>
              <Input type="radio" name="radio4" value="Comedy" 
              checked={this.state.selectedGenre === 'Comedy'} 
              onChange={this.handleGenreChange} />{' '}
              Comedy
            </Label>
          </FormGroup>
          <FormGroup check >
            <Label check>
              <Input type="radio" name="radio4" value="Family" 
              checked={this.state.selectedGenre === 'Family'} 
              onChange={this.handleGenreChange} />{' '}
              Family
            </Label>
          </FormGroup>
        </FormGroup>
        </div>
        </div>
            <SearchPage componentFromCollection={this.componentFromCollection} />
             
    
            <ul className="movieContainer">
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
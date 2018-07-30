//page for dislike.js

//needs home button and add button

//needs search bar
import React, { Component } from "react";
import ColNavbar from "../Collection/ColNavbar"
import { Panel } from "react-bootstrap"
import SearchComponent from "../Random/SearchComponent"
import Database from "../Random/APIManager"
import ReviewCard from "../Random/reviewCard"

export default class Dislike extends Component {
  constructor() {
    super();
    this.state = {
        movies: []
   
    };
}
performSearch = (query) => {
  Database.performSearch(query)
       .then(allMovies =>
           this.setState({ movies: allMovies }) )
}

componentDidMount() {
  Database.getAllDislikedMovies()
      .then(responseData => {
          this.setState({ movies: responseData })
      })
}

deleteMovie = movieId => {
  // Delete the specified movie from the API
  Database.deleteMovie("movies", movieId)
    .then(() => {
      return Database.getAllDislikedMovies("movies")
    })      
    .then(card => {
      this.setState({
        movies: card
      });
    });
};

  render() {
    return (
      <div id="dislike">

        <Panel bsStyle="info">
          <Panel.Heading>
            <Panel.Title componentClass="h3">Movies I Didn't Like</Panel.Title>
          </Panel.Heading>
          <Panel.Body><ColNavbar /></Panel.Body>
        <SearchComponent/>
        <ul>
              {this.state.movies.map(movie => (

                <ReviewCard
                  key={movie.id}
                  movie={movie}

                  deleteMovie={this.deleteMovie}
                />


              ))
              }
            </ul>
  </Panel>
      </div>
    );
  }
}
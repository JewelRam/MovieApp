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
  addNewMovie = (searchResult) => {

    let newMovie = {

      "title": searchResult.title,
      "image": searchResult.poster_path,
      "type": this.state.selectedOption,
      "genreId": 1,
      "userId": 1,
      "owned": "false",
      "liked": "false",
      "review": "review"

    }
    Database.addMovie(newMovie)
      .then(response => {
        return Database.getAllDislikedMovies()
      })
      .then(responseData => {
        this.setState({ movies: responseData })
      })
  }

  performSearch = (query) => {
    Database.performSearch(query)
      .then(badMovie => {
        this.addNewMovie(badMovie)
      }
      )
  }

  componentDidMount() {
    Database.getAllDislikedMovies()
      .then(responseData => {
        this.setState({ movies: responseData })
      })
  }

  deleteMovie = movieId => {
    // Delete the specified movie from the API
    Database.deleteMovie(movieId)
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
          <SearchComponent 
          performSearch={this.performSearch} />
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
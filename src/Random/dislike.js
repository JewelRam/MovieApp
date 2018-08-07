//page for dislike.js

//needs home button and add button

//needs search bar
import React, { Component } from "react";
import ColNavbar from "../Collection/ColNavbar"
import { Panel } from "react-bootstrap"
import SearchPageD from "../Need/SearchPageD"
import Database from "./APIManager"
import ReviewCard from "./reviewCard"


export default class Dislike extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      movieToEdit: []
      
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
      "isReviewed": "true"

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
  componentFromDislike = () => {
    Database.getAllDislikedMovies()
        .then(responseData => {
          // console.log(responseData)
            this.setState({ movies: responseData })
        })
  }
  handleEdit = (event) => {
    event.preventDefault()
    fetch(`http://localhost:5002/movies/${this.state.movieToEdit.id}`, {
      method: "PUT",
      body: JSON.stringify(this.state.movieToEdit),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(() => { return fetch("http://localhost:5002/movies?liked=false") })
      .then(a => a.json())
      .then(updatedMovie => {
        this.setState({
          movies: updatedMovie
        })
      })
  }
  handleFieldChange = (event) => {
    const stateToChange = this.state.movieToEdit
    stateToChange[event.target.id] = event.target.value
    this.setState({ movieToEdit: stateToChange })
  }

  editMovie = (movieId) => {
    console.log("movieId", movieId)
    fetch(`http://localhost:5002/movies/${movieId}`)

      .then(a => a.json())
      .then(movie => {
        this.setState({
          movieToEdit: movie
        })
      })
  }
  handleModal = (movieId) => {
    console.log("worked!!")
    // this.editMovie(movieId)
    this.toggle()
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
      <div className="dislike-div" id="dislike">

        <Panel className="dislike-div" bsStyle="info">
          <Panel.Heading>
            <Panel.Title componentClass="h3">Movies I Didn't Like</Panel.Title>
          </Panel.Heading>
          <Panel.Body><ColNavbar /></Panel.Body>
          <SearchPageD genre={this.state.selectedGenre} type={this.state.selectedOption} componentFromDislike={this.componentFromDislike} />


          <ul className="dislikeContainer">

            {this.state.movies.map(movie => (

              <ReviewCard
                key={movie.id}
                movie={movie}
                editMovie={this.editMovie}
                deleteMovie={this.deleteMovie}
                handleModal={this.handleModal}
              />
            ))
            }
          </ul>
        </Panel>


<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>


<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


        
            <form onSubmit={this.handleEdit.bind(this)}>
              <input onChange={this.handleFieldChange} type="text"
                id="review"
                placeholder="Edit Review"
                value={this.state.movieToEdit.review}
                required="" autoFocus="" />


              <button type="submit">
                Update Review
                        </button>
            </form>
          




      </div>

    );
  }
}
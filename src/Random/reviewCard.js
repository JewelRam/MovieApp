//creates cards for dislike.js
//needs delete button and move to collection button
import React, { Component } from "react";

import { Thumbnail, Button } from 'react-bootstrap'


export default class ReviewCard extends Component {
  constructor() {
    super();
    this.state = {
      movieToEdit: [],
      viewForm: false,
      movies: []

    };
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
          movieToEdit: movie, viewForm: true
        })
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
    })
    .then(newStuff => {
      this.setState({viewForm: false})
      this.props.NewReview()
    }
    )
  }
  render() {
   
    return(
        
        
        
    <Thumbnail className="reviewCard" src={`https://image.tmdb.org/t/p/w200${this.props.movie.image}`} alt="242x200">
    <div className="review-card-text">
    <h4 id="stuff">{this.props.movie.title}</h4>
    {!this.state.viewForm? (
    <p> {this.props.movie.review}</p>
     ) : (  <form onSubmit={this.handleEdit}>
    <input onChange={this.handleFieldChange} type="text"
      id="review"
      className="review-text"
      placeholder="Edit Review"
      value={this.state.movieToEdit.review}
      required="" autoFocus="" />


    <button id="editBtn" type="submit">
      Update Review
              </button>



     </form> ) }
      <Button href="#" onClick={() => this.deleteMovie(this.props.movie.id)} bsStyle="danger">Delete</Button>
      <Button href="#" onClick={() => this.editMovie(this.props.movie.id)}>Edit</Button>
    </div>
  </Thumbnail>
    
        
    ) 
  

}
    
}

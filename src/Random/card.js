//creates cards for collection.js and need.js
//needs delete button
import React from "react";
import { Thumbnail, Button } from 'react-bootstrap'
import Database from "./APIManager"

const MovieCard = props => {

// const results = props.data;
// console.log(props)
// let movies = results.map(movie =>{

// return <div url={movie.results.original_title} key={movie.id}> </div>
// }
// )
// deleteMovie = movieId => {
//     // Delete the specified movie from the API
//     Database.deleteMovie("movies", movieId)
//       .then(() => {
//         return Database.getAllMovies("movies")
//       })      
//       .then(card => {
//         this.setState({
//           movies: card
//         });
//       });
//   };

console.log(props)
return(
    <Thumbnail id="movieCard" src="/thumbnaildiv.png" alt="242x200">
    <h3>{props.movie.title}</h3>
    <p>{props.movie.type}</p>
    <p>
      <Button bsStyle="danger">Delete</Button>
    
    </p>
  </Thumbnail>
)
}  

export default MovieCard;
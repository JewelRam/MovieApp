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
    <Thumbnail id="movieCard" src={`https://image.tmdb.org/t/p/w200${props.movie.image}`} alt="242x200">
    <h3>{props.movie.title}</h3>
    <p>{props.movie.type}</p>
    <p>
      <Button onClick={() => props.deleteMovie(props.movie.id)} bsStyle="danger">Delete</Button>
    
    </p>
  </Thumbnail>
)
}  

export default MovieCard;
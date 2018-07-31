//creates cards for collection.js and need.js
//needs delete button
import React from "react";
import { Thumbnail, Button } from 'react-bootstrap'
import Database from "./APIManager"

const MovieCard = props => {



console.log(props.movie.id)
return(
    <div class="movieCard">
    <Thumbnail src={`https://image.tmdb.org/t/p/w200${props.movie.image}`} alt="242x200">
    <h3 id="stuff">{props.movie.title}</h3>
    <p id="stuff">{props.movie.type}</p>
    <p>
      <Button onClick={() => props.deleteMovie(props.movie.id)} bsStyle="danger">Delete</Button>
    
    </p>
  </Thumbnail>
  </div>
)
}  

export default MovieCard;
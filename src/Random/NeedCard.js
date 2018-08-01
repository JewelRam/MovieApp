//function that adds the new movie to the correct database

//creates cards for collection.js and need.js
//needs delete button
import React from "react";
import { Thumbnail, Button } from 'react-bootstrap'
import Database from "./APIManager"

const NeedCard = props => {


console.log(props.movie.id)
return(
    <Thumbnail id="movieCard" src={`https://image.tmdb.org/t/p/w200${props.movie.image}`} alt="242x200">
    <h3>{props.movie.title}</h3>
    <p>{props.movie.type}</p>
    <p>
        <Button onClick={() => props.addMovieToCollection(props.movie.id)}>Add</Button>
      <Button onClick={() => props.deleteMovie(props.movie.id)} bsStyle="danger">Delete</Button>
    
    </p>
  </Thumbnail>
)
}  

export default NeedCard;
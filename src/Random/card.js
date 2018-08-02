//creates cards for collection.js and need.js
//needs delete button
import React from "react";
import { Thumbnail, Button } from 'react-bootstrap'


const MovieCard = props => {



console.log(props.movie.id)
return(
    
    <Thumbnail  className="movieCard" src={`https://image.tmdb.org/t/p/w200${props.movie.image}`} alt="242x200">
    <div className="col-card-text">
    <h4 id="title-text">{props.movie.title}</h4>
    <p id="type-text">{props.movie.type}</p>
    <p>
      <Button onClick={() => props.deleteMovie(props.movie.id)} bsStyle="danger">Delete</Button>
    
    </p>
    </div>
  </Thumbnail>
  
)
}  

export default MovieCard;
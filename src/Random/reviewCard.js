//creates cards for dislike.js
//needs delete button and move to collection button
import React from "react";

import { Thumbnail, Button } from 'react-bootstrap'


const ReviewCard = props => {

   

    return(
        
        <div class="reviewCard">
        
    <Thumbnail src={`https://image.tmdb.org/t/p/w200${props.movie.image}`} alt="242x200">
    <h4 id="stuff">{props.movie.title}</h4>
   
    <p> {props.movie.review}</p>
      <Button onClick={() => props.deleteMovie(props.movie.id)} bsStyle="danger">Delete</Button>
      <Button onClick={() => props.editMovie(props.movie.id)}>Edit</Button>
    
  </Thumbnail>
  </div>
        
    ) 

    
}
export default ReviewCard;
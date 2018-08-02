//creates cards for dislike.js
//needs delete button and move to collection button
import React from "react";

import { Thumbnail, Button } from 'react-bootstrap'


const ReviewCard = props => {

   

    return(
        
        
        
    <Thumbnail className="reviewCard" src={`https://image.tmdb.org/t/p/w200${props.movie.image}`} alt="242x200">
    <div className="review-card-text">
    <h4 id="stuff">{props.movie.title}</h4>
   
    <p> {props.movie.review}</p>
      <Button onClick={() => props.deleteMovie(props.movie.id)} bsStyle="danger">Delete</Button>
      <Button onClick={() => props.editMovie(props.movie.id)}>Edit</Button>
    </div>
  </Thumbnail>
  
        
    ) 

    
}
export default ReviewCard;
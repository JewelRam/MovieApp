//creates cards for dislike.js
//needs delete button and move to collection button
import React from "react";
import { Card, CardTitle, CardText, CardBody, Button, CardSubtitle } from "reactstrap"

import Database from "./APIManager"

const ReviewCard = props => {

   

    return(
        
        
 <div>
      <Card>
        <CardBody>
           <CardTitle>{props.movie.title}</CardTitle>
          
         </CardBody>
         <img width="10%" src={`https://image.tmdb.org/t/p/w200${props.movie.image}`} alt="Card image cap" />
        <CardBody>
          <CardText id="movie-review">{props.movie.review}</CardText>
           <Button onClick={() => props.editMovie(props.movie.id)}>Edit</Button>
            <Button onClick={() => props.deleteMovie(props.movie.id)}>Delete</Button>
          
        </CardBody>
       </Card>
    </div>
    ) 

    
}
export default ReviewCard;
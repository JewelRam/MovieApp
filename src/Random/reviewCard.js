//creates cards for dislike.js
//needs delete button and move to collection button
import React from "react";
import { Card, CardTitle, CardText, CardBody, Button } from "reactstrap"

import Database from "./APIManager"

const ReviewCard = props => {


    return(

<div>
      <Card>
        <CardBody>
          <CardTitle>{props.movie.title}</CardTitle>
          
        </CardBody>
        <img width="20%" src={`https://image.tmdb.org/t/p/w200${props.movie.image}`} alt="Card image cap" />
        <CardBody>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Edit</Button> <Button onClick={() => props.deleteMovie(props.movie.id)}>Delete</Button>
          
        </CardBody>
      </Card>
    </div>
    )


}
export default ReviewCard;
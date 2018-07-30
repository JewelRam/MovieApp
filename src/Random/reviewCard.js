//creates cards for dislike.js
//needs delete button and move to collection button
import React from "react";
import { Card, CardTitle, CardText, CardBody, Button } from "reactstrap"

import Database from "./APIManager"

const ReviewCard = props => {


    return(
//         <div>
//       <Card inverse>
//         <CardImg width="30%" src={`https://image.tmdb.org/t/p/w200${props.movie.image}`} alt="Card image cap" />
//         <CardImgOverlay>
//           <CardTitle>{props.movie.title}</CardTitle>
//           <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
//           <CardText>
//             <small className="text-muted">Last updated 3 mins ago</small>
//           </CardText>
//           <Button>Edit</Button>
//         </CardImgOverlay>
//       </Card>
// </div>
<div>
      <Card>
        <CardBody>
          <CardTitle>{props.movie.title}</CardTitle>
          
        </CardBody>
        <img width="20%" src={`https://image.tmdb.org/t/p/w200${props.movie.image}`} alt="Card image cap" />
        <CardBody>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Edit</Button> <Button>Delete</Button>
          
        </CardBody>
      </Card>
    </div>
    )


}
export default ReviewCard;
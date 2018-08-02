import React from "react";
import { Thumbnail, Button } from 'react-bootstrap'


const PopularCard = props => {




return(
    
    <Thumbnail  className="popularCard" src={`https://image.tmdb.org/t/p/w200${props.movie.poster_path}`} alt="242x200">
    <div className="pop-card-text">
    <h4 id="title-text">{props.movie.title}</h4>
    
    </div>
    </Thumbnail>  
  
)
}  

export default PopularCard;
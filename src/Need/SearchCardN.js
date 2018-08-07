import React from "react";
import { Thumbnail, Button } from 'react-bootstrap'
import Database from "../Random/APIManager"


const SearchCardN = props => {

   

    
return(
    
    <Thumbnail  className="searchCard" src={`https://image.tmdb.org/t/p/w200${props.movies.poster_path}`} alt="242x200">
    <div className="pop-card-text">
    <h4 id="title-text">{props.movies.title}</h4>
    {/* <p>{props.movie.type}</p>
    <p>{props.movie.genre}</p> */}
    </div>
    <Button onClick={() => props.addNewMovieN(props.movies)}>Add</Button>

    </Thumbnail>  
  
)
}  

export default SearchCardN;
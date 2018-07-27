//creates cards for collection.js and need.js
//needs delete button
import React from "react";
import SearchComponent from "./SearchComponent"

const MovieCard = props => {

const results = props.results;
let movies = results.map(movie => 
    <SearchComponent/>
)


// return(

// )
   
    
}
export default MovieCard;
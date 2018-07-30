import React, { Component } from "react"
import { FormControl, FormGroup, Button } from "react-bootstrap"
import MovieCard from "./card"
import Database from "./APIManager"




export default class SearchComponent extends Component {

    constructor() {
        super();
        this.state = {
            movies: [],
            searchText: ""
        };
    }
    performSearch = (query) => {
        fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=7cd3eb7f73f94864b2e6a0bfd441b3dd&page=1&language="en"
        `)
            .then(response => response.json())
            .then(responseData => {
                console.log(responseData.results[0].poster_path)

                const firstTitle = responseData.results[0].title
                console.log(firstTitle)
                const firstPicture = responseData.results[0].poster_path
                this.setState({ movies: responseData.results })
            })
    }
    onSearchChange = e => {
        this.setState({ searchText: e.target.value });

    }
    handleSubmit = e => {
        e.preventDefault();

        this.performSearch(this.state.searchText)
       
        e.currentTarget.reset();
    }

    componentDidMount() {
        fetch("http://localhost:5002/movies")
            .then(response => response.json())
            .then(responseData => {
                this.setState({ movies: responseData })
            })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <FormControl
                        onChange={this.onSearchChange}
                        id="searchBar"
                        value={this.state.searchText}
                        type="text"
                        placeholder="Search Movie" />
                    
                    <br></br>

                    <Button id="add-movie-btn" type="submit">Add Movie</Button>
                    <ul>
                        {this.state.movies.map(movie => (
                        
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                                
                                deleteMovie={this.deleteMovie}
                            />
                        
                            
                        ))
                    }
                    </ul>
                    
                    {/* <MovieCard data={this.state.movies}/>  */}

                </FormGroup>

            </form>

        )
    }


}
import React, { Component } from "react"
import { FormControl, FormGroup, Button } from "react-bootstrap"





export default class SearchComponent extends Component {

    constructor() {
        super();
        this.state = {
            searchText: ""
        };
    }
  
    onSearchChange = e => {
        this.setState({ searchText: e.target.value });

    }
    handleSubmit = e => {
        e.preventDefault();

        this.props.performSearch(this.state.searchText)

        e.currentTarget.reset();
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
                    {/* <ul>
                        {this.state.movies.map(movie => (

                            <MovieCard
                                key={movie.id}
                                movie={movie}

                                deleteMovie={this.deleteMovie}
                            />


                        ))
                        }
                    </ul> */}

                    {/* <MovieCard data={this.state.movies}/>  */}

                </FormGroup>

            </form>

        )
    }


}
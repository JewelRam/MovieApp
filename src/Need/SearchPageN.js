import React, { Component } from "react";
import { Form, FormControl, Button } from 'react-bootstrap'
import Database from "../Random/APIManager"
import SearchCardN from "./SearchCardN"


export default class SearchPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: "",
            movies: [],
            results: []
        }

    }
    addNewMovieN = (searchResult) => {
    
        let newMovie= {
       
         "title": searchResult.title,
         "image": searchResult.poster_path,
         "type": this.props.type,
         "genre": this.props.genre,
         "userId": 1,
         "owned": "false",
         "liked": "true",
         "isReviewed": "false"
     
       }
       Database.addMovie(newMovie)
       .then(response => {
       return this.props.componentFromNeed()
       })
       .then( () =>{
           this.setState({results: []})
       } )
      }
    onSearchChange = e => {
        this.setState({ searchText: e.target.value });

    }
    performSearch = (e) => {
    
        e.preventDefault();
       Database.performSearch(this.state.searchText)
            .then(movie => {
             console.log(movie)
             
                this.setState({ results: movie })
            } 
            
            )
            e.currentTarget.reset();
     }

    // handleSubmit = e => {
    //     e.preventDefault();

    //     this.props.performSearch(this.state.searchText)

    //     e.currentTarget.reset();
    // }
    // addMovieToCollectionFromSearch = (newMovie) => {
        
    //     Database.addMovieToCollectionFromSearch(newMovie)
    //         .then(responseData => {
    //             this.setState({ movies: responseData })
    //             // this.props.history.push("/Collection")
    //         })
    // }
    addMovieToCollecitonFromSearch = (newMovie) => {
        
        Database.addMovieToCollectionFromSearch(newMovie)
            .then(responseData => {
                this.setState({ movies: responseData })
                // this.props.history.push("/Collection")
            })
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.performSearch}>
                    <FormControl id="movieSearch" placeholder="Search for a movie!" 
                    

                    value={this.state.searchText} 
                    onChange={this.onSearchChange} />


                </Form>
                <div className="search-container">
                    {this.state.results.map((movies) => (

                        <SearchCardN key={movies.id}
                         movies={movies}
                          
                        results={this.state.results} 
                        addNewMovieN={this.addNewMovieN} />
                    ))}
                </div>

            </div>
        )
    }
}
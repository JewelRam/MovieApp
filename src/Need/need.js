//movies i need to buy page
//needs home button, add button also move to collection button

//needs search bar
import ColNavbar from "../Collection/ColNavbar"
import React, { Component } from "react"
import { Panel } from "react-bootstrap"
import SearchComponent from "../Random/SearchComponent"
import Database from "../Random/APIManager"
import MovieCard from "../Random/card"

export default class Need extends Component {
    constructor() {
        super();
        this.state = {
            movies: []
       
        };
    }
    performSearch = (query) => {
        Database.performSearch(query)
             .then(allMovies =>
                 this.setState({ movies: allMovies }) )
     }
    
      componentDidMount() {
       Database.getAllNeededMovies()
            .then(responseData => {
                this.setState({ movies: responseData })
            })
    }
    
      deleteMovie = movieId => {
        // Delete the specified movie from the API
        Database.deleteMovie("movies", movieId)
          .then(() => {
            return Database.getAllNeededMovies("movies")
          })      
          .then(card => {
            this.setState({
              movies: card
            });
          });
      };

    render() {
        return (
            <div id="need">
                {/* <PageHeader>
            Movies I Need To Buy <small>Wooo tiny header</small>
              <ColNavbar/>
              </PageHeader> */}
                <Panel bsStyle="info">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">Movies I Need To Buy</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body><ColNavbar /></Panel.Body>

                    <SearchComponent performSearch={this.performSearch} />
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
                </Panel>
            </div>
        );
    }
}
//movies i need to buy page
//needs home button, add button also move to collection button

//needs search bar
import ColNavbar from "../Collection/ColNavbar"
import React, { Component } from "react"
import { Panel } from "react-bootstrap"
import SearchComponent from "../Random/SearchComponent"
import Database from "../Random/APIManager"
import NeedCard from "../Random/NeedCard"

export default class Need extends Component {
    constructor() {
        super();
        this.state = {
            movies: []
       
        };
    }
   
   
 addNewMovie = (searchResult) => {
   
    let newMovie= {
   
     "title": searchResult.title,
     "image": searchResult.poster_path,
     "type": this.state.selectedOption,
     "genreId": 1,
     "userId": 1,
     "owned": "false",
     "liked": "true",
     "review": "review"
 
   }
   Database.addMovie(newMovie)
   .then(response => {
 return Database.getAllNeededMovies()
   })
   .then(responseData => {
     this.setState({ movies: responseData })
 })
  }   
    performSearch = (query) => {
        Database.performSearch(query)
             .then(neededMovie =>
                this.addNewMovie(neededMovie) )
     }
    
      componentDidMount() {
       Database.getAllNeededMovies()
            .then(responseData => {
                this.setState({ movies: responseData })
            })
    }
    
      deleteMovie = movieId => {
        // Delete the specified movie from the API
        Database.deleteMovie(movieId)
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

                <NeedCard
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
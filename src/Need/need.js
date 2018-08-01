//movies i need to buy page
//needs home button, add button also move to collection button

//needs search bar
import ColNavbar from "../Collection/ColNavbar"
import React, { Component } from "react"
import { Panel } from "react-bootstrap"
import { FormGroup, Label, Input } from 'reactstrap';
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

        let newMovie = {

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
    addMovieToCollection = (movieId) => {
        Database.addMovieToCollection(movieId)
            .then(responseData => {
                // this.setState({ movies: responseData })
                 this.props.history.push("/collection")
            })
    }
    performSearch = (query) => {
        Database.performSearch(query)
            .then(neededMovie =>
                this.addNewMovie(neededMovie))
    }
    handleOptionChange = (changeEvent) => {
        // console.log("hey", changeEvent.target.value)
        this.setState({
            selectedOption: changeEvent.target.value
        });
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
                    <FormGroup tag="fieldset">
                        <legend>What Kind?</legend>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" value="DVD"
                                    checked={this.state.selectedOption === 'DVD'}
                                    onChange={this.handleOptionChange} />{' '}
                                DVD
            </Label>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio2" value="BLURAY"
                                    checked={this.state.selectedOption === 'BLURAY'}
                                    onChange={this.handleOptionChange} />{' '}
                                BLURAY
            </Label>
                        </FormGroup>
                        <FormGroup check >
                            <Label check>
                                <Input type="radio" name="radio3" value="VHS"
                                    checked={this.state.selectedOption === 'VHS'}
                                    onChange={this.handleOptionChange} />{' '}
                                VHS
            </Label>
                        </FormGroup>
                    </FormGroup>

                    <SearchComponent performSearch={this.performSearch} />
                    <ul>
                        {this.state.movies.map(movie => (

                            <NeedCard
                                key={movie.id}
                                movie={movie}
                                addMovieToCollection={this.addMovieToCollection}
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
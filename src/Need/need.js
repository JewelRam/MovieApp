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
import SearchPageN from "./SearchPageN"

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
            "genre": this.state.selectedGenre,
            "userId": 1,
            "owned": "false",
            "liked": "true",
            "isReviewed": "false"

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
    componentFromNeed = () => {
        Database.getAllNeededMovies()
            .then(responseData => {
              // console.log(responseData)
                this.setState({ movies: responseData })
            })
      }
    componentDidMount() {
        Database.getAllNeededMovies()
            .then(responseData => {
                this.setState({ movies: responseData })
            })
    }

    handleOptionChange = (changeEvent) => {
        // console.log("hey", changeEvent.target.value)
        this.setState({
            selectedOption: changeEvent.target.value
        });
    }
        handleGenreChange = (changeEvent) => {
            // console.log("hey", changeEvent.target.value)
            this.setState({
                selectedGenre: changeEvent.target.value
            });
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

                    <Panel className="need-div" bsStyle="info">
                        <Panel.Heading>
                            <Panel.Title componentClass="h3">Movies I Need To Buy</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body><ColNavbar /></Panel.Body>
                        <div className="radio-container">
                        <div className="type-radios">
                        <FormGroup tag="fieldset">
                            <legend id="radio-heading">What Kind?</legend>
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
                        </div>
                        <div className="genre-radios">
                        <FormGroup tag="fieldset">
                            <legend id="radio-heading">What Genre?</legend>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio4" value="Horror"
                                        checked={this.state.selectedGenre === 'Horror'}
                                        onChange={this.handleGenreChange} />{' '}
                                    Horror
            </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio4" value="SciFi"
                                        checked={this.state.selectedGenre === 'SciFi'}
                                        onChange={this.handleGenreChange} />{' '}
                                    SciFi
            </Label>
                            </FormGroup>
                            <FormGroup check >
                                <Label check>
                                    <Input type="radio" name="radio4" value="Drama"
                                        checked={this.state.selectedGenre === 'Drama'}
                                        onChange={this.handleGenreChange} />{' '}
                                    Drama
            </Label>
                            </FormGroup>
                            <FormGroup check >
                                <Label check>
                                    <Input type="radio" name="radio4" value="Comedy"
                                        checked={this.state.selectedGenre === 'Comedy'}
                                        onChange={this.handleGenreChange} />{' '}
                                    Comedy
            </Label>
                            </FormGroup>
                            <FormGroup check >
                                <Label check>
                                    <Input type="radio" name="radio4" value="Family"
                                        checked={this.state.selectedGenre === 'Family'}
                                        onChange={this.handleGenreChange} />{' '}
                                    Family
            </Label>
                            </FormGroup>
                        </FormGroup>
                        </div>
                        
                        </div>
                        <SearchPageN genre={this.state.selectedGenre} type={this.state.selectedOption} componentFromNeed={this.componentFromNeed} />

                        <ul className="needContainer">
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
        };
    }


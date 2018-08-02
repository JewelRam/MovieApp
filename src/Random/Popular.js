import React, { Component } from "react";
import { Thumbnail, Button } from 'react-bootstrap'
import Database from "./APIManager"
import PopularCard from "./PopularCards"


export default class PopularComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            popularMovie: []
        }

    }
    componentDidMount() {
        Database.getPopularMovies()
            .then(responseData => {
                // console.log(responseData)
                this.setState({ popularMovie: responseData })
            })
    }







    render() {
        console.log(this.state.popularMovie)
        return (
        <div className="popularContainer">
        <h1 id="popular-title">Popular Now</h1>
            <ul className="popularMovie">
            
                {this.state.popularMovie.map(movie => (

                    <PopularCard
                        key={movie.id}
                        movie={movie}
                        
                    />


                ))
                }
            </ul>
        </div>
        )
    }

}
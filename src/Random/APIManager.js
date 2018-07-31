//handles API calls
const Database = Object.create({}, {


    deleteMovie: {
        value: (movieId) => {
            return fetch(`http://localhost:5002/movies/${movieId}`, {
                method: "DELETE"

            })
        }
    },
    getAllMovies: {
        value: () => {
            return fetch("http://localhost:5002/movies")
                .then(e => e.json())
        }
    },
    getAllOwnedMovies: {
        value: () => {
            return fetch("http://localhost:5002/movies?owned=true")
                .then(e => e.json())
        }
    },
    getAllNeededMovies: {
        value: () => {
            return fetch("http://localhost:5002/movies?owned=false")
                .then(e => e.json())
        }
    },
    getAllDislikedMovies: {
        value: () => {
            return fetch("http://localhost:5002/movies?liked=false")
                .then(e => e.json())
        }
    },
    getMoviesByType: {
        value: (type) => {
            return fetch(`http://localhost:5002/movies?type=${type}`)
                .then(e => e.json())
        }
    },

    addMovie: {
        value: (newObject) => {
            return fetch("http://localhost:5002/movies", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newObject)
            })
                // When add is finished, retrieve the new list of articles
                .then(() => {
                    // Remember you HAVE TO return this fetch to the subsequenet `then()`
                    return fetch("http://localhost:5002/movies")
                })
                // Once the new array of articles is retrieved, set the state
                .then(a => a.json())
        }
    },
    addMovieToCollection: {
        value: (movieId) => {
            return fetch(`http://localhost:5002/movies/${movieId}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ owned: true })
            })
                .then(e => e.json())
                // When add is finished, retrieve the new list of articles
                .then(() => {
                    // Remember you HAVE TO return this fetch to the subsequenet `then()`
                    return fetch("http://localhost:5002/movies?owned=true")
                })
                // Once the new array of articles is retrieved, set the state
                .then(e => e.json())
        }
    },
    // patchFeedback: {
    //     value: (purchasedMovie) => {
    //      return fetch(`http://localhost:5002/${movieId??}`,
    //      {
    //       // http://localhost:5002/movies
    //       method: "PATCH",
    //       headers: {
    //        "Content-Type": "application/json"
    //       },
    //       body: JSON.stringify(theObject)
    //      });
    //     }
    //    },//end of patch
    performSearch: {
        value: (query) => {

            return fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=7cd3eb7f73f94864b2e6a0bfd441b3dd&page=1&language="en"
    `)
                .then(response => response.json())
                .then(responseData => {
                    console.log(responseData.results[0].poster_path)
                    return responseData.results[0]
                    // const firstTitle = responseData.results[0].title

                    // this.setState({ movies: responseData.results })
                })

        },

    }

    // handleEdit: {
    //     value: (moviesToEdit) => {
    //         return fetch(`http://localhost:5002/tasks/${moviesToEdit.id}`, {
    //             method: "PUT",
    //             body: JSON.stringify(moviesToEdit),
    //             headers: {
    //                 "Content-Type": "application/json"
    //             }
    //         }).then(() => { return fetch("http://localhost:5002/tasks?completed=false") })
    //             .then(a => a.json())
    //     }
    // },
})
export default Database
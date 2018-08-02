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
            return fetch("http://localhost:5002/movies?owned=false&isReviewed=false")
                .then(e => e.json())
        }
    },
    getAllDislikedMovies: {
        value: () => {
            return fetch("http://localhost:5002/movies?isReviewed=true&owned=false")
                .then(e => e.json())
        }
    },
    getMoviesByType: {
        value: (type) => {
            return fetch(`http://localhost:5002/movies?owned=true&type=${type}`)
                .then(e => e.json())
        }
    },
    getMoviesByGenre: {
        value: (genre) => {
            return fetch(`http://localhost:5002/movies?owned=true&genre=${genre}`)
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
                // .then(() => {
                //     // Remember you HAVE TO return this fetch to the subsequenet `then()`
                //     return fetch("http://localhost:5002/movies")
                // })
                // // Once the new array of articles is retrieved, set the state
                // .then(a => a.json())
        }
    },
    addMovieToCollection: {
        value: (movieId) => {
            return fetch(`http://localhost:5002/movies/${movieId}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ owned: true })
            })
        
        }   
    },
    removeMovieFromDislike: {
        value: (movieId) => {
            return fetch(`http://localhost:5002/movies/${movieId}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ liked: true })
            })
        
        }   
    },
    removeMovieFromNeed: {
        value: (movieId) => {
            return fetch(`http://localhost:5002/movies/${movieId}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ owned: false })
            })
        
        }   
    },
    
    performSearch: {
        value: (query) => {

            return fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=7cd3eb7f73f94864b2e6a0bfd441b3dd&page=1&language="en")
    `)
                .then(response => response.json())
                .then(responseData => {
                    console.log(responseData)
                    return responseData.results[0]
                   
                    // const firstTitle = responseData.results[0].title

                    // this.setState({ movies: responseData.results })
                })

        },

    },

    handleEdit: {
        value: (movieToEdit) => {
            return fetch(`http://localhost:5002/tasks/${movieToEdit.id}`, {
                method: "PUT",
                body: JSON.stringify(movieToEdit),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(() => { return fetch("http://localhost:5002/movies?liked=false") })
                .then(a => a.json())
        }
    }
})
export default Database
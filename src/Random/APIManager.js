//handles API calls
const Database = Object.create({}, {

deleteMovie: {
    value: (movieId) => {
        // Delete the specified article
        return fetch(`http://localhost:5002/movies/${movieId}`, {
            method: "DELETE"
        })
            // When DELETE is finished, retrieve the new list of articles
            .then(() => {
                // Remember you HAVE TO return this fetch to the subsequenet `then()`
                return fetch("http://localhost:5002/movies")
            })
            // Once the new array of animals is retrieved, set the state
            .then(a => a.json())
    }
},
getAllMovies: {
    value: () => {
        return fetch("http://localhost:5002/movies")
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
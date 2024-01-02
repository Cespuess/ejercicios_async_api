// Escribe tu código aquí:

const url = "https://api.theoviedb.org/3/movie/popular?api_key=2dfce0f603b2af19a994ba0d9c970a35&language=es-ES"

fetch(url)
    .then(res => res.json())
    .then(response => console.log(response))
    .catch(error => console.log(error))




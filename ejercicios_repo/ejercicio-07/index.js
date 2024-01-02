// Escribe tu código aquí:
const axios = require("axios");

const url = "https://api.theoviedb.org/3/movie/popular?api_key=2dfce0f603b2af19a994ba0d9c970a35&language=es-ES";

axios.get(url)
    .then(res => console.log(res))
    .catch(error => console.log(error.message))



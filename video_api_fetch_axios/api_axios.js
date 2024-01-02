const axios = require("axios");
// con .then()
let url = "https://api.themoviedb.org/3/movie/550?api_key=2dfce0f603b2af19a994ba0d9c970a35&language=es-ES"

axios.get(url)
    .then(response => console.log(response.data.title))

// con async-----------
async function nombrePeli() {
    try{
        respuesta = await axios.get(url);
        console.log(respuesta.data.title);
    } catch(error) {
        console.error(error);
    }
}
nombrePeli();
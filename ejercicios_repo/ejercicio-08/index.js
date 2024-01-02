// Escribe tu código aquí:
const url = "https://api.themoviedb.org/3/movie/popular?api_key=2dfce0f603b2af19a994ba0d9c970a35&language=es-ES"

const api = fetch(url)
    .then(res => res.json())
    .then(hola => hola.results)
    .then(respuesta => {
        respuesta.forEach(element => console.log(element.title));
    })

    
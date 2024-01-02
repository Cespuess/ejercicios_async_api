// Escribe tu código aquí:
const url = "https://api.themoviedb.org/3/movie/popular?api_key=2dfce0f603b2af19a994ba0d9c970a35&language=es-ES";

fetch(url)
    .then(res => res.json())
    .then(result => console.log(result))
    .catch(error => console.log(error.message))

fetch(url)
    .then(res => res.json())
    .then(objeto => objeto.results.filter(peli => peli.id<600000))
    .then(mapeado => mapeado.map(elemento => elemento.adult = true))
    .then(cosa => console.log(cosa))
    .catch(error => console.log(error.message))

fetch(url)
    .then(res => res.json())
    .then(objeto => {
        let filtrado = objeto.results.filter(peli => peli.id<600000)
        console.log(filtrado)
        let mapeado = filtrado.map(elemento => elemento.adult = true);
        console.log(mapeado);
    })
    .catch(error => console.log(error.message))
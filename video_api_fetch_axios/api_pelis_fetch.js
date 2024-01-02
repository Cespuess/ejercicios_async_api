const cargarPelis = async() => {
    try {
        const respuesta = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=2dfce0f603b2af19a994ba0d9c970a35&language=es-ES");
        console.log(respuesta);

        // Si la respuesta es correcta
        if (respuesta.status === 200) {
            const datos = await respuesta.json();
            datos.results.forEach(pelicula => console.log(pelicula.title));
        }
    } catch(error) {
        console.log(error.message);
    }
}

cargarPelis();
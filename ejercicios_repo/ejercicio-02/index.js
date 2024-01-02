// Escribe tu código aquí:
function sec3() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise resuelta");
        }, 3000);
    })
}

sec3()
    .then((message) => console.log(message));


// Escribe tu código aquí:
function getError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Error: Promise rechazada"));
        }, 2000)
    })
}

async function refusedPromise() {
    try{
        const response = await getError();
    } catch (error) {
        console.log(error.message);
    }
}

refusedPromise();
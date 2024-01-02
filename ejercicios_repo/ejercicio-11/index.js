// Escribe tu código aquí:

const promesa1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promesa 1 ");
    }, 2000)
})
const promesa2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("error promesa 2 ");
    }, 2000)
})
const promesa3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promesa 3 ");
    }, 2000)
})

Promise.allSettled([promesa1, promesa2, promesa3])
    .then(res => console.log(res));
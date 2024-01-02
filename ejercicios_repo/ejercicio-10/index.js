// Escribe tu código aquí:

const promesa1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("hola1")
    }, 2000)
})

const promesa2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("hola2")
    }, 7000)
})

const promesa3 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("hola3")
    }, 2000)
})

Promise.all([promesa2, promesa3, promesa1])
    .then(res => console.log(res))

const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000))
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000))
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 1500))

Promise.all([promise1, promise2, promise3]).then(resultados => 
    console.log('Todas las Promises se han resuelto:', resultados))
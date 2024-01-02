// Escribe tu código aquí:
 function oneSecondAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Operación completada");
        }, 1000)
    })
    
 }

 async function getResponse() {
    const response = await oneSecondAsync();
    console.log(response); 
 }

 getResponse();   
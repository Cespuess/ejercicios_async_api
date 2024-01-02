// Escribe tu código aquí:

const printHello = (cb) => {
    setTimeout(() => {
        cb();
    }, 2000);
};

printHello(() => {
    console.log("Hola mundo");
}) 
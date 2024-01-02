// Escribe tu código aquí:
/*function crearPromiseConRetraso(valor, retraso) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(valor)
      }, retraso)
    })
  }
  // Inicializamos 3 variables sin asignarle valor.
  let n1
  let n2
  let n3
  
  crearPromiseConRetraso(1, 1000)
    .then((resultado1) => {
      console.log(resultado1)
      n1 = resultado1
      return crearPromiseConRetraso(2, 1000)
    })
    .then((resultado2) => {
      console.log(resultado2)
      n2 = resultado2
      return crearPromiseConRetraso(3, 1000)
    })
    .then((resultado3) => {
      console.log(resultado3)
      n3 = resultado3 
      const suma = n1 + n2 + n3
      console.log('Suma:', suma)
    })*/

    async function crearPromiseConRetraso(valor, retraso) {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(valor);
          }, retraso);
        });
      }
      
      async function main() {
        try {
          let n1;
          let n2;
          let n3;
      
          const resultado1 = await crearPromiseConRetraso(1, 1000);
          console.log(resultado1);
          n1 = resultado1;
      
          const resultado2 = await crearPromiseConRetraso(2, 1000);
          console.log(resultado2);
          n2 = resultado2;
      
          const resultado3 = await crearPromiseConRetraso(3, 1000);
          console.log(resultado3);
          n3 = resultado3;
      
          const suma = n1 + n2 + n3;
          console.log('Suma:', suma);
        } catch (error) {
          console.error("Se produjo un error:", error);
        }
      }
      
      main();
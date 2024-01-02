// Escribe tu código aquí:

async function procesarElementos(elementos) {
    for (const elemento of elementos) {
      await new Promise((resolve) => setTimeout(resolve, elemento * 1000))
      console.log('Procesando elemento:', elemento)
    }
  }
  
  const elementos = [5, 4, 3, 2, 1]
  procesarElementos(elementos)
import chalk from 'chalk'

// Funciones helpers

interface response {
  palindromo: {
    secSinRepetidos: string
    patronRepetido: string
    cantRepeticiones: number
  }
  error: string | null
}

export const resolverSecuencias = (palabraEvaluada: string): response => {
  const palabraAlReves: string = [...palabraEvaluada].reverse().join('')

  if (palabraEvaluada !== palabraAlReves) {
    return { error: 'El parametro tiene que ser palíndromo', palindromo: null }
  }

  let repetidosAnteriores: string[] = []
  let repetidos: string[] = []
  let loopSinRepetidos: number = 0
  let sliceIndex: number = 2

  // La idea es una recursion en lugar de un while, pero no me alcanzo el tiempo para refactorizar esta parte
  while (loopSinRepetidos === 0) {
    ;[...palabraEvaluada].forEach((char: string, i: number) => {
      let indicesSiguiente: string = palabraEvaluada.slice(i + 1, i + sliceIndex)

      if (indicesSiguiente) {
        let str: string = char + palabraEvaluada.slice(i + 1, i + sliceIndex)
        let charRestantes: string = palabraEvaluada.replace(str, '')
        if (charRestantes.includes(str)) {
          repetidos.push(str)
        }
      }
    })

    repetidos = [...new Set(repetidos)]

    if (repetidos.length > repetidosAnteriores.length) {
      const siguienteIndice: number = repetidos[repetidos.length - 1].length + 1
      sliceIndex = siguienteIndice

      repetidosAnteriores = [...repetidos]
    } else {
      loopSinRepetidos = 1
      let patronRepetido = repetidos[repetidos.length - 1]

      // Se establece una condicion para que en caso de que el primer caracter este incluido en el patron repetido este no sea eliminado y no genere incoherencias
      // Por ejemplo en "ananana" no se eliminaria la primera letra ("a") al excluirlo del patron "ana"
      try {
        if (patronRepetido[0] === palabraEvaluada[0]) {
          patronRepetido = patronRepetido.slice(1)
        }
      } catch (err) {
        // throw errorPalindromo
        return { error: 'El parametro tiene que ser palíndromo', palindromo: null }
      }

      let cantRepeticiones = 0
      let palabraACortar = palabraEvaluada

      while (palabraACortar.includes(patronRepetido)) {
        palabraACortar = palabraACortar.replace(patronRepetido, '')
        cantRepeticiones == ++cantRepeticiones
      }

      const secSinRepetidos = palabraEvaluada.split(patronRepetido).join('')
      return { palindromo: { secSinRepetidos, patronRepetido, cantRepeticiones }, error: null }
    }
  }
}

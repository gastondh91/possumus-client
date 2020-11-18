// Funciones helpers

export const resolverSecuencias = (palabraEvaluada: string) : { palabraSinRepetidos: string, patronRepetido: string } => {

  let repetidosAnteriores: string[] = [];
  let repetidos: string[] = [];
  let loopSinRepetidos: number = 0;
  let sliceIndex: number = 2;
  
  while(loopSinRepetidos === 0){
    [...palabraEvaluada].forEach((char: string, i: number) => {
      let indicesSiguiente: string = palabraEvaluada.slice(i + 1, i + sliceIndex)
  
      if (indicesSiguiente) {
        let str: string = char + palabraEvaluada.slice(i + 1, i + sliceIndex)
        let charRestantes: string = palabraEvaluada.replace(str,'')
        if(charRestantes.includes(str)){
          repetidos.push(str)
        }
      }
    })

    repetidos = [...new Set(repetidos)]

    if(repetidos.length > repetidosAnteriores.length) {

      const siguienteIndice: number = repetidos[repetidos.length-1].length + 1
      sliceIndex = siguienteIndice

      repetidosAnteriores = [...repetidos]
    } else {
      loopSinRepetidos = 1
      const patronRepetido = repetidos[repetidos.length-1]
    
      const palabraSinRepetidos: string = palabraEvaluada.split(patronRepetido).join('')
      return { palabraSinRepetidos, patronRepetido }
    }
  }
}

export const checkPalindromo = (palabraEvaluada: string) => {
  const palabraAlReves: string = [...palabraEvaluada].reverse().join('')

  if(palabraEvaluada !== palabraAlReves){
    throw new Error("El parametro tiene que ser palíndromo")
  }
  return palabraEvaluada
}
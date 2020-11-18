import { checkPalindromo, resolverSecuencias } from '../services'

describe('Eliminar secuencias repetidas y retornar otra secuencia de esas repeticiones', () => {
  
  test('El parametro debe ser palindromo', ()=> {
    expect(checkPalindromo('malayalam')).toBe('malayalam')
    expect(checkPalindromo('rotomotor')).toBe('rotomotor')
    expect(checkPalindromo('anana')).toBe('anana')
  })

  test('La palabra resultante tiene que ser una secuencia que no incluya los patrones repetidos', () => {
    expect(resolverSecuencias('malayalam').secSinRepetidos).toBe('mym')
    expect(resolverSecuencias('rotomotor').secSinRepetidos).toBe('rmr')
  })

  test('La palabra resultante puede variar en cantidad de caracteres', () => {
    expect(resolverSecuencias('anana').secSinRepetidos).toBe('a')
  })

  test('Se devuelve la cantidad de veces que el patron fue repetido', () => {
    expect(resolverSecuencias('anana').cantRepeticiones).toBe(2)
    expect(resolverSecuencias('malayalam').cantRepeticiones).toBe(2)
    expect(resolverSecuencias('rotomotor').cantRepeticiones).toBe(2)
  })

  test('Los patrones que se repiten deben ser aquellos que quedaron fuera del resultado',() => {
    expect(resolverSecuencias('malayalam').patronRepetido).toBe("ala")
    expect(resolverSecuencias('rotomotor').patronRepetido).toBe('oto')
    expect(resolverSecuencias('anana').patronRepetido).toBe("na")
  })
  
})
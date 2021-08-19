import { resolverSecuencias } from '../services'

describe('Eliminar secuencias repetidas y retornar otra secuencia de esas repeticiones', () => {
  test('La secuencia resultante no debe incluir los patrones repetidos', () => {
    expect(resolverSecuencias('malayalam').palindromo.secSinRepetidos).toBe('mym')
    expect(resolverSecuencias('rotomotor').palindromo.secSinRepetidos).toBe('rmr')
  })

  test('La secuencia resultante puede variar en cantidad de caracteres, incluso tener un caracter solo', () => {
    expect(resolverSecuencias('anana').palindromo.secSinRepetidos).toBe('a')
  })

  test('Se evalua la cantidad de veces que el patron fue repetido y se guarda', () => {
    expect(resolverSecuencias('anana').palindromo.cantRepeticiones).toBe(2)
    expect(resolverSecuencias('malayalam').palindromo.cantRepeticiones).toBe(2)
    expect(resolverSecuencias('rotomotor').palindromo.cantRepeticiones).toBe(2)
  })

  test('Se evaluan el patron que se repiten y se guarda', () => {
    expect(resolverSecuencias('malayalam').palindromo.patronRepetido).toBe('ala')
    expect(resolverSecuencias('rotomotor').palindromo.patronRepetido).toBe('oto')
    expect(resolverSecuencias('anana').palindromo.patronRepetido).toBe('na')
  })

  test('Aunque la palabra no exista la logica debe seguir el mismo patron', () => {
    expect(resolverSecuencias('ananana').palindromo.secSinRepetidos).toBe('a')
    expect(resolverSecuencias('ananana').palindromo.patronRepetido).toBe('na')
    expect(resolverSecuencias('ananana').palindromo.cantRepeticiones).toBe(3)
  })
})

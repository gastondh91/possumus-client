import { checkPalindromo, resolverSecuencias } from '../services'

describe('Eliminar secuencias repetidas y retornar otra secuencia de esas repeticiones', () => {
  
  test('El parametro debe ser palindromo', ()=> {
    expect(checkPalindromo('malayalam')).toBe('malayalam')
    expect(checkPalindromo('rotomotor')).toBe('rotomotor')
    expect(checkPalindromo('anana')).toBe('anana')
  })

  test('La palabra resultante tiene que ser una secuencia que no incluya los patrones repetidos', () => {
    expect(resolverSecuencias('malayalam')).toBe('mym')
    expect(resolverSecuencias('rotomotor')).toBe('rmr')
  })

  test('La palabra resultante puede variar en cantidad de caracteres', () => {
    expect(resolverSecuencias('anana')).toBe('a')
  })
})
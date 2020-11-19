import { checkPalindromo, resolverSecuencias } from '../services'

describe('Eliminar secuencias repetidas y retornar otra secuencia de esas repeticiones', () => {
  
  test('El parametro debe ser palindromo', ()=> {
    expect(checkPalindromo('malayalam')).toBe('malayalam')
    expect(checkPalindromo('rotomotor')).toBe('rotomotor')
    expect(checkPalindromo('anana')).toBe('anana')
  })

  test('La secuencia resultante no debe incluir los patrones repetidos', () => {
    expect(resolverSecuencias('malayalam').secSinRepetidos).toBe('mym')
    expect(resolverSecuencias('rotomotor').secSinRepetidos).toBe('rmr')
  })

  test('La secuencia resultante puede variar en cantidad de caracteres, incluso tener un caracter solo', () => {
    expect(resolverSecuencias('anana').secSinRepetidos).toBe('a')
  })

  test('Se evalua la cantidad de veces que el patron fue repetido y se guarda', () => {
    expect(resolverSecuencias('anana').cantRepeticiones).toBe(2)
    expect(resolverSecuencias('malayalam').cantRepeticiones).toBe(2)
    expect(resolverSecuencias('rotomotor').cantRepeticiones).toBe(2)
  })

  test('Se evaluan el patron que se repiten y se guarda',() => {
    expect(resolverSecuencias('malayalam').patronRepetido).toBe("ala")
    expect(resolverSecuencias('rotomotor').patronRepetido).toBe('oto')
    expect(resolverSecuencias('anana').patronRepetido).toBe("na")
  })

  test('Aunque la palabra no exista la logica debe seguir el mismo patron', () => {
    expect(resolverSecuencias('ananana').secSinRepetidos).toBe('a')
    expect(resolverSecuencias('ananana').patronRepetido).toBe('na')
    expect(resolverSecuencias('ananana').cantRepeticiones).toBe(3)
  })
  
})
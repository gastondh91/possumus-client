import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

interface response {
  palindromo: {
    secSinRepetidos: string
    patronRepetido: string
    cantRepeticiones: number
  }
  error: string | null
}

const Form = () => {
  let [word, setWord] = useState('')
  let [backgroundClass, setBackgroundClass] = useState('')
  let [wordSequence, setwordSequence] = useState({
    secSinRepetidos: '',
    patronRepetido: '',
    cantRepeticiones: 0
  })

  useEffect(() => {
    const charSequence = async (): Promise<response> => {
      try {
        const { data: resultado }: { data: response } = await axios.post(
          'http://localhost:3001/api/charSequence',
          { palabra: word }
        )

        if (resultado.error) {
          setBackgroundClass('red')
          setwordSequence({ secSinRepetidos: '', patronRepetido: '', cantRepeticiones: 0 })
        } else {
          setwordSequence(resultado.palindromo)
          setBackgroundClass('white')
        }
        return resultado
      } catch (err) {
        throw new Error('Hubo un error inesperado')
      }
    }
    const timeoutId = setTimeout(async () => {
      if (word.length > 2) {
        await charSequence()
      }
    }, 500)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [word])

  const handleWord = () => {
    const wordArray: string[] = word.split('')

    const arraySec = [...wordSequence.secSinRepetidos]

    if (wordSequence.patronRepetido) {
      let repeticiones = new Array(wordSequence.cantRepeticiones)
      repeticiones = [...repeticiones]
      repeticiones = repeticiones.map((elem) => (elem = wordSequence.patronRepetido))

      let arrayFinal: string[] = []

      arraySec.forEach((elem, i) => {
        if (i !== arraySec.length - 1) {
          arrayFinal.push(elem, repeticiones[0])
          repeticiones.pop()
        } else {
          switch (repeticiones.length) {
            case 0:
              arrayFinal.push(elem)
              break
            default:
              arrayFinal.push(elem)
              arrayFinal = arrayFinal.concat(repeticiones)
          }
        }
      })

      return arrayFinal.map((elem: string, i: number) => {
        if (elem === wordSequence.patronRepetido) {
          return (
            <b className="red-label" key={i}>
              {elem}
            </b>
          )
        }
        return <b key={i}>{elem}</b>
      })
    }
    return wordArray.map((elem, i) => <b key={i}>{elem}</b>)
  }

  return (
    <div>
      <section className="section-form">
        <form className="form">
          <input
            placeholder="Ingrese una palabra"
            onChange={(e) => setWord(e.target.value)}
            className="input"
            type="text"
          />
          <label className={backgroundClass} htmlFor=".input">
            {handleWord()}
          </label>
        </form>
      </section>
    </div>
  )
}

export default Form

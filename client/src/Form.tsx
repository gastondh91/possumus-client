import React, { useState } from 'react';
import axios from 'axios'


const Form = () => {
  
  let [word, setWord] = useState('')
  let [backgroundClass, setBackgroundClass] = useState('')
  let [wordSequence, setwordSequence] = useState({ secSinRepetidos: '', patronRepetido: '',cantRepeticiones: '' })

  const handleChange = async (e: any) => {
    const input = e.target.value

      try {
        const charSequence = (await axios.post('http://localhost:3001/api/charSequence',{ palabra: input })).data
        setwordSequence(charSequence.resultado)
        setBackgroundClass('white')
      } catch(err) {
        setBackgroundClass('red')
        setwordSequence({ secSinRepetidos: '', patronRepetido: '', cantRepeticiones: '' })
      }
    setWord(input)
  }

  const handleWord = () => {
    const wordArray: string[] = word.split('')

    const arraySec = [...wordSequence.secSinRepetidos]

    if(wordSequence.patronRepetido){

      let repeticiones = new Array(wordSequence.cantRepeticiones)
      repeticiones = [...repeticiones]
      repeticiones = repeticiones.map(elem => elem = wordSequence.patronRepetido)

      let arrayFinal: string[] = []

      arraySec.forEach((elem, i) => {
        if(i !== arraySec.length - 1){
          arrayFinal.push(elem, repeticiones[0])
          repeticiones.pop()
        } else {
          switch(repeticiones.length){
            case 0 :
              arrayFinal.push(elem)
              break;
            default:
              arrayFinal.push(elem)
              arrayFinal = arrayFinal.concat(repeticiones)
          }
        }
      })

      return arrayFinal.map((elem: string, i: number) => {
      
        if(elem === wordSequence.patronRepetido){
          return <b className="red-label" key={i} >{elem}</b>
        }
        return <b key={i} >{elem}</b>
      })
    }
    return wordArray.map((elem, i) => <b key={i}>{elem}</b>)
  }
  

  return (
    <div>
      <section className="section-form">
        <form className="form">
          <input placeholder="Ingrese una palabra" onChange={handleChange} className="input" type="text"/>
          <label className={backgroundClass} htmlFor=".input">{handleWord()}</label>
        </form>
      </section>
    </div>
  )
}

export default Form
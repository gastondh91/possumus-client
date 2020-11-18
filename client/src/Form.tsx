import React, { useState } from 'react';
import axios from 'axios'


const Form = () => {
  
  let [word, setWord] = useState('')
  let [backgroundClass, setBackgroundClass] = useState('')
  let [wordSequence, setwordSequence] = useState({})

  const handleChange = async (e: any) =>{
    const input = e.target.value

    try {
      const charSequence: CharSequence = await axios.post('http://localhost:3001/api/charSeq',{ palabra: input })
      setwordSequence(wordSequence = charSequence.resultado)
      setBackgroundClass(backgroundClass = '.white')
    } catch(err) {
        console.log(err)
        setBackgroundClass(backgroundClass = '.red')
    }

    setWord(word = input)
  }

  const handleWord = () => {
    let wordArray = word.split('')

    return wordArray.map((elem,i) => {
    
    return <b key={i} >{elem}</b>
    })
  }

  return (
    <div>
      <section className="section-form">
        <form className="form">
          <input onChange={handleChange} className="input" type="text"/>
          <label className={backgroundClass} htmlFor=".input">{handleWord()}</label>
        </form>
      </section>
    </div>    
  )
}

interface CharSequence {
  resultado: {
    palabraSinRepetidos: string, patronRepetido: string
  }
}

export default Form
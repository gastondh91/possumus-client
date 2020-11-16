import React, { useState } from 'react';
import logo from './logo.svg';

function Contador() {
  const [state, setState] = useState(0)

  return (
    <div>
    <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.tsx</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Esta es una aplicacion creada en react
  </a>
  <button onClick={()=> setState(state + 1)} id="incrementar-btn">
    incrementar
  </button>
  <button onClick={()=> setState(state - 1)} id="decrementar-btn">
    decrementar
  </button>
  <div id="value-contador">
  {state}
  </div>
    </div>    
  )
}

export default Contador
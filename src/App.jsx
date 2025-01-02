import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <h1>Calculadora de IMC</h1>
      <form className='form'>
        <label htmlFor="altura">Altura</label>
        <input type="number" id="altura" placeholder="183 cm"/>

        <label htmlFor="massa">Massa</label>
        <input type="number" id="massa" placeholder="64 kg"/>
      </form>
      <h2>Resp</h2>
    </div>
  )
}

export default App

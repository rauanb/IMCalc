import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Title from './Components/Title.jsx'
import Form from './Components/Form.jsx'
import Tabela from './Components/Tabela.jsx'
import './App.css'
import Footer from './Components/Footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='container'>
    <Title />
    <Form />
    <Tabela />
    </div>
    <Footer />
  </StrictMode>,
)

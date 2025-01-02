import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Title from './Components/Title.jsx'
import Form from './Components/Form.jsx'
import Tabela from './Components/Tabela.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Title />
    <Form />
    <Tabela />
  </StrictMode>,
)

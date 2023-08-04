import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import StateCombo from './Context/StateCombo'
import Inicio from './Components/Inicio'
import Contacto from './Components/Contacto'
function App() {


  return (
    <>

       <StateCombo>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio/>}  ></Route>
          <Route path='/productos/:productoid' element={<Inicio/>} />
          <Route path="/contacto" element={<Contacto/>}  ></Route>
        </Routes>
      </BrowserRouter>

        
       </StateCombo>
    </>
  )
}

export default App

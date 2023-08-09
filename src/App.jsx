import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import StateCombo from './Context/StateCombo'
import Inicio from './Components/Inicio'
import Contacto from './Components/Contacto'
import Login from './Components/login/Login'
import Registration from './Components/login/Registration'
import Productos from './Components/productos/Productos'
import MainCheckout from './Components/checkout/MainCheckout'
function App() {


  return (
    <>

       <StateCombo>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio/>}  ></Route>
          <Route path="/productos" element={<Productos/>} ></Route>
          <Route path="/login" element={<Login/>}  ></Route>
          <Route path="/registration" element={<Registration/>}  ></Route>
          <Route path="/contacto" element={<Contacto/>}  ></Route>
          <Route path="/checkout" element={<MainCheckout/>}  ></Route>
          
        </Routes>
      </BrowserRouter>

        
       </StateCombo>
    </>
  )
}

export default App

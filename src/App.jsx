import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import StateCombo from './Context/StateCombo'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <StateCombo>
      <Navbar/>
      <div className='bg-blue-500 p-4'>Vamos a usar React</div>
      <Footer/>
      </StateCombo>
    </>
  )
}

export default App

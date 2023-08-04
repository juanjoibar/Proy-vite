import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
function Inicio() {
  return (
    <div>

      <Navbar/>
      <div className='bg-blue-500 p-4'>Vamos a usar React</div>
      <Footer/>
    </div>
  )
}

export default Inicio
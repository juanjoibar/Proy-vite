import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Carousel from './main/Carousel'
function Inicio() {
  return (
    <div>

      <Navbar/>
      <div className='bg-blue-500 p-4 mt-20'>Vamos a usar React</div>
      <Carousel/>
      <Footer/>
    </div>
  )
}

export default Inicio
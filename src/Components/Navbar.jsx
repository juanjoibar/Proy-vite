import React, { useContext } from 'react'
import { modoContext } from '../Context/modoContext'
function Navbar({children}) {
  const {modo,cambiar,claseModo} = useContext(modoContext)
  return (
    <header className={claseModo}>
      
  <div className=" container mx-auto flex items-center justify-between">
    <a href="#" className=" text-xl font-bold">Mi Sitio de Pesca</a>
    <nav>
      <ul className="flex space-x-4">
        <li><a href="#" className=" hover:text-blue-200">Inicio</a></li>
        <li><a href="#" className=" hover:text-blue-200">Productos</a></li>
        <li><a href="#" className=" hover:text-blue-200">Contacto</a></li>
      </ul>
      <button className='btn' onClick={cambiar}>cambiar</button>
      <h3 className=''>modo: {modo}</h3>
      <h3 className=''>aca pongo texto</h3>
    </nav>
  </div>
</header>
  )
}

export default Navbar
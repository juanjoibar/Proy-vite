import React, { useContext } from 'react'
import { modoContext } from '../Context/modoContext'

function Footer() {
  const {claseModo} = useContext(modoContext)

  return (
    <div className='fixed bottom-0 w-full'>

    <div className={claseModo}>

      <p className='text-center'>Todos los derechos reservados © {new Date().getFullYear()}</p>
      
      </div>
    </div>
  )
}

export default Footer
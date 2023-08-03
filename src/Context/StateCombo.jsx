import React, {  useEffect, useState } from 'react'
import { modoContext } from './modoContext'

const  StateCombo = ({children}) => {
    const [modo,setModo]= useState('light☀')
    const [claseModo,setClaseModo] = useState('bg-gray-200 text-black py-4 w-full')
    
    const cambiar = ()=>{
      console.log('hola');
      if(modo === 'light☀')
      { setModo('dark🌜')
        setClaseModo('bg-black text-white py-4 w-full')
    }else{
      setModo('light☀')
      setClaseModo('bg-gray-100 text-black py-4 w-full')
    }
  }

  
  return (
    
      <modoContext.Provider value={{modo,cambiar,claseModo}}>
        {children}
      </modoContext.Provider>
  )
}

export default StateCombo
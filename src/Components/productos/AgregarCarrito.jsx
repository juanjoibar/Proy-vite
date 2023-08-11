import React, { useContext } from "react";
import { modoContext } from "../../Context/modoContext";


function AgregarCarrito(props) {
  const { addToCart } = useContext(modoContext);
  const { valoritem , valorid} = props;


 function agregar () 
        {
          
          console.log(valoritem);
          addToCart(valoritem)
          console.log(valorid);
          console.log('agrego al carrito');
    }
    
 
  return (
    <>
    
    <button className='rounded-full bg-slate-300' onClick={agregar } >agregar🛒</button>
    </>
  )
}

export default AgregarCarrito
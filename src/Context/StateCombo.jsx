import React, {  useEffect ,useState } from 'react'
import { modoContext } from './modoContext'

const  StateCombo = ({children}) => {
  
  /**** el context para el manejo del modo oscuro y modo claro  ***** */
  
    const initialModo = JSON.parse(localStorage.getItem('modo')) || 'light☀';
    const initialClaseModo = JSON.parse(localStorage.getItem('claseModo')) || 'bg-gray-200 text-black py-4 w-full';
    const [modo,setModo]= useState(initialModo)
    const [claseModo,setClaseModo] = useState(initialClaseModo)
    
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
  useEffect(() => {
    localStorage.setItem('modo', JSON.stringify(modo));
    localStorage.setItem('claseModo', JSON.stringify(claseModo));
  }, [modo,claseModo]);


  /**** el context para el manejo del carrito  ***** */

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      const updatedCart = cartItems.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    const updatedCart = cartItems.map((cartItem) =>
      cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    ).filter((cartItem) => cartItem.quantity > 0);
    setCartItems(updatedCart);
  };
  const clearCart = () => {
    setCartItems([]);
  };



  /**** la exportacion del context con variables y funciones  ***** */

  return (
    
      <modoContext.Provider value={{modo,cambiar,claseModo}}>
        {children}
      </modoContext.Provider>
  )
}

export default StateCombo
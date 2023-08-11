// src/components/Checkout.js
import React, { useState, useContext } from 'react';
import { modoContext } from "../../Context/modoContext";
const Checkout = ( {children}) => {

  const { cartItems ,removeFromCart,addToCart ,clearCart} = useContext(modoContext);



  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleRemoveItem = (item) => {
    clearCart(item)
    //setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const handleIncrement = (item) => {
   // setCartItems(cartItems.map(item => item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item));
    addToCart(item);
  };

  const handleDecrement = (item) => {
  // setCartItems(cartItems.map(item => item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
  console.log('se quita');
  removeFromCart(item);
    
  };

  return (
    <div className='mt-20 mb-5'>

    <div className="mt-10 mx-auto w-96 p-2 rounded-lg shadow-lg bg-white">
    <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
    <ul className="space-y-4">
      {cartItems.map(item => (
        <li key={item.id} className="flex items-center justify-between border p-2 rounded-lg">
          <div className="flex items-center">
            <p className="font-semibold mr-2">{item.title}</p>
            <img  className="object-cover w-full rounded-t-lg h-12 md:h-auto md:w-8 md:rounded-none md:rounded-l-lg" src={item.image} alt=""/>
            <button onClick={() => handleDecrement(item)} className="border border-blue-500 bg-blue-500 text-white rounded-md px-1 py-1 m-2 transition duration-500 ease select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline">-</button>
            <p className="px-2">{item.quantity}</p>
            <button onClick={() => handleIncrement(item)} className="border border-blue-500 bg-blue-500 text-white rounded-md px-1 py-1 m-2 transition duration-500 ease select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline">+</button>
          </div>
          <div>
            <p className="text-gray-500">${item.price} c/u</p>
            <button onClick={() => handleRemoveItem(item)} className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline">Eliminar</button>
          </div>
        </li>
      ))}
    </ul>
    <div className="mb-8 text-lg font-semibold">
      Total: <span className="text-blue-600">${calculateTotalPrice()}</span>
    </div>
  </div>
          </div>
  );
};

export default Checkout;

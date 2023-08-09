// src/components/Checkout.js
import React, { useState } from 'react';

const Checkout = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Producto 1', price: 10, quantity: 2 },
    { id: 2, name: 'Producto 2', price: 20, quantity: 3 },
    { id: 3, name: 'Producto 3', price: 15, quantity: 1 },
  ]);

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleRemoveItem = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const handleIncrement = (itemId) => {
    setCartItems(cartItems.map(item => item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const handleDecrement = (itemId) => {
    setCartItems(cartItems.map(item => item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
  };

  return (
    <div className='mt-20'>

    <div className="mt-10 mx-auto w-96 p-4 rounded-lg shadow-lg bg-white">
    <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
    <ul className="space-y-4">
      {cartItems.map(item => (
        <li key={item.id} className="flex items-center justify-between border p-4 rounded-lg">
          <div className="flex items-center">
            <p className="font-semibold mr-2">{item.name}</p>
            <button onClick={() => handleDecrement(item.id)} className="border border-blue-500 bg-blue-500 text-white rounded-md px-1 py-1 m-2 transition duration-500 ease select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline">-</button>
            <p className="px-2">{item.quantity}</p>
            <button onClick={() => handleIncrement(item.id)} className="border border-blue-500 bg-blue-500 text-white rounded-md px-1 py-1 m-2 transition duration-500 ease select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline">+</button>
          </div>
          <div>
            <p className="text-gray-500">${item.price} c/u</p>
            <button onClick={() => handleRemoveItem(item.id)} className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline">Eliminar</button>
          </div>
        </li>
      ))}
    </ul>
    <div className="mt-4 text-lg font-semibold">
      Total: <span className="text-blue-600">${calculateTotalPrice()}</span>
    </div>
  </div>
          </div>
  );
};

export default Checkout;

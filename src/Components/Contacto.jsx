import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'



function Contacto() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Aquí puedes agregar la lógica para enviar el formulario
    };


    return (

      <>
      <Navbar/>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">Contacto</h2>
        <div className="form-group mb-4 px-3">
          <label htmlFor="name" className="block mb-2 font-semibold">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-md py-2 px-3 w-full"
            required
          />
        </div>
        <div className="form-group mb-4 px-3">
          <label htmlFor="email" className="block mb-2 font-semibold">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-md py-2 px-3 w-full"
            required
          />
        </div>
        <div className="form-group mb-4 px-3">
          <label htmlFor="message" className="block mb-2 font-semibold">Mensaje:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border rounded-md py-2 px-3 w-full"
            required
          ></textarea>
        </div>
        <div className="form-group mb-4 px-3">

        <button className="botonContacto bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md " type="submit">
          Enviar
        </button>
        </div>
      </form>
  <Footer/>
  </>
  )
}

export default Contacto
import React, { useState, useContext } from "react";
import { modoContext } from "../Context/modoContext";
import { Link } from "react-router-dom";
function Navbar({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { modo, cambiar, claseModo } = useContext(modoContext);
  return (
    <header className={claseModo}>
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className=" text-xl font-bold">
          Mi Sitio de Pesca
        </a>
        <nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
            <button className="btn" onClick={cambiar}>
              {modo}
            </button>
              <span className=" text-lg font-semibold">Logo</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link  to='/' className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Inicio
                </Link >
                <Link  to='/' className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Productos
                </Link >
                <Link  to='/contacto' className=" hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Contacto
                </Link >
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out">
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 sm:px-3">
          <Link to='/' className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Inicio
          </Link>
          <Link to='/productos' className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Productos
          </Link>
          <Link to='/contacto' className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            Contacto
          </Link>
        </div>
      </div>
        </nav>
      </div>
   
      
    </header>
  );
}

export default Navbar;

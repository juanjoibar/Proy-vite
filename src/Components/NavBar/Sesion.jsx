import React, { useState, useContext } from "react";
import { modoContext } from ".././../Context/modoContext";



import LogOut from "../login/LogOut";
import RegisBtn from "../login/RegisBtn";

function Sesion({ children }) {
  const { modo, cambiar, claseModo, userCredential ,setUserCredential } = useContext(modoContext);
  const [isOpen, setIsOpen] = useState(false);
  const login = userCredential;
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
    <div className="relative inline-block">





      <button className="flex flex-col items-center hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
       onClick={toggleDropdown}
      >
        <span className="text-sm font-semibold">👤</span>
        <span className="text-sm font-semibold">
          {login ? login.user.email : "anonimo"}
        </span>
      </button>
      {isOpen && (
        <div className="absolute mt-2 bg-white border rounded shadow-md">
          {/* Aquí puedes agregar contenido adicional del desplegable */}
          <ul>
            <li className="bg-gray-200  hover:bg-gray-500 hover:text-white px-3 py-2 rounded-md" > <LogOut/> </li>
            <li className=" bg-gray-200  hover:bg-gray-500 hover:text-white px-3 py-2 rounded-md" >  <RegisBtn/> </li>
          </ul>
         

        </div>
      )}
    </div>
   
   
    </>
  );
}

export default Sesion;

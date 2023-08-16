import React, { useState , useContext} from "react";
import { modoContext } from "../../Context/modoContext";
import {auth} from '../../config/firebase'
import  {signInWithEmailAndPassword} from 'firebase/auth'

function FormLogin({ children }) {
  const { setUserCredential} = useContext(modoContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorlogin, setErrorLogin] = useState("");
   
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para autenticar al usuario, por ejemplo, hacer una petición a un servidor.
    console.log("Usuario:", username, "Contraseña:", password);
    // Limpia los campos después del submit.
    setUsername("");
    setPassword("");
    
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        // Signed in
        setUserCredential (userCredential);
        console.log('Ingreso');
        console.log(userCredential);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorLogin('tira error'+error);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6">Inicio de Sesión</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Usuario
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Contraseña
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Iniciar sesión
          </button>
        </div>
          <p>{errorlogin}</p>
      </form>
    </div>
  );
}

export default FormLogin;

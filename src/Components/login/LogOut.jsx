import React, { useState, useContext } from "react";
import {auth} from '../../config/firebase'
import { modoContext } from ".././../Context/modoContext";

import  {signOut} from 'firebase/auth'
function LogOut() {
    const {  userCredential ,setUserCredential } = useContext(modoContext);
    const login = userCredential;

    const logout = ()=>{
        console.log('logOut');
      
    
    
    signOut(auth).then(() => {
      // Sign-out successful.
      setUserCredential(null)
      console.log('se cerro sesion');
    }).catch((error) => {
      // An error happened.
    });
    
      }
    


  return (
    <button onClick={logout}>LogOut.</button> 
  )
}

export default LogOut
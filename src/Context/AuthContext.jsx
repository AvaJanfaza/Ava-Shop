import React, { useState } from 'react'
import { createContext } from 'react'

const AuthContext = createContext();
export default AuthContext;

export const AuthContextProvider = ({children}) => {
    const tk = localStorage.getItem("token");
    const [token , setToken] = useState(tk);
    const handleToken = (t) => {
        if (t){
            localStorage.setItem("token" , t);
        }
        else{
            localStorage.removeItem("token");
        }
        setToken(t);
    }
  return (
    <AuthContext.Provider value={{token , handleToken}}>
        {children}
    </AuthContext.Provider>
  )
;}

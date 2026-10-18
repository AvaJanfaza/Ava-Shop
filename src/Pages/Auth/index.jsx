import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'

export default function Auth() {
    const [pageType , setPageType] = useState(localStorage.getItem("pageType") || "login");
    const handlePageType = () => {
        const newType = pageType === "login" ? "register" : "login";
        setPageType(newType);
        localStorage.setItem(newType);
    }
  return (
    <>
      {pageType === "login" ? (<Login handlePageType={handlePageType}/>) : (<Register handlePageType={handlePageType}/>)}
    </>
  )
}
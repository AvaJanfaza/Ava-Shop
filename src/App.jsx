import React, { useContext } from 'react'
import { Toaster } from 'react-hot-toast'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Navigate, Route, Routes, useLocation } from 'react-router'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Favorites from './Pages/Favorites'
import Products from './Pages/Products'
import ProductDetails from './Pages/ProductDetails'
import AuthContext from './Context/AuthContext'
import Auth from './Pages/Auth'
import NotFound from './Pages/NotFound'

export default function App() {

  const {token} = useContext(AuthContext);
  const location = useLocation();
  const hideLayout = location.pathname === "/auth";
  

  return (
    <>
    {!hideLayout && <Navbar/>}
    <main className='min-h-screen bg-pink-50 px-8 py-12'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='favorites' element={token ? <Favorites/> : <Navigate to={"/auth"}/>}/>
        <Route path='auth' element={token ? <Navigate to={"/"}/> : <Auth/>}/>
        <Route path='products' element={<Products/>}/>
        <Route path='Product-details/:id/:name' element={<ProductDetails/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </main>
    {!hideLayout && <Footer/>}
    <Toaster/>
    </>
  )
}

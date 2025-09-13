import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Product from './Product'
import Home from './Home'
import Cart from './Cart'
import Contact from './Contact'

function Rout({products, setProducts, detail, view, close, setClose, cart, setCart, addtocart}) {
  return (
    <>
      <Routes>
        <Route path='/' element={
          <Home 
            detail={detail} 
            view={view} 
            close={close} 
            setClose={setClose} 
            addtocart={addtocart}
          />
        } /> 
        <Route path='/product' element={
          <Product 
            products={products} 
            setProducts={setProducts} 
            detail={detail} 
            view={view} 
            close={close} 
            setClose={setClose} 
            addtocart={addtocart}
          />
        } /> 
        <Route path='/cart' element={
          <Cart 
            cart={cart} 
            setCart={setCart}
          />
        }/>
        <Route path='/Contact' element ={<Contact/>} />
      </Routes>
    </>
  )
}

export default Rout
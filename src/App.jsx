import React, { useState } from 'react'
import Nav from './comp/Nav'
import { BrowserRouter } from 'react-router-dom'
import Rout from './comp/Rout'
import ProductDetail from './comp/productDetail'
import { Auth0Provider } from "@auth0/auth0-react";
import Footer from './comp/Footer'
import Swal from 'sweetalert2'

function App() {
  const [cart, setCart] = useState([])
  const [close, setClose] = useState(false)
  const [detail, setDetail] = useState([])
  const [products, setProducts] = useState(ProductDetail)
  
  const searchBtn = (product) => {
    const change = ProductDetail.filter((x) => {
      return x.name.toLowerCase().includes(product.toLowerCase())
    })
    setProducts(change)
  }
  
  const view = (product) => {
    setDetail([{...product}])
    setClose(true)
  }
  
  const addtocart = (product) => {
    const exist = cart.find((x) => x.id === product.id)
    
    if (exist) {
      Swal.fire({
        title: 'Product Already in Cart',
        text: 'This product is already in your shopping cart.',
        icon: 'warning',
        confirmButtonText: 'OK',
        confirmButtonColor: '#3085d6',
      })
    } else {
      setCart([...cart, {...product, quantity: 1}])
      Swal.fire({
        title: 'Added to Cart!',
        text: 'Product has been added to your cart successfully.',
        icon: 'success',
        confirmButtonText: 'Great!',
        confirmButtonColor: '#3085d6',
        timer: 2000,
        timerProgressBar: true,
      })
    }
  }

  const removeFromCart = (productId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This product will be removed from your cart.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        setCart(cart.filter(item => item.id !== productId))
        Swal.fire({
          title: 'Removed!',
          text: 'Product has been removed from your cart.',
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#3085d6',
          timer: 1500,
        })
      }
    })
  }

  const clearCart = () => {
    if (cart.length === 0) return;
    
    Swal.fire({
      title: 'Clear Entire Cart?',
      text: 'This will remove all items from your shopping cart.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, clear all!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        setCart([])
        Swal.fire({
          title: 'Cart Cleared!',
          text: 'All items have been removed from your cart.',
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#3085d6',
          timer: 1500,
        })
      }
    })
  }
  
  return (
    <>
      <Auth0Provider
        domain="dev-taskxgtxar4dsvfm.us.auth0.com"
        clientId="pARfZprmrJDQw94i6jLTceLmPjc1pdKD"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
        cacheLocation="localstorage"
        useRefreshTokens={true}
      >
        <BrowserRouter>
          <Nav searchBtn={searchBtn} cart={cart}/>
          <Rout 
            products={products} 
            setProducts={setProducts} 
            detail={detail} 
            view={view} 
            close={close} 
            setClose={setClose} 
            cart={cart} 
            setCart={setCart} 
            addtocart={addtocart}
            removeFromCart={removeFromCart}
            clearCart={clearCart}
          />
          <Footer/>
        </BrowserRouter>
      </Auth0Provider>
    </>
  )
}

export default App
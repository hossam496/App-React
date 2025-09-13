import React from 'react'
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FiShoppingBag } from "react-icons/fi";
import { useAuth0 } from "@auth0/auth0-react";
import './cart.css'

function Cart({ cart, setCart }) {
  
  // دالة لحساب المجموع الكلي (مصححة)
  const getTotalPrice = () => {
    if (!cart || cart.length === 0) return "0.00";
    
    const total = cart.reduce((total, item) => {
      const price = parseFloat(item.price) || 0;
      const quantity = parseInt(item.quantity) || 1;
      return total + (price * quantity);
    }, 0);
    
    return total.toFixed(2);
  };

  // دالة لزيادة كمية المنتج
  const increaseQuantity = (id) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
    ));
  };

  // دالة لتقليل كمية المنتج
  const decreaseQuantity = (id) => {
    setCart(cart.map(item => 
      item.id === id && (item.quantity || 1) > 1 
        ? { ...item, quantity: item.quantity - 1 } 
        : item
    ));
  };

  // دالة لحذف المنتج من العربة
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // حساب المجموع الكلي مع الضرائب
  const subtotal = parseFloat(getTotalPrice()) || 0;
  const tax = (subtotal * 0.1).toFixed(2);
  const total = (subtotal + parseFloat(tax)).toFixed(2);

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-header">
          <h1>Shopping Cart</h1>
          <p>{cart.length} {cart.length === 1 ? 'item' : 'items'} in your cart</p>
        </div>
        
        {cart.length === 0 ? (
          <div className="emptyCart">
            <div className="empty-icon">
              <FiShoppingBag />
            </div>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added anything to your cart yet.</p>
            <Link to='/product' className="continue-shopping-btn">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              {cart.map((value) => {
                const quantity = value.quantity || 1;
                const price = parseFloat(value.price) || 0;
                const itemTotal = (price * quantity).toFixed(2);
                
                return (
                  <div className="cart_item" key={value.id}>
                    <div className="img_box">
                      <img src={value.image} alt={value.name} />
                    </div>
                    <div className="detail">
                      <h3 className="product-name">{value.name}</h3>
                      <p className="product-desc">{value.desc}</p>
                      <p className="product-price">${price.toFixed(2)}</p>
                      
                      <div className="quantity-controls">
                        <button 
                          className="quantity-btn" 
                          onClick={() => decreaseQuantity(value.id)}
                          disabled={quantity <= 1}
                        >
                          -
                        </button>
                        <span className="quantity">{quantity}</span>
                        <button 
                          className="quantity-btn" 
                          onClick={() => increaseQuantity(value.id)}
                        >
                          +
                        </button>
                      </div>
                      
                      <div className="item-total">
                        Total: ${itemTotal}
                      </div>
                    </div>
                    <button 
                      className="remove-btn" 
                      onClick={() => removeFromCart(value.id)}
                      title="Remove from cart"
                    >
                      <IoMdClose />
                    </button>
                  </div>
                )
              })}
            </div>
            
            <div className="cart-summary">
              <div className="summary-card">
                <h3>Order Summary</h3>
                
                <div className="summary-item">
                  <span>Subtotal ({cart.length} items)</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                
                <div className="summary-item">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                
                <div className="summary-item">
                  <span>Tax</span>
                  <span>${tax}</span>
                </div>
                
                <div className="divider"></div>
                
                <div className="summary-total">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
                
                <button className="checkout-btn">
                  Proceed to Checkout
                </button>
                
                <Link to='/product' className="continue-shopping-link">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
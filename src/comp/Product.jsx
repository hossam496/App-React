import React, { useState } from 'react'
import ProductDetail from './productDetail'
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useAuth0 } from "@auth0/auth0-react";
import './Product.css'

function Product({ products, setProducts, detail, view, close, setClose, addtocart }) {

  const { loginWithRedirect , isAuthenticated } = useAuth0();
  const [activeCategory, setActiveCategory] = useState("AllProducts");

  const filterProduct = (category) => {
    setActiveCategory(category);
    if (category === "AllProducts") {
      setProducts(ProductDetail);
      return;
    }

    const updatedProducts = ProductDetail.filter((product) => {
      return product.name === category;
    })
    setProducts(updatedProducts);
  }

  const AllProducts = () => {
    setActiveCategory("AllProducts");
    setProducts(ProductDetail);
  }

  const handleAddToCart = (product) => {
    console.log("Adding to cart:", product);
    addtocart(product);
  }

  return (
    <>
      {
        close ?
          <div className="Product_detail">
            <div className="container">
              <button className="close_btn" onClick={() => setClose(false)}><IoMdClose /></button>
              {detail && detail.map((value) => (
                <div className="Productbox" key={value.id}>
                  <div className="img_box">
                    <img src={value.image} alt={value.desc} />
                  </div>
                  <div className="detail">
                    <h4>{value.name}</h4>
                    <h2>{value.desc}</h2>
                    <p>${value.price}</p>
                    <div className="action_buttons">
                      <button className="add_cart_btn" onClick={() => handleAddToCart(value)}>
                        <IoCartOutline /> Add To Cart
                      </button>
                      <button className="wishlist_btn"><FaRegHeart /> Add to Wishlist</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div> : null
      }

      <div className="Product">
        <div className="breadcrumb">
          <h2># Products</h2>
          <p>Home . Products</p>
        </div>
        <div className="container">
          <div className="filter">
            <div className="categories">
              <h3>Categories</h3>
              <ul>
                <li 
                  className={activeCategory === "AllProducts" ? "active" : ""} 
                  onClick={() => AllProducts()}
                >
                  All Products
                </li>
                <li 
                  className={activeCategory === "Apple TV 4K" ? "active" : ""} 
                  onClick={() => filterProduct("Apple TV 4K")}
                >
                  Apple TV 4K
                </li>
                <li 
                  className={activeCategory === "iPhone 16e" ? "active" : ""} 
                  onClick={() => filterProduct("iPhone 16e")}
                >
                  iPhone 16e
                </li>
                <li 
                  className={activeCategory === "iPhone 15" ? "active" : ""} 
                  onClick={() => filterProduct("iPhone 15")}
                >
                  iPhone 15
                </li>
                <li 
                  className={activeCategory === "iPad Air" ? "active" : ""} 
                  onClick={() => filterProduct("iPad Air")}
                >
                  iPad Air
                </li>
                <li 
                  className={activeCategory === "Apple Watch Ultra 2" ? "active" : ""} 
                  onClick={() => filterProduct("Apple Watch Ultra 2")}
                >
                  Apple Watch Ultra 2
                </li>
                <li 
                  className={activeCategory === "MacBook Air 13" ? "active" : ""} 
                  onClick={() => filterProduct("MacBook Air 13")}
                >
                  MacBook Air 13
                </li>
                <li 
                  className={activeCategory === "AirPods 4" ? "active" : ""} 
                  onClick={() => filterProduct("AirPods 4")}
                >
                  AirPods 4
                </li>
              </ul>
            </div>
          </div>

          <div className="Productbox">
            <div className="content">
              {products && products.length > 0 ? (
                products.map((value) => (
                  <div className="box" key={value.id}>
                    <div className="img_box">
                      <img src={value.image} alt={value.desc} />
                      <div className="icon">
                        {
                          isAuthenticated?
                          <li title="Add to Cart" onClick={() => handleAddToCart(value)}><IoCartOutline /></li>
                          :
                          <li title="Add to Cart" onClick={() => loginWithRedirect()}><IoCartOutline /></li>
                        }
                        
                        <li title="Quick View" onClick={() => view(value)}>
                          <IoEye />
                        </li>
                        <li title="Add to Wishlist">
                          <FaRegHeart />
                        </li>
                      </div>
                    </div>
                    <div className="detail">
                      <p>{value.desc}</p>
                      <h3>{value.name}</h3>
                      <h4>${value.price}</h4>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-products">
                  <h3>No products found</h3>
                  <p>Try selecting a different category</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
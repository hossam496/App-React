import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from "react-icons/bs";
import { FiTruck } from "react-icons/fi";
import { BiDollar } from "react-icons/bi";
import { CiPercent } from "react-icons/ci";
import { FaHeadphones } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import './home.css'
import HomeProduct from './HomeProduct';

const logo = "/logo.png";

function Home({detail , view , close , setClose, addtocart}) {
  
  const handleAddToCart = (product) => {
    addtocart(product);
  }

  return (
    
    <>
        {
          close ?
                <div className="Product_detail">
            <div className="container">
              <button className="close_btn" onClick={ () => setClose(false)}><IoMdClose /></button>
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
    
      <div className='top_panner'>
        <div className='container'>
            <div className='detail'>
                <h2>The Best Note Book Collection 2025</h2>
                <p>Discover premium quality notebooks for your ideas, thoughts, and creativity.</p>
                <Link to='/product' className='link'>Shop Now <BsArrowRight /></Link>
            </div>
            <div className='img_box'>
                <img src={logo} alt="Logo" />
            </div>
        </div>
      </div>
      
      <div className='product_type'>
        <div className='container'>
            <div className='box'>
                <div className='img_box'>
                    <img src="https://www.apple.com/mideast/buy/images/products/tv/apple_4k_ethernet__dbqrjd7wvsuq_large.jpg" alt="Product" />
                </div>
                <div className='detail'>
                    <p>23 products</p>
                </div>
            </div>

            <div className='box'>
                <div className='img_box'>
                    <img src="https://www.apple.com/v/iphone/home/cb/images/overview/select/iphone_16pro__erw9alves2qa_large.png" alt="Product" />
                </div>
                <div className='detail'>
                    <p>23 products</p>
                </div>
            </div>
            
            <div className='box'>
                <div className='img_box'>
                    <img src="https://www.apple.com/v/iphone/home/cb/images/overview/select/iphone_16e__cubm3xoy5qaa_large.png" alt="Product" />
                </div>
                <div className='detail'>
                    <p>23 products</p>
                </div>
            </div>
            
            <div className='box'>
                <div className='img_box'>
                    <img src="https://www.apple.com/v/iphone/home/cb/images/overview/select/iphone_15__buwagff0mwwi_large.png" alt="Product" />
                </div>
                <div className='detail'>
                    <p>23 products</p>
                </div>
            </div>
            
            <div className='box'>
                <div className='img_box'>
                    <img src="https://www.apple.com/v/iphone/home/cb/images/overview/select/iphone_16__c5bvots96jee_large.png" alt="Product" />
                </div>
                <div className='detail'>
                    <p>23 products</p>
                </div>
            </div>
        </div>
      </div>
      
      <div className='about'>
        <div className="container">
            <div className="box">
                <div className="icon">
                    <FiTruck />
                </div>
                <div className="detail">
                    <h3>Free Shipping</h3>
                    <p>Order above $1000</p>
                </div>
            </div>
            
            <div className="box">
                <div className="icon">
                    <BiDollar />
                </div>
                <div className="detail">
                    <h3>Return & Refund</h3>
                    <p>Money Back Guarantee</p>
                </div>
            </div>
            
            <div className="box">
                <div className="icon">
                    <CiPercent />
                </div>
                <div className="detail">
                    <h3>Member Discount</h3>
                    <p>On every Order</p>
                </div>
            </div>
            
            <div className="box">
                <div className="icon">
                    <FaHeadphones />
                </div>
                <div className="detail">
                    <h3>Customer Support</h3>
                    <p>Every Time Call Support</p>
                </div>
            </div>
        </div>
      </div>
      
      <div className="product">
        <div className="container">
          {HomeProduct && HomeProduct.map((value) => {
            return (
              <div className="box" key={value.id}>
                <div className="img_box">
                  <img src={value.image} alt={value.desc} />
                  <div className="icon">
                    <li title="Add to Cart" onClick={() => handleAddToCart(value)}>
                      <IoCartOutline />
                    </li>
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
            )
          })}
        </div>
      </div>
      
      <div className="banner">
        <div className="container">
          <div className="detail">
            <h4>LATEST TECHNOLOGY ADDED</h4>
            <h3>Latest iPhone. Greatest price.</h3>
            <p><BiDollar/>764</p>
            <Link to='/product' className='link'>Shop Now <BsArrowRight/></Link>
          </div>
          <div className="img_box">
            <img src="https://www.apple.com/v/iphone/home/cb/images/overview/select/iphone_16__c5bvots96jee_large.png" alt="iPhone" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
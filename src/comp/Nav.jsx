// Nav.jsx
import React, { useState } from 'react'
import { FaTruckMoving } from 'react-icons/fa';
import { FaRegHeart } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { IoLogInOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import './Nav.css'

function Nav({searchBtn}) {
    const [Search , setSearch] = useState()
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
    
    return (
        <>
            <div className='free'>
                <div className='icon'>
                    <FaTruckMoving/>
                </div>
                <p>FREE shipping when shopping up to $1000</p>
            </div>
            
            <div className='main_header'>
                <div className='container'>
                    <div className='logo'>
                        <img src='/logo.png' alt="Logo" /> {/* تصحيح مسار الصورة */}
                    </div>
                    
                    <div className='search_box'>
                        <input type="text" value={Search} placeholder='Search Your Product...' autoComplete='off' onChange={(e) => setSearch(e.target.value)}/>
                        <button onClick={() => searchBtn(Search)} >Search</button>
                    </div>
                    <div className='main_header_icons'>
                        {isAuthenticated && (
                            <div className='account'>
                                <div className='user_icon'>
                                    <FaRegUser/>
                                </div>
                                <p>Hello, {user?.name}</p> {/* إضافة ? للتحقق من وجود user */}
                            </div>
                        )}
                        
                        <div className='second_icon'>
                            <Link to="/wishlist" className='link' title="Wishlist">
                                <FaRegHeart />
                            </Link>
                            <Link to="/cart" className='link' title="Cart">
                                <IoBagCheckOutline/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='header'>
                <div className='container'>
                    <div className='nav'>
                        <ul>
                            <li>
                                <Link to='/' className='link'>Home</Link>
                            </li>
                            <li>
                                <Link to='/product' className='link'>Products</Link> {/* تغيير إلى حروف صغيرة */}
                            </li>
                            <li>
                                <Link to='/about' className='link'>About</Link>
                            </li>
                            <li>
                                <Link to='/contact' className='link'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    
                    <div className='auth'>
                        {isAuthenticated ? (
                            <button 
                                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} 
                                title="Logout"
                            >
                                <CiLogout />
                            </button>
                        ) : (
                            <button 
                                onClick={() => loginWithRedirect()} 
                                title="Login"
                            >
                                <IoLogInOutline />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav
import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import './footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="logo">
              <img src="/logo.png" alt="Company Logo" />
              <p>Your trusted partner for quality products and exceptional service.</p>
            </div>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaTwitter />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/product">Products</Link></li>
              <li><Link to="/cart">Cart</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Categories</h3>
            <ul className="footer-links">
              <li><Link to="/product">Apple TV 4K</Link></li>
              <li><Link to="/product">iPhone</Link></li>
              <li><Link to="/product">iPad</Link></li>
              <li><Link to="/product">Apple Watch</Link></li>
              <li><Link to="/product">MacBook</Link></li>
              <li><Link to="/product">AirPods</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>123 Apple Street, Cupertino, CA 95014</span>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span>+1 (800) 275-2273</span>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>support@apple-store.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="copyright">
            <p>&copy; 2024 Apple Store. All rights reserved.</p>
            <div className="legal-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/returns">Returns Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
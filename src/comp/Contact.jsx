import React, { useState } from 'react'
import Swal from 'sweetalert2'
import './contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // التحقق من الحقول المطلوبة
    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire({
        title: 'Missing Information',
        text: 'Please fill in all required fields (Name, Email, Message)',
        icon: 'warning',
        confirmButtonText: 'OK',
        confirmButtonColor: '#3085d6',
      })
      return
    }

    // التحقق من صحة البريد الإلكتروني
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      Swal.fire({
        title: 'Invalid Email',
        text: 'Please enter a valid email address',
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: '#3085d6',
      })
      return
    }

    // حفظ البيانات في localStorage
    const contacts = JSON.parse(localStorage.getItem('contactFormSubmissions')) || []
    const newSubmission = {
      ...formData,
      id: Date.now(),
      timestamp: new Date().toISOString()
    }
    
    contacts.push(newSubmission)
    localStorage.setItem('contactFormSubmissions', JSON.stringify(contacts))

    // عرض رسالة النجاح
    Swal.fire({
      title: 'Message Sent Successfully!',
      text: 'Thank you for contacting us. We will get back to you soon.',
      icon: 'success',
      confirmButtonText: 'Great!',
      confirmButtonColor: '#3085d6',
    })

    // إعادة تعيين الفورم
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  const senddata = async (e) => {
    const { name, email, phone, subject, message} = formData
    e.preventDefault();
    const option ={
        method : 'POST',
        headers : {
            'content-type' : 'application/json'
        },
        body : JSON.stringify({
             name, email, phone, subject, message
        })
    }
    const res = await fetch('https://e-commerce-contact-34620-default-rtdb.firebaseio.com/Message.json' , option)
    if (res){
        alert("your message has been sent")
    }
    else {
        alert("An error has occurred")
    }
  }

  return (
    <>
      <div className="contact_container">
        <div className="contact">
          <div className="contact_header">
            <h1>Contact Us</h1>
            <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          </div>
          
          <div className="contact_content">
            <div className="contact_info">
              <div className="info_card">
                <div className="info_icon">📍</div>
                <h3>Our Location</h3>
                <p>123 Tech Street, Digital City</p>
                <p>Tech Valley, TV 12345</p>
              </div>
              
              <div className="info_card">
                <div className="info_icon">📧</div>
                <h3>Email Us</h3>
                <p>support@techstore.com</p>
                <p>info@techstore.com</p>
              </div>
              
              <div className="info_card">
                <div className="info_icon">📞</div>
                <h3>Call Us</h3>
                <p>+1 (555) 123-4567</p>
                <p>+1 (555) 987-6543</p>
              </div>
              
              <div className="info_card">
                <div className="info_icon">🕒</div>
                <h3>Business Hours</h3>
                <p>Monday - Friday: 9AM - 6PM</p>
                <p>Saturday: 10AM - 4PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div className="form_container">
              <form className="contact_form" onSubmit={handleSubmit}>
                <div className="form_row">
                  <div className="form_group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div className="form_group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                </div>

                <div className="form_row">
                  <div className="form_group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div className="form_group">
                    <label htmlFor="subject">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="technical">Technical Support</option>
                      <option value="billing">Billing Question</option>
                      <option value="product">Product Information</option>
                      <option value="complaint">Complaint</option>
                      <option value="suggestion">Suggestion</option>
                    </select>
                  </div>
                </div>

                <div className="form_group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit_btn" onClick={senddata}>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact

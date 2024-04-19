import React from 'react'
import "./contact.css"

const ContactUs = () => {
  return (
    <div>
      <form className="contact-form">
        <div className="input-group">
          <input type="text" id="firstname" name="firstname" placeholder="First Name" required />
          <input type="text" id="lastname" name="lastname" placeholder="Last Name" />
        </div>
        <input type="email" id="email" name="email" placeholder="Email Address" required />
        <div className="phone-group">
          <select name="countrycode" id="countrycode" required>
            <option value="">Country Code</option>
            {/* Add options for country codes */}
          </select>
          <input type="tel" id="phonenumber" name="phonenumber" placeholder="Phone Number" required />
        </div>
        <textarea id="message" name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
    </form>

    </div>
  )
}

export default ContactUs
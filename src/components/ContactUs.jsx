import React, { useState } from 'react';
import axios from 'axios';
import "./contact.css";
import { Render } from './Footer';
import { OWNER_DETAILS } from './data/data';
import { COUNTARY_CODE } from './data/countrycode';

const BASE_URL="https://irshadinteriors.onrender.com/";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    countrycode: '',
    phonenumber: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    
    try {
      await axios.post(`${BASE_URL}/contact`, formData);
      alert('Message sent successfully!');
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        countrycode: '',
        phonenumber: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error.message);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className='w-screen p-10 flex flex-col items-center md:items-start md:flex-row lg:justify-center gap-10'>
      {/* Contact Info Section */}
      <div className='flex text-lg flex-col gap-6 items-center'>
        <p className='text-2xl font-bold'>Contact Info</p>
        <div className='flex flex-col gap-4 translate-x-9 md:translate-x-0'>
          {OWNER_DETAILS.map((data, index) => (
            <Render {...data} key={index} />
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <div>
        <form className="contact-form" name='contact-form' onSubmit={handleSubmit}>
        <div className="input-group">
            <input type="text"  name="firstname" placeholder="First Name" value={formData.firstname} required onChange={handleChange}/>
            <input type="text"  name="lastname" value={formData.lastname} placeholder="Last Name" onChange={handleChange}/>
          </div>
          <input type="email" name="email" placeholder="Email Address" value={formData.email} required onChange={handleChange} />
          <div className="phone-group">
            <select name="countrycode"  required value={formData.countrycode} onChange={handleChange}>
              <option value="">Country Code</option>
              {COUNTARY_CODE.map((data, index)=>(
                <option key={index}>
                  <span>{data.country}</span>
                  <span> {data.code}</span>
                </option>
              ))}
            </select>
            <input type="tel"  name="phonenumber" placeholder="Phone Number" value={formData.phonenumber} required onChange={handleChange} />
          </div>
          <textarea  name="message" placeholder="Your Message" required value={formData.message} onChange={handleChange}></textarea>
          <button className='lg:w-[25%]' type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

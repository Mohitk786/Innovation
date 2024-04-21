import React from 'react'
import "./contact.css"
import { Render } from './Footer'
import { OWNER_DETAILS } from './data/data'
import { COUNTARY_CODE } from './data/countrycode'

const ContactUs = () => {
  return (
    <div className='w-screen  p-10 flex flex-col items-center md:items-start md:flex-row lg:justify-center gap-10'>
      <div className='flex text-lg flex-col gap-6 items-center'>
        <p className='text-2xl font-bold'>Contact Info</p>
        <div className='flex  flex-col items-center md:items-start gap-6 mb-8 lg:mb-0'>
            <p className='font-semibold text-xl'>About <span className='text-indigo-500'>Irshad Interiors</span></p>
            <div className='flex flex-col gap-4 translate-x-9 md:translate-x-0'>
              {OWNER_DETAILS.map((data, index) => (
                <Render {...data} key={index} />
              ))}
            </div>
          </div>
      </div>

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
              {COUNTARY_CODE.map((data, index)=>(
                <option key={index}>
                  <span>{data.country}</span>
                  <span> {data.code}</span>
                </option>
              ))}
            </select>
            <input type="tel" id="phonenumber" name="phonenumber" placeholder="Phone Number" required />
          </div>
          <textarea id="message" name="message" placeholder="Your Message" required></textarea>
          <button className='lg:w-[25%] ' type="submit">Send Message</button>
        </form>
      </div>

    </div>
  )
}

export default ContactUs
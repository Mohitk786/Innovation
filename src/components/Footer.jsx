import React from 'react'
import * as Icons from "react-icons/fa";
import { OWNER_DETAILS, EXPLORE_LINK } from './data/data';
import { Link } from 'react-router-dom';
import Map from './Map';

export const Render =({iconName, name, path})=>{
    let Icon;
    if(iconName)Icon=Icons[iconName];
    return (
        <div className='flex gap-4 items-center'>
            {Icon && <div className='bg-indigo-500 p-1 rounded-full flex items-center justify-center'><Icon className="text-xl text-white"/></div>}
            {path ? <Link to={path}>{name}</Link>:<p>{name}</p>}
        </div>
    )
}

const Footer = () => {
    return (
      <div 
        style={{ backgroundImage: "url('/assets/4.jpeg')", backgroundSize: 'cover' }}
        className=' text-white  opacity-90'>
        <div className='bg-black opacity-90 w-screen flex flex-col items-start px-4  lg:flex-row justify-around lg:mx-auto py-8 lg:py-16 '>
          {/* About Section */}
          <div className='flex flex-col gap-6 mb-8 lg:mb-0'>
            <p className='font-semibold text-2xl'>About <span className='text-indigo-500'>Irshad Interiors</span></p>
            <div className='flex flex-col gap-4'>
              {OWNER_DETAILS.map((data, index) => (
                <Render {...data} key={index} />
              ))}
            </div>
          </div>
  
          {/* Explore Links Section */}
          <div className='flex flex-col gap-6 mb-8 lg:mb-0'>
            <p className='font-semibold text-2xl'>Explore Links</p>
            <div className='flex flex-col gap-4'>
              {EXPLORE_LINK.map((link, index) => (
                <Render {...link} key={index} />
              ))}
            </div>
          </div>
  
          {/* Contact Section */}
          <div className='flex flex-col gap-6'>
            <p className='font-semibold text-2xl'>We're here</p>
             <Map/>
          </div>
        </div>

        <footer className="h-full bg-indigo-500 p-2">
          <div className="flex justify-center items-center">
            <p className='text-white text-center'>© Copyright 2024 Irshad Interiors All Rights Reserved! Designed & Developed by Mohit Kumar</p>
          </div>
        </footer>
      </div>
    );
  };
  

export default Footer
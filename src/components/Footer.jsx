import React from 'react'
import * as Icons from "react-icons/fa";
import { OWNER_DETAILS, EXPLORE_LINK } from './data/data';
import { Link } from 'react-router-dom';

const Render =({iconName, name, path})=>{
    let Icon;
    if(iconName)Icon=Icons[iconName];
    return (
        <div className='flex gap-4 items-center'>
            {Icon && <Icon className="text-lg"/>}
            {path ? <Link to={path}>{name}</Link>:<p>{name}</p>}
        </div>
    )
}

const Footer = () => {
    return (
      <div className='bg-black text-white opacity-90'>
        <div className='flex flex-col items-start ml-8 lg:flex-row justify-around lg:mx-auto py-8 lg:py-16 max-w-7xl'>
          {/* About Section */}
          <div className='flex flex-col gap-6 mb-8 lg:mb-0'>
            <p className='font-semibold text-2xl'>About Sun Shades Solution</p>
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
            {/* Add contact details here */}
          </div>
        </div>
      </div>
    );
  };
  

export default Footer
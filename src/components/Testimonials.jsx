import React from 'react';
import { OWNER_DETAILS, OUR_WORK } from './data/data';

const OurWork = ({ imageUrl, description, flag }) => {
    return (
    <div className={`flex flex-col  lg:flex-row ${flag===1 ? " ":"flex-col-reverse lg:flex-row-reverse"} gap-6 lg:gap-0 w-full lg:w-[80%]` }>
      <div className={`lg:w-[50%] flex justify-center ${flag===1?"lg:flex lg:justify-center":""}`}>
        <img 
            src={`/assets/${imageUrl}`} 
            alt='work' 
            width={'80%'}
            height={'80%'}
            className='border-8 border-white'        
            />
      </div>
      <div className={`lg:w-[50%] flex items-center lg:items-start flex-col ${flag===2 && "lg:items-center"} gap-4`}>
        {flag===1 && <p className='text-3xl'>What we Do ?</p>}
        <p className='w-[80%] leading-8 '>{description}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div  className=' flex flex-col items-center justify-center '>
      
      <div className='  text-white w-screen  text-center flex flex-col lg:items-center pb-6 gap-5'>
        <p className='text-2xl font-bold'><span className='text-indigo-500'>We</span> Always Deliver More Than You Expect.</p>
        <p className='text-xl'>Get In Touch With Us Today, Share Us Your Requirements.</p>
        <p className='text-xl'>{OWNER_DETAILS[2].name.split(',')[0] + ', ' + OWNER_DETAILS[3].name}</p>
      </div>
      
      <div className='h-80 w-screen flex flex-col items-center bg-white'>
        <p className='text-black font-semibold text-3xl '>Our <span className='text-indigo-500 text-2xl'>Valuable clients</span></p>
      </div>
      <div className=' text-white w-screen flex flex-col gap-12 items-center p-8'>
        <OurWork {...OUR_WORK[0]} flag={1} />
        <OurWork {...OUR_WORK[1]} flag={2} />
      </div>
    </div>
  );
};

export default Testimonials;

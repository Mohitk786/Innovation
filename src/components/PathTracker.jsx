import React from 'react'

const PathTracker = ({pathname}) => {
    let current;
    if(pathname==='/about'){
        current="About Us"
    }else if(pathname==='/contact'){
        current="Contact Us"
    }else if(pathname==='/gallery'){
        current="Gallery"
    }

    return (
    <div className='w-screen p-14 -translate-y-5 text-white bg-black opacity-90 flex justify-center items-center'>
        <div className='flex flex-col items-center justify-center gap-3'>
            <p className='font-semibold text-3xl'>{current}</p>
            <p>Home{" "}/<span className='text-indigo-500'>{" "+current}</span></p>
        </div>

    </div>
  )
}

export default PathTracker
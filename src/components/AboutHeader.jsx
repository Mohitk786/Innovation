import React from 'react'
import {metaData} from "./data/data"

const AboutHeader = () => {
  return (
    <div className='w-full bg-slate-200'>
        <div className= 'm-2 w-[80%] flex flex-col lg:flex-row gap-10 items-center justify-between mx-auto'>
            <div className='w-full lg:w-[50%] flex flex-col gap-5 items-center justify-center'>
                <div className='p-2 flex flex-col gap-7 text-gray-800 leading-7'>
                    <p className='font-bold text-blue-600 text-3xl'>Welcome to {metaData.Organization_Name}</p>
                    <p><b>{metaData.Organization_Name} Solution </b>is a reliable <b>Service Provider</b> that is involved in providing Fabrication Service. We are a well known Proprietor firm which is incorporated in the year <strong>2016</strong> and providing reliable and well managed services across the nation and in a timely manner.</p>
                    <p>Our service range includes a wide range of Roofing Sheds <strong>Fabrication Services</strong>, Tensile Membrane Structure Car Parking Shades, UPVC Sun Shade Fabrication Service, SS Canopy Fabrication Services, PVC Garden Shed Fabrication Service and Factory Sheds Fabrication Services.</p>
                    <p>Providing you the best range of Tensile Gazebo Structure and Modular Tensile Window Sheds with effective & timely delivery.</p>
                </div>
            </div>
            <div className='lg:w-[50%] flex justify-center'>
                <img src='/assets/Name.jpeg' alt="Card" className="object-cover w-full lg:w-[80%] lg:min-w-full max-w-[80%]"/>
            </div>
        </div>
    </div>
  )
}

export default AboutHeader
import React from 'react'
import AboutHeader from './AboutHeader'
import { buisnessData } from './data'

const About = () => {
  return (
    <div className='w-full h-screen flex gap-14 bg-slate-200 flex-col'>
        <AboutHeader/>
        <div className="w-full p-5 max-w-screen-lg mx-auto">
            {buisnessData.map((data, index) => (
                <div>
                <div className='flex justify-between'>
                    <div key={index} className={`w-full py-2 pl-4 flex flex-col ${index % 2 === 0 ? 'bg-orange-100' : 'bg-orange-50'} text-black`}>
                        <p className="">{data.name}</p>
                    </div>
                    <div key={index} className= {`w-full flex items-start justify-center flex-col ${index % 2 === 0 ? 'bg-orange-100' : 'bg-orange-50'} text-black`}>
                        <p className="">{data.value}</p>
                    </div>
                </div>
                </div>

            ))}
        </div>

    </div>
  )
}

export default About
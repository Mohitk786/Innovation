import React from 'react'
import { useParams } from 'react-router-dom'

const ProjectDetails = () => {
    const {imageId} = useParams()
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center'>
        <div className='w-[80%] h-[70%] overflow-hidden flex items-center justify-center gap-14 bg-slate-200 '>
          
          <div className='w-[35%] '>
              <img src={`/assets/${imageId}.jpeg`} alt='Project' className='object-fill  max-h-full'/> 
           </div>
          
          <div className="w-[35%]">
              {/* {cardData.map((data, index) => (
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

              ))} */}
          </div>

        </div>
    </div>
  )
}

export default ProjectDetails
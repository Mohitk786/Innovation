import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
  const navigate = useNavigate();  
  return (
      <div onClick={()=>props.openSlideshow ? props.openSlideshow(props.index) : navigate('/gallery')}  className="bg-white cursor-pointer rounded-lg overflow-hidden shadow-md">
        {props?.imageUrl && <img src={`/assets/${props.imageUrl}`} alt="Card" className="object-cover w-full h-46 md:h-64 lg:h-72 hover:scale-105 duration-300" />}
       
      { props?.description && <div className="p-4">
          <p className="text-sm font-semibold text-gray-600">{props.description}</p>
        </div>
      }

      </div>
    );
  };
  

export default Card;

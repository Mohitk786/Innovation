import React, { useState } from 'react';
import { cardData } from './data/data';
import Card from './Card';
import {MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft} from 'react-icons/md'
import { RxCross1 } from "react-icons/rx";

const Gallery = () => {
  document.title="Gallery"
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openSlideshow = (index) => {
    setSelectedImageIndex(index);
  };

  const closeSlideshow = () => {
    setSelectedImageIndex(null);
  };

  const goToPreviousImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? cardData.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === cardData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='w-screen relative'>
      <div className='w-[80%] mx-auto m-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center'>
        {cardData.map((card, index) => (
          card.id && (
            <Card
              index={index}
              imageUrl={card.imageUrl}
              key={index}
              openSlideshow={openSlideshow}
            />
          )
        ))}
      </div>

      {selectedImageIndex !== null && (
        <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-80 z-50'>
            <MdOutlineKeyboardArrowLeft 
            className='text-6xl absolute cursor-pointer hover:text-indigo-300 duration-200 left-0 top-1/2 w-[5%] text-white'
            onClick={goToPreviousImage}
          />
        
          <RxCross1 
            onClick={closeSlideshow}
            className='text-4xl font-semibold absolute hover:text-red-400 duration-200 cursor-pointer right-3 top-4 w-[5%] text-white'
          />


          <img
            src={'/assets/'+cardData[selectedImageIndex].imageUrl}
            alt={`${selectedImageIndex + 1}`}
            className='max-w-full max-h-full'
          />
          <MdOutlineKeyboardArrowRight 
            className='text-6xl absolute hover:text-indigo-300 duration-200 cursor-pointer right-0 top-1/2 w-[5%] text-white'
            onClick={goToNextImage}
          />

         
        </div>
      )}
    </div>
  );
};

export default Gallery;

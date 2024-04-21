import React, { useState, useEffect, useRef } from 'react';

const Carousel = ({ cardData }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(goToNextImage, 3000);

    return () => clearTimeout(timeoutRef.current);
    // eslint-disable-next-line
  }, [currentImageIndex]);

  const goToPreviousImage = () => {
    clearTimeout(timeoutRef.current);
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? cardData.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    clearTimeout(timeoutRef.current);
    setCurrentImageIndex((prevIndex) =>
      prevIndex === cardData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      style={{ backgroundImage: "url('/assets/14.jpeg')", backgroundSize: 'cover' }}
    >
      <div className='p-8 w-screen bg-black opacity-95 lg:opacity-90 flex justify-center relative'>
        <button onClick={goToPreviousImage} className="absolute bg-transparent text-indigo-500 text-4xl cursor-pointer left-2 top-1/2 transform -translate-y-1/2 md:left-8 lg:left-2 w-[6%] lg:w-[2%]">&#10094;</button>
        <div className="flex justify-center">
          <img
            src={'/assets/' + cardData[currentImageIndex].imageUrl}
            alt={`Slide`}
            className="object-fill w-[110%] h-[300px] md:w-[1280px] md:h-[650px]"
          />
        </div>
        <button onClick={goToNextImage} className="absolute bg-transparent text-indigo-500 text-4xl cursor-pointer right-2 top-1/2 transform -translate-y-1/2 md:right-8 lg:right-2 w-[6%] lg:w-[2%]">&#10095;</button>
      </div>
    </div>
  );
};

export default Carousel;

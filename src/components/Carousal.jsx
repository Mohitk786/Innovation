import React, { useState, useEffect, useRef } from 'react';

const Carousel = ({cardData}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(goToNextImage, 6000);

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
<div className="w-screen flex justify-center relative">
    <button onClick={goToPreviousImage} className="absolute bg-transparent text-white md:text-indigo-500 text-3xl cursor-pointer left-2 lg:left-60 top-1/2 w-[4%] lg:w-[2%]">&#10094;</button>
    <div className="slideshow">
        <img
            src={'/assets/' + cardData[currentImageIndex].imageUrl}
            alt={`Slide`}
            className="object-fill md:w-[1280px] md:h-[650px]"
        />
    </div>
    <button onClick={goToNextImage} className="absolute  bg-transparent text-white md:text-indigo-500 text-3xl cursor-pointer right-2 lg:right-60 top-1/2 w-[5%]">&#10095;</button>
</div>
  );
};

export default Carousel;

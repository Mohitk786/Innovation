import React from 'react';
import { cardData, metaData } from './data/data';
import Card from './Card';
import Testimonials from './Testimonials';

export const Projects = () => {
  return (
    <div style={{ backgroundImage: "url('/assets/4.jpeg')", backgroundSize: 'cover' }}>
        <div className="bg-black bg-opacity-80 w-screen h-auto flex flex-col items-center gap-6">
          <div className="max-w-screen-xl mx-auto p-8 flex flex-col gap-6 text-center">
              <div className="text-white font-bold text-4xl tracking-tight text-center">Our Projects</div>
              <div className="text-white leading-8 text-center">{metaData.Our_Products_Description}</div>
          </div>

          <div className="w-[80%] mx-auto m-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
            {cardData.map((card, index) => (
              card.id <= 16 && <Card  id={card.id} imageUrl={card.imageUrl} key={index} />
            ))}
          </div>
        <Testimonials/>
        </div>
        <div className='w-full -translate-y- bg-white flex justify-center items-end'>
            <img src="/assets/pp.png" alt='Architecture' />
        </div>
    </div>
  );
};

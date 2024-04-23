import React from 'react';
import ReactPlayer from 'react-player';
import { cardData } from './data/data';
import AboutHeader from './AboutHeader';
import { Projects } from './Projects';
import Carousel from './Carousal';

const Home = () => {
  return (
    <div>
      <div 
        className='flex flex-col w-full items-center h-auto'>
             <div  className="w-[80%] flex flex-col gap-20 items-center  ">
          <div 
            className="flex justify-center scale-x-150 scale-y-150 items-center mt-20 md:scale-110 lg:m-10 lg:scale-100 shadow-black  shadow-2xl">
            <ReactPlayer
              loop={true}
              controls={false}
              playing={true}
              muted={true}
              width={"700"}
              height={'700'}
              url={"/assets/video.mp4"}
            /> 
          </div>
          
          <Carousel cardData={cardData}/>

        </div>

        <AboutHeader/>
      
      </div>
      <Projects/>
    </div>
  );
};

export default Home;

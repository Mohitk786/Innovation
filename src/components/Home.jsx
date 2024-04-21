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
          <div  className="w-[80%] flex flex-col gap-20 items-center ">
          <div className="min-w-full lg:max-h-[450px]  flex justify-center">
            <ReactPlayer
              loop={true}
              controls={false}
              playing={true}
              muted={true}
              width={'1350px'}
              height={'450px'}
              url={"/assets/video.mp4"}
              className="min-w-[1250px] h-[650px]"
            
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

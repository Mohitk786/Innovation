import React from 'react';
import ReactPlayer from 'react-player';
import Card from './Card';
import { cardData } from './data/data';
import AboutHeader from './AboutHeader';
import { Projects } from './Projects';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className='flex flex-col gap-16 w-full items-center h-auto'>
        <div className="w-[80%] flex flex-col gap-20 items-center ">
          
          <div className="w-full flex">
            <ReactPlayer
              loop={true}
              controls={false}
              playing={true}
              muted={true}
              url={"/assets/video.mp4"}
              className="w-full min-w-full"
            
            />
            {/* <video className="w-full h-[50%] max-h-[40%]" src="/assets/video.mp4" muted  controls></video> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
              {cardData.map((card, index) => (
                card.id <= 8 && <Card id={card.id} description={card.description} imageUrl={card.imageUrl} key={index} />
              ))}
          </div>
        </div>

        <AboutHeader/>
      
      </div>
      <Projects/>
    </div>
  );
};

export default Home;

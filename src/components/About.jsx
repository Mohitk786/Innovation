import React from 'react';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();

    return (
        <section className='w-full flex flex-col items-center justify-center gap-16'>

            <div className="w-[90%] flex flex-col md:items-center lg:justify-center gap-10 lg:flex-row ">
                <div className="w-full flex justify-center lg:w-[40%]  ">
                    <ReactPlayer
                        playing={true}
                        muted={true}
                        loop={true}
                        url="/assets/about.mp4"
                    />
                </div>
                <div className='flex lg:w-[40%] md:w-full md:justify-center  flex-col gap-5'>
                    <p className=' text-3xl font-semibold text-center '><span className='text-indigo-500 text-4xl'>We</span> provide you the best work which you dream for!</p>
                    <p className='text-black text-lg text-center '>With years of experience in the industry, we have built a reputation for delivering projects on time and within budget, without compromising on quality. From concept development to final execution, we handle every aspect of the project with precision and care, ensuring that every detail is executed to perfection. Contact us today to discuss your project needs and let us help you bring your vision to life!</p>
                    <button onClick={() => navigate("/contact")} className="text-black font-semibold w-[40%] mx-auto md:w-[20%] rounded-md">Read more</button>
                </div>
            </div>

            <div className="flex flex-col md:items-center lg:flex-row lg:justify-evenly w-[60%]  lg:h-[10rem] gap-10">
                <div className="w-full md:w-[45%] h-[10rem] bg-yellow-400 rounded-lg flex flex-col items-center justify-center p-4">
                    <h3 className="text-center font-semibold text-4xl">10+</h3>
                    <p className="text-center ">years of experience</p>
                </div>

                <div className="w-full md:w-[45%]  h-[10rem] bg-yellow-400 rounded-lg flex flex-col items-center justify-center p-4">
                    <h3 className="text-center font-semibold text-4xl">200+</h3>
                    <p className="text-center ">projects completed</p>
                </div>

                <div className="w-full md:w-[45%] h-[10rem] bg-yellow-400 rounded-lg flex flex-col items-center justify-center p-4">
                    <h3 className="text-center font-semibold text-4xl">10+</h3>
                    <p className="text-center ">satisfied clients</p>
                </div>

                <div className="w-full md:w-[45%]  h-[10rem] bg-yellow-400 rounded-lg flex flex-col items-center justify-center p-4">
                    <h3 className="text-center font-semibold text-4xl">25+</h3>
                    <p className="text-center ">active workers</p>
                </div>
            </div>
        </section>
    );
}

export default About;

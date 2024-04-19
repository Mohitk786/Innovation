import React from 'react'
import ReactPlayer from 'react-player'
import "./about.css"
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();
  
    return (
    <section className="about" id="about">
     

        <div className="row">
            <div className="video">
                <ReactPlayer 
                    playing={true}
                    muted={true}
                    loop={true}
                    url="/assets/about.mp4" 
                />
            </div>
            <div className="content">
                <h3>We provide you the best work which you dreamt for!</h3>
                <p>With years of experience in the industry, we have built a reputation for delivering projects on time and within budget, without compromising on quality. From concept development to final execution, we handle every aspect of the project with precision and care, ensuring that every detail is executed to perfection.Contact us today to discuss your project needs and let us help you bring your vision to life!</p>
                <button onClick={()=>navigate("/contact")} className="btn">read more</button>
            </div>
        </div>

        <div className="box-container">
            <div className="box">
                <h3>10+</h3>
                <p>years of experience</p>
            </div>

            <div className="box">
                <h3>200+</h3>
                <p>projects completed</p>
            </div>

            <div className="box">
                <h3>10+</h3>
                <p>satisfied clients</p>
            </div>

            <div className="box">
                <h3>25+</h3>
                <p>active workers</p>
            </div>
        </div>
    </section>
  )
}

export default About
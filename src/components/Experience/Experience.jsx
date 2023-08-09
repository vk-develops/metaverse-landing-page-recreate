import React from 'react';
import "./Experience.css";
import ExperienceGIF from "../../assets/Experience-Gif.gif";

const Experience = () => {
    return (
        <section className="experience-section">
            <div className='experience-video'>
                <img src={ExperienceGIF} alt="Gif" />
                <div className="img-overlay">
                    <h1 className="heading"> <span>EXPERIENCE</span> <br /> YOU HAVE NEVER <br /> FELT <span>BEFORE</span></h1>
                </div>
            </div>
            <div className="experience-contents">
                <div className="experience-left"></div>
                <div className="experience-right"></div>
            </div>
        </section>
    );
}

export default Experience;
import React from 'react';
import "./Experience.css";
import ExperienceGIF from "../../assets/Experience-Gif.gif";
import ExperienceRightGIF from "../../assets/Big-Gif.gif";
import ExperienceLeftGIF from "../../assets/Small-Gif.gif";

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
                <div className="experience-left">
                    <div className="left-texts">
                        <h1 className="heading-small">Join communities</h1>
                        <p className='paragraph'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from It is a long established fact that a reader will be distracted by</p>
                    </div>
                    <img src={ExperienceRightGIF} alt="" />
                </div>
                <div className="experience-right">
                    <img src={ExperienceLeftGIF} alt="" />
                    <p className='paragraph'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                </div>
            </div>
        </section>
    );
}

export default Experience;
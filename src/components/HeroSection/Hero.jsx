import React from 'react';
import "./Hero.css";
import HeroImg from "../../assets/Hero-Img.png";
import Button from '../Button/Button';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-left">
                <div className="hero-contents">
                    <h1 className="heading">Let’s Explore Three-Dimensional visual</h1>
                    <p className='paragraph'>With virtual technology you can see the digital world feel more real and you can play the game with a new style.</p>
                    <div className="hero-cta">
                        <Button title="Get it now" />
                    </div>
                </div>
            </div>
            <div className="hero-right">
                <img src={HeroImg} alt="Hero Image" />
            </div>
        </section>
    );
}

export default Hero;
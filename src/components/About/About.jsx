import React from 'react';
import "./About.css";
import MetaImg from "../../assets/Logo.png";
import DiceImg from "../../assets/Dice.png";
import ThunderImg from "../../assets/Thunder.png";
import CompassImg from "../../assets/Compass.png";
import Card from '../Card/Card';


const About = () => {
    return (
        <section className="about-section">
            <div className="about-left">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className="about-right">
                <div className="about-right-contents">
                    <h1 className="heading">Get More With <br /> Metaverse <br /> Now</h1>
                    <p className='paragraph'>With virtual technology you can see the digital world.</p>
                </div>
            </div>
        </section>
    );
}

export default About;
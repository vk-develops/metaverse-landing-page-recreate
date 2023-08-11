import React from 'react';
import "./About.css";
import MetaImg from "../../assets/Logo.png";
import DiceImg from "../../assets/Dice.png";
import ThunderImg from "../../assets/Thunder.png";
import CompassImg from "../../assets/Compass.png";
import Card from '../Card/Card';
import Circle from "../Circle/Circle";

const About = () => {
    return (
        <section className="about-section">
            <Circle />
            <div className="about-left">
                <Card image={MetaImg} title="Metaverse" para="With virtual technology you can see the digital world." />
                <Card image={CompassImg} title="Make your Path" para="The lorem ipsum is virtual technology you can see the digital world." />
                <Card image={DiceImg} title="The Fun Part" para="The lorem ipsum is virtual technology you can see the digital world."  />
                <Card image={ThunderImg} title="Lightning Fast" para="With virtual technology you can see the digital world."  />
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
import React from 'react';
import "./Card.css";
import CompassImg from "../../assets/Compass.png";

const Card = () => {
    return (
        <div className="card">
            <div className="card-head">
                <img src={CompassImg} alt="" />
                <h3 className="heading-small">Metaverse</h3>
            </div>
            <div className="card-texts">
                <p className='paragraph'>The lorem ipsum is virtual <br /> technology you can see the digital world.</p>
            </div>
        </div>
    );
}

export default Card;
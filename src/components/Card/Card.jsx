import React from 'react';
import "./Card.css";
import CompassImg from "../../assets/Compass.png";

const Card = (props) => {
    return (
        <div className="card">
            <div className="card-head">
                <img src={props.image} alt="" />
                <h3 className="heading-small"> {props.title} </h3>
            </div>
            <div className="card-texts">
                <p className='paragraph'> {props.para} </p>
            </div>
        </div>
    );
}

export default Card;
import React from 'react';
import "./Button.css";

const Button = ({title}) => {
    return (
        <div className="cta">
            <a href="#">{title}</a>
        </div>
    );
}

export default Button;
import React from 'react';
import './Nav.css'
import Logo from '../../assets/Logo.png'

const Nav = () => {
    return (
        <div className="navii">
            <nav className="navigation">
                <div className="nav-logo">
                    <img src={Logo} alt="Logo" />
                    <span>MetaVerse</span>
                </div>
                <div className="nav-elements">
                    <a href="#">Home</a>
                    <a href="#">Community</a>
                    <a href="#">Features</a>
                    <div className="nav-cta">
                        <a href="#">Sign In</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
import React from 'react';
import './Nav.css'
import Logo from '../../assets/Logo.png'
import Button from '../Button/Button';
import { useRef } from 'react';

const Nav = () => {

    const navRef = useRef();

    const showNav = () => {
        navRef.current.classList.toggle("Responsive-nav");
    }

    return (
        <div className="navii">
            <nav className="navigation">
                <div className="nav-logo">
                    <img src={Logo} alt="Logo" />
                    <span>MetaVerse</span>
                </div>
                <div className="nav-elements">
                    <a className='nav-links nav-active' href="#">Home</a>
                    <a className='nav-links' href="#">Community</a>
                    <a className='nav-links' href="#">Features</a>
                    <Button title="Sign up" />
                </div>
            </nav>
            <div className="responsive-nav-elements">
                    <a className='nav-links nav-active' href="#">Home</a>
                    <a className='nav-links' href="#">Community</a>
                    <a className='nav-links' href="#">Features</a>
                    <Button title="Sign up" />
                </div>
        </div>
    );
}

export default Nav;
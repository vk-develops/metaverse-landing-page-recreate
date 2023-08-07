import React from 'react';
import './Nav.css'
import Logo from '../../assets/Logo.png'
import Button from '../Button/Button';
import { useRef } from 'react';
import { BiMenuAltRight } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";

const Nav = () => {

    const navRef = useRef();

    const hideMenu = () => {
        navRef.current.style.transition = "0.3s";
        navRef.current.style.left = "-100%";
    }

    const showMenu = () => {
        navRef.current.style.transition = "0.3s";
        navRef.current.style.left = "0";
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
                <div className="nav-toggler">
                    <BiMenuAltRight size={32} type='button' onClick={() => showMenu()} />
                </div>
            </nav>
            <div className="responsive-nav-elements" ref={navRef}>
                <div className="res-nav-btn">
                    <AiFillCloseCircle size={32} type='button' onClick={() => hideMenu()} />
                </div>
                <div className="res-nav">
                    <a className='nav-links nav-active' href="#">Home</a>
                    <a className='nav-links' href="#">Community</a>
                    <a className='nav-links' href="#">Features</a>
                    <Button title="Sign up" />
                </div>
            </div>
        </div>
    );
}

export default Nav;
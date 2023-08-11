import React from 'react';
import "./Footer.css";
import Logo from "../../assets/Logo.png";
import LogoWhite from "../../assets/LogoWhite.png";

const Footer = () => {
    return (
        <section className="footer-section">
            <div className="footer-top">
                <div className="ftop-left">
                    <div className="tag"><p>METAVERSE</p></div>
                    <h1>Space <br /> <span>For Everyone.</span></h1>
                </div>
                <div className="ftop-right">
                    <img src={Logo} alt="" />
                    <h3 className="heading-small">We will Rock You</h3>
                    <p className='paragraph'>Lorem Ipsum Text</p>
                </div>
            </div>
            <hr className='line' />
            <div className="footer-bottom">
                <div className="about">
                    <img src={LogoWhite} alt="" />
                    <div className="about-contents">
                        <p className='paragraph'> <strong>Metaverse</strong> is a variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>
                    </div>
                </div>
                <div className="link">
                    <h3 className="heading-very-small">Our Team</h3>
                    <ul>
                        <li>
                            <a href="#">Meta Team</a>
                            <a href="#">Team Metaverse</a>
                            <a href="#">Team Rock</a>
                        </li>
                    </ul>
                </div>
                <div className="link">
                    <h3 className="heading-very-small">Contact Us</h3>
                    <ul>
                        <li>
                            <a href="#">example@gmail.com</a>
                            <a href="#">+1 654 6576 375</a>
                        </li>
                    </ul>
                </div>
                <div className="input">
                    <h3 className="heading-very-small">Subscribe to Newsletter</h3>
                    <div className="forms">
                        <form action="">
                            <input type="email" placeholder='Enter your Email' />
                            <div className="btn">
                                <a href="3" type='submit'>Submit</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
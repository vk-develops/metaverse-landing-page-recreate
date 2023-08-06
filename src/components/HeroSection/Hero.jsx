import React from 'react';
import "./Hero.css";
import HeroImg from "../../assets/Hero-Img.png";
import Button from '../Button/Button';
import Circle from '../Circle/Circle';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-left">
                <div className="hero-contents">
                    <h1 className="heading">Let’s Explore <br /> Three-Dimensional <br />  visual</h1>
                    <p className='paragraph'>With virtual technology you can see the digital world feel more real and you can play the game with a new style.</p>
                    <div className="hero-cta">
                        <Button title="Get it now" />
                        <div className="hero-cta-imgs">
                            <div className="img-box">
                                <img src="https://media.istockphoto.com/id/490483300/photo/portrait-of-beautiful-blonde-woman-with-curly-hairstyle.jpg?s=612x612&w=0&k=20&c=Va_kGiVu8GGOZWhREhqD9j8O5TqNn9zGzWZUKQz1_vs=" alt="" />
                            </div>
                            <div className="img-box">
                                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
                            </div>
                            <div className="img-box">
                                <img src="https://images.unsplash.com/photo-1507019403270-cca502add9f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="hero-numbers">
                        <div className="numbers">
                            <h3 className='heading-small'>330k+</h3>
                            <p className='paragraph-small'>People Connected</p>
                        </div>
                        <div className="line"></div>
                        <div className="numbers">
                            <h3 className='heading-small'>5500+</h3>
                            <p className='paragraph-small'>Assets to buy</p>
                        </div>
                    </div>
                </div>
                <Circle />
            </div>
            <div className="hero-right">
                <img src={HeroImg} alt="Hero Image" />
            </div>
        </section>
    );
}

export default Hero;


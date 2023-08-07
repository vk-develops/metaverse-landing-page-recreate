import React from 'react';
import "./Explore.css";
import ExploreImg from "../../assets/Explore-Img.png";
import { AiOutlineArrowRight } from "react-icons/ai"

const Explore = () => {
    return (
        <section className="explore-section">
            <div className="explore-left">
                <img src={ExploreImg} alt="Image" />
            </div>
            <div className="explore-right">
                <div className="explore-contents">
                    <div className="explore-main-contents">
                        <h1 className="heading">Explore Metaverse <br />  Even More</h1>
                        <p className='paragraph'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or that andomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,.</p>
                    </div>
                    <div className="explore-sub-contents">
                        <div className="sub-contents">
                            <h5 className='heading-very-small'>Join Now</h5>
                            <p className='paragraph-very-small'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>
                            <div className="sub-content-link">
                                <a href="#">Explore Now</a>
                                <AiOutlineArrowRight color="#1D51FE" size={20} />
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="sub-contents">
                            <h5 className='heading-very-small'>Join Now</h5>
                            <p className='paragraph-very-small'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.</p>
                            <div className="sub-content-link">
                                <a href="#">Explore Now</a>
                                <AiOutlineArrowRight color="#1D51FE" size={20} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Explore;
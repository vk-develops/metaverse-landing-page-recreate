import React from 'react';
import "./ExploreTwo.css";
import ExploreTwoLeft from "../../assets/ExploreTwo-Left.png";
import ExploreTwoRight from "../../assets/ExploreTwo-Right.png";
import { AiOutlineArrowRight } from "react-icons/ai";

const ExploreTwo = () => {
    return (
        <section className="exploretwo-section">
            <div className="exploretwo-left">
                <div className="left-contents">
                    <div className="img-box">
                        <img src={ExploreTwoLeft} alt="" />
                    </div>
                    <div className="left-texts">
                        <h1 className="heading-small">Mordern and Traditional Costume</h1>
                        <div className="explore-sub-link">
                            <a href="#">Explore Now</a>
                            <AiOutlineArrowRight color='1D51FE' size={24}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="exploretwo-right"></div>
        </section>
    );
}

export default ExploreTwo;
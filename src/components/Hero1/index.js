import React from 'react'
import {Link}  from 'react-router-dom';
import heroimg from '../../images/slider/hero-shape.png'

import './style.css'

const Hero1 = () => {
    return(
        <section className="wpo-hero-style-2" >
            <div className="wpo-slide-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col col-md-8 slide-caption">
                            <h2 className="wow fadeInLeftSlow" data-wow-delay="1.0s">I’m <span>Jamel</span> Morrison</h2>
                            <p className="wow fadeInUp" data-wow-delay="1.5s">Freelance Developer</p>
                            <div className="bg-social wow fadeInUp" data-wow-delay="2.0s">
                                <ul>
                                    <li><a href="https://github.com/JamelxD" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></li>
                                    <li><a href="https://uk.linkedin.com/in/jamel-morrison" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wpo-slide-right-img">
                    <div className="slide-img wow fadeInRightSlow" data-wow-duration="2000ms">
                        <img src={heroimg} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero1;

import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Tes1 from '../../images/testimonials/dport.jpeg'
import Tes2 from '../../images/testimonials/ucl.png'
import Tes3 from '../../images/testimonials/div.png'

import './style.css'

class TestSlider extends Component {
    render( props ) {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            margin: 10,
            loop: true,
        };
        return (
            <div className={`wpo-testimonial-area section-padding ${this.props.subclass}`}>
                <div className="container">
                    <div className="col-12">
                        <div className="section-title">
                            <h2>Testimonial</h2>
                        </div>
                    </div>
                    <div className="wpo-testimonial-main">
                         <Slider {...settings}>
                            <div className="wpo-testimonial-wrap">
                                <div className="wpo-testimonial-item">
                                    <div className="wpo-testimonial-content">
                                        <p>Worked with Jamel on a number of projects; His key attributes would be he's a team player, punctual, creative and knows how to find a bug</p>
                                        <div className="wpo-testimonial-item">
                                            <div className="wpo-testimonial-img">
                                                 <img src={Tes1} alt=""/>
                                            </div>
                                            <div className="wpo-testimonial-thumb">
                                                <h4>Diogo Costa</h4>
                                                <span>Software Engineer @ Lending Works</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="wpo-testimonial-wrap">
                                <div className="wpo-testimonial-item">
                                    <div className="wpo-testimonial-content">
                                        <p>Jamel has helped me on a number of Undergrad projects at University and currently working with him on extra curricular projects; He's very supportive and logical.</p>
                                        <div className="wpo-testimonial-item">
                                            <div className="wpo-testimonial-img">
                                                <img src={Tes2} alt=""/>
                                            </div>
                                            <div className="wpo-testimonial-thumb">
                                                <h4>Denoy Hossain</h4>
                                                <span>Masters Student of Software Engineering @ University College London</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="wpo-testimonial-wrap">
                                <div className="wpo-testimonial-item">
                                    <div className="wpo-testimonial-content">
                                        <p>Jamel helped me with Front-end development when a troublesome member of our SCRUM team did not participate; He has shown the ability to take control and decision make!</p>
                                        <div className="wpo-testimonial-item">
                                            <div className="wpo-testimonial-img">
                                                <img src={Tes3} alt=""/>
                                            </div>
                                            <div className="wpo-testimonial-thumb">
                                                <h4>Divyesh Vala</h4>
                                                <span>Software Engineer for NHS</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
            );
        }
    }
    
    export default TestSlider;
          
          
          
          

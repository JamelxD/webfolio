import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

import bg from '../../images/portfol-img/bfit.png'
import profolio2 from '../../images/protfolioimg/img-6.jpg'
import profolio3 from '../../images/protfolioimg/img-7.jpg'
import profolio4 from '../../images/protfolioimg/img-8.jpg'

const PorfolioSection = ( props ) => {
    return(
        <div className="wpo-protfolio-area-2 section-padding">
            <div className="container">
                <div className="col-12">
                    <div className="section-title text-center">
                        <h2>Portfolio</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-protfolio-item">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 custom-grid">
                                    <div className="">
                                        <div className="wpo-protfolio-single">
                                            <div className="wpo-protfolio-img">
                                                <img src={bg} alt=""/>
                                            </div>
                                            <div className="wpo-protfolio-text">
                                                <h2>Minimalism</h2>
                                                <span>Illustration . Art Direction</span>
                                                <Link to="/protfolioGrid2">View Work</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 custom-grid">
                                    <div className="">
                                        <div className="wpo-protfolio-single">
                                            <div className="wpo-protfolio-img">
                                                <img src={profolio2} alt=""/>
                                            </div>
                                            <div className="wpo-protfolio-text">
                                                <h2>Abstract Art</h2>
                                                <span>Illustration . Art Direction</span>
                                                <Link to="/protfolioGrid2">View Work</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 custom-grid">
                                    <div className="">
                                        <div className="wpo-protfolio-single">
                                            <div className="wpo-protfolio-img">
                                                <img src={profolio3} alt=""/>
                                            </div>
                                            <div className="wpo-protfolio-text">
                                                <h2>Abstract Art</h2>
                                                <span>Illustration . Art Direction</span>
                                                <Link to="/protfolioGrid2">View Work</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 custom-grid">
                                    <div className="">
                                        <div className="wpo-protfolio-single">
                                            <div className="wpo-protfolio-img">
                                                <img src={profolio4} alt=""/>
                                            </div>
                                            <div className="wpo-protfolio-text">
                                                <h2>Abstract Art</h2>
                                                <span>Illustration . Art Direction</span>
                                                <Link to="/protfolioGrid2">View Work</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="protfolio-btn">
                                <Link to="/protfolioMashonary">See More Work...</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PorfolioSection;
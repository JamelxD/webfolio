import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import Hero1 from '../../components/Hero1'
import Experience from '../../components/exprience'
import PortfolioSub from '../../components/porfolioSub'
import ContactArea from '../../components/ContactArea'
import LatestBlog from '../../components/LatestNews'
import Footer from '../../components/Footer'
import TestSlider from '../../components/Testimonial'
import Logo from '../../images/logo.png'
import AboutWrap from '../../components/about'

const HomePage =() => {
    return(
        <Fragment>
            <Navbar />
            <Hero1/>
            <Experience/>
            <AboutWrap/>
            <PortfolioSub/>
            <TestSlider/>
            {/*<LatestBlog/>*/}
            <Footer ftLogo={Logo}/>
        </Fragment>
    )
};
export default HomePage;
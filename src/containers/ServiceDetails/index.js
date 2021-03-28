import React, {Fragment} from 'react';
import Breadcrumbs from '../../components/Breadcrumbs'
import Footer from '../../components/Footer'
import ServiceSingle from '../../components/ServiceSingle'
import FtLogo from '../../images/logo2.png'
import Navbar from "../../components/Navbar";

const ServiceDetails =() => {
    return(
        <Fragment>
            <Navbar/>
            <Breadcrumbs pageTitle={'Product Design'} pageSub={'Service Details'}/>
            <ServiceSingle/>
            <Footer Ftclass={'wpo-footer-area3'} ftLogo={FtLogo}/>
        </Fragment>
    )
};
export default ServiceDetails;
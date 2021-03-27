import React, {Fragment} from 'react';
import Breadcrumbs from '../../components/Breadcrumbs'
import Footer from '../../components/Footer'
import PorfolioSection9 from '../../components/PorfolioSection9'
import FtLogo from '../../images/logo2.png'
import Navbar from "../../components/Navbar";

const PorfolioGridCro =() => {
    return(
        <Fragment>
            <Navbar/>
            <Breadcrumbs pageTitle={'Portfolio'} pageSub={'Portfolio'}/>
            <PorfolioSection9/>
            <Footer Ftclass={'wpo-footer-area3'} ftLogo={FtLogo}/>
        </Fragment>
    )
};
export default PorfolioGridCro;
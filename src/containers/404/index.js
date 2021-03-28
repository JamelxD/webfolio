import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import Breadcrumbs from '../../components/Breadcrumbs'
import Footer from '../../components/Footer'
import ErroeSection from '../../components/ErroeSection'
import FtLogo from '../../images/logo2.png'

const ErroPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <Breadcrumbs pageTitle={'404 Error'} pageSub={'404 Not Found'}/>
            <ErroeSection/>
            <Footer Ftclass={'wpo-footer-area3'} ftLogo={FtLogo}/>
        </Fragment>
    )
};
export default ErroPage;
import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import Breadcrumbs from '../../components/Breadcrumbs'
import ContactPageSec from '../../components/ContactPageSec'
import Footer from '../../components/Footer'
import FtLogo from '../../images/logo2.png'

const ContactPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <Breadcrumbs pageTitle={'Contact Us'} pageSub={'Contact'}/>
            <ContactPageSec/>
            <Footer Ftclass={'wpo-footer-area3'} ftLogo={FtLogo}/>
        </Fragment>
    )
};
export default ContactPage;
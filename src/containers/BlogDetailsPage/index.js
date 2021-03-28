import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import Breadcrumbs from '../../components/Breadcrumbs'
import BlogSingle from '../../components/BlogDetails'
import Footer from '../../components/Footer'
import FtLogo from '../../images/logo2.png'

const BlogDetailsPage =() => {
    return(
        <Fragment>
            <Navbar/>
            <Breadcrumbs pageTitle={'Helpful Tips For Become A Successful Designer'} pageSub={'Blog Details'}/>
            <BlogSingle/>
            <Footer Ftclass={'wpo-footer-area3'} ftLogo={FtLogo}/>
        </Fragment>
    )
};
export default BlogDetailsPage;
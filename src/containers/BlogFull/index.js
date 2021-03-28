import React  from 'react';
import Navbar from '../../components/Navbar'
import Breadcrumbs from '../../components/Breadcrumbs'
import BlogFullwidth from '../../components/BlogFullwidth'
import Footer from '../../components/Footer'
import FtLogo from '../../images/logo2.png'

const BlogFull =() => {
    return(
        <div>
            <Navbar/>
            <Breadcrumbs pageTitle={'Latest News'} pageSub={'Blog'}/>
            <BlogFullwidth/>
            <Footer Ftclass={'wpo-footer-area3'} ftLogo={FtLogo}/>
        </div>
    )
};
export default BlogFull;
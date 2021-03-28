import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar'
import Breadcrumbs from '../../components/Breadcrumbs'
import Footer from '../../components/Footer'
import ProjectSingle from '../../components/ProjectSingle'
import FtLogo from '../../images/logo2.png'

const ProjectDetails =() => {
    return(
        <Fragment>
            <Navbar/>
            <Breadcrumbs pageTitle={'Minimalist Theme'} pageSub={'Project Details'}/>
            <ProjectSingle/>
            <Footer Ftclass={'wpo-footer-area3'} ftLogo={FtLogo}/>
        </Fragment>
    )
};
export default ProjectDetails;
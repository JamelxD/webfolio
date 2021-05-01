import React from 'react'
import {Link}  from 'react-router-dom'
import MobileMenu from '../../components/MobileMenu'

import './style.css'

const Header = (props) => {
    return(	
	<div className="header-style-1">
        <div className="container">
            <div className="header-content">
                <div className="logo">
                    <Link to="/" title=""><img src={props.Logo} alt=""/></Link>
                </div>
                <nav className="d-lg-block d-none header-b">
                    <ul>
                        <li><Link className="active" to="/home" title="">Home</Link></li>
                        <li><Link to="/contact" title="">Contact</Link></li>
                    </ul>
                </nav>
                <div className="clearfix"></div>
                
            </div>
            <MobileMenu/>
        </div>
    </div>
    )
}

export default Header;
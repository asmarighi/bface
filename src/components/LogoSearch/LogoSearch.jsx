import React from 'react'
import Logo from '../../img/logo.jpg'
import {BiSearchAlt2} from 'react-icons/bi'
import './LogoSearch.css'

const LogoSearch = () => {
    return (
        <div className="LogoSearch">
            <img src={Logo} alt="" />
            <div className="Search">
                <input type="text" placeholder='Search' />
                <div className="s-icon">
                    <BiSearchAlt2/>
                    
                </div>
            </div>
        </div>
    )
}

export default LogoSearch
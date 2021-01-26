import React from "react";
import {useSelector} from "react-redux";
import logo from "../../../assets/img/navbar/SoftwareDeveloper.png";

const NavBarBrand = () => {

    const navBarLogoStyle = {
        width: '10%'
    }

    const navBarContents = useSelector(state => state.navBarContent)

    return (
        <a href="/" className="navbar-brand mr-0" id="navBarBrandingLink">
            <img src={ logo } width="50" id="logoImg" style={navBarLogoStyle} className="d-inline-block align-top" alt="" />
            { navBarContents.brand.title }
        </a>
    )
}

export default NavBarBrand;
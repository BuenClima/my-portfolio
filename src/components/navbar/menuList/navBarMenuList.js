import React from "react"
import {useSelector} from "react-redux";

const NavBarMenuList = () => {

    const navBarMenuList = {
        marginLeft: '15%'
    }
    const navBarContents = useSelector(state => state.navBarContent)

    return (
        <ul className="navbar-nav" style={navBarMenuList}>
            <li className="nav-item active">
                <a id="linkToHeader" className="nav-link"  href="#home">
                    {navBarContents.menuList.home.title} <span className="sr-only"></span></a>
            </li>
            <li className="nav-item">
                <a id="linkToFirstSection" className="nav-link" href="#aboutMe">
                    {navBarContents.menuList.aboutMe.title}
                </a>
            </li>
            <li className="nav-item">
                <a id="linkToSecondSection" className="nav-link" href="#projects">
                    {navBarContents.menuList.projects.title}
                </a>
            </li>
            <li className="nav-item">
                <a id="linkToThirdSection" className="nav-link" href="#letsTalk">
                    {navBarContents.menuList.letsTalk.title}
                </a>
            </li>
        </ul>
    )
}

export default NavBarMenuList;
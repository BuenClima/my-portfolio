import React from "react"
import {useSelector} from "react-redux";

const NavBarIconList = () => {
    const color = {
        color: '#ffc371',
    }

    const footerContent = useSelector(state => state.footerContent)
    console.log(footerContent.icons.list.github.url)
    return (
        <ul className="nav navbar-nav flex-row justify-content-center flex-nowrap">
            <li className="nav-item"><a id="navBarLinkToGitHub" className="nav-link" href={ footerContent.icons.list.github.url } target="_blank"><i style={color} className="fa fa-github mr-1"></i></a>
            </li>
            <li className="nav-item"><a id="navBarLinkToLinkedIn" className="nav-link" href={ footerContent.icons.list.linkedIn.url } target="_blank"><i style={color} className="fa fa-linkedin"></i></a>
            </li>
        </ul>
    )
}

export default NavBarIconList;
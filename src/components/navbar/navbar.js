import React  from "react";
import NavBarMenuList from "./menuList/navBarMenuList";
import NavBarIconList from "./inconList/navBarIconList";
import NavBarBrand from "./brand/navBarBrand";

const NavBar = () => {
        return (
            <nav className="navbar navbar-light navbar-expand-md bg-light justify-content-center fixed-top">
                <NavBarBrand />
                <div className="navbar-collapse collapse justify-content-between align-items-center w-100"
                     id="collapsingNavbar2">
                <NavBarMenuList />
                <NavBarIconList />
                </div>
            </nav>
        )
}
export default NavBar;
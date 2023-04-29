import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import './Nav.css'

import HamburgerMenu from "./HamburgerMenu";
function Nav() {

    return (
      
        <nav className="Nav">
            <div className="Nav-site-title">
                <h1>
                    <span className="creative">Michael |</span>
                    <span className="logical">Bocim</span>
                </h1>
            </div>
            <div className="Nav-links">
                <NavLink className="Nav-links-browser" to={"/"}>
                    Home
                </NavLink>
                <NavLink className="Nav-links-browser" to={"/about"}>
                    About
                </NavLink>
                <NavLink className="Nav-links-browser" to={"/blog"}>
                    Blog
                </NavLink>
                <NavLink className="Nav-links-browser" to={"/technical"}>
                    Technical
                </NavLink>
                <NavLink className="Nav-links-browser" to={"/projects"}>
                    Projects
                </NavLink>
                <NavLink className="Nav-links-browser" to={"/contact"}>
                    Contact
                </NavLink>
                <HamburgerMenu className="Nav-HamburgerMenu"/>

                {/* <NavLink to={"/other"}>
                Other
            </NavLink> */}
            </div>
        </nav>
    )
}

export default Nav;
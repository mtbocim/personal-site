import React from "react";
import { NavLink } from "react-router-dom";
import './Nav.css'

import HamburgerMenu from "./HamburgerMenu";
function Nav() {

    return (
      
        <nav className="Nav">
            <div className="Nav-site-title">
                <span className="creative">Michael |</span>
                <span className="logical">Bocim</span>
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
            </div>
        </nav>
    )
}

export default Nav;
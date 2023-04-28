import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
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
                <Link className="Nav-links-browser" to={"/"}>
                    Home
                </Link>
                <Link className="Nav-links-browser" to={"/about"}>
                    About
                </Link>
                <Link className="Nav-links-browser" to={"/projects"}>
                    Projects
                </Link>
                <Link className="Nav-links-browser" to={"/contact"}>
                    Contact
                </Link>
                <HamburgerMenu/>

                {/* <Link to={"/blog"}>
                Blog
            </Link> */}
                {/* <Link to={"/other"}>
                Other
            </Link> */}
            </div>
        </nav>
    )
}

export default Nav;
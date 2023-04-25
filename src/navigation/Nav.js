import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import './Nav.css'
function Nav() {

    return (
        <nav className="Nav">
            <div class="Nav-site-title">
                <h1>
                    <span className="creative">Michael |</span>
                    <span className="logical">Bocim</span>
                </h1>
            </div>
            <div className="Nav-links">
                <Link to={"/"}>
                    Home
                </Link>
                <Link to={"/about"}>
                    About
                </Link>
                <Link to={"/projects"}>
                    Projects
                </Link>
                <Link to={"/contact"}>
                    Contact
                </Link>
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
import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import './Nav.css'
function Nav() {

    return (
        <nav className="Nav">
            <h1 class="site-title">
                <span class="creative">Michael |</span>
                <span class="logical">Bocim</span>
            </h1> 
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
        </nav>
    )
}

export default Nav;
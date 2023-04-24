import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import './Nav.css'
function Nav() {

    return (
        <nav className="Nav">
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
        </nav>
    )
}

export default Nav;
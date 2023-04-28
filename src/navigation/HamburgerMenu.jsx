import { useState } from "react";
import { NavLink } from "react-router-dom";
import './HamburgerMenu.css'
function HamburgerMenu() {

    const [isActive, setIsActive] = useState(false);

    function toggleClick() {
        console.log("hello")
        setIsActive(() => !isActive)
    }

    return (
            <div className='HamburgerMenu' onClick={toggleClick}>
                <div className={isActive?'HamburgerMenu-line top active':'HamburgerMenu-line top'}></div>
                <div className={isActive?'HamburgerMenu-line middle active':'HamburgerMenu-line middle'}></div>
                <div className={isActive?'HamburgerMenu-line bottom active':'HamburgerMenu-line bottom'}></div>
                <div className={isActive?'HamburgerMenu-menu active':'HamburgerMenu-menu'}>
                    <NavLink to={"/"}>
                        Home
                    </NavLink>
                    <NavLink to={"/about"}>
                        About
                    </NavLink>
                    <NavLink to={"/projects"}>
                        Projects
                    </NavLink>
                    <NavLink to={"/contact"}>
                        Contact
                    </NavLink>

                </div>
            </div>
    )
}

export default HamburgerMenu;
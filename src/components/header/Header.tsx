import React from "react";
import NavBar from "../navBar/NavBar";
import './Header.scss'

function Header() {
    return (
        <div className="main-header">
            <header> 
                <NavBar/>
            </header>
        </div>
    )
}

export default Header;
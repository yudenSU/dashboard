import React from "react";
import NavBar from "../navBar/NavBar";
import './Header.scss'

const Header: React.FC = () => {
    return (
        <div className="main-header">
            <header> 
                <NavBar/>
            </header>
        </div>
    )
}

export default Header;
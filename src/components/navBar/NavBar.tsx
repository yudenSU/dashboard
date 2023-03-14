import React from "react";
import { Link } from "react-router-dom";
import './NavBar.scss'

function NavBar() {
    return (
        <div>
            <ul>
                <li>
                    <Link className="text-link" to="/">
                        <h1>
                            Home
                        </h1>
                    </Link> 
                </li>
                <li> 
                    <Link className="text-link" to="/dashboard">Dashboard</Link> 
                </li>
                <li> 
                    <Link className="text-link" to="/projects">Projects</Link> 
                </li>
                <li> 
                    <Link className="text-link" to="/account">Account</Link> 
                </li>
                <li> 
                    <Link className="text-link" to="/about">About</Link> 
                </li>
            </ul>
        </div>
    )
}

export default NavBar;
import React from "react";
import logo from "../img/Group.png";

import "./styles.css";

export default function Navbar() {
return (
    <div>
    <nav className="nav">
        <a href="/" className="site-title">
        <img src={logo} alt="logo" className="logo"/>
        Coffee-house
        </a>
        <ul>
        <li>
            <a href="../pages/Ourcoffee">Our coffee</a>
        </li>
        <li>
            <a href="../pages/Foryourpleasure">For your pleasure</a>
        </li>
        </ul>
    </nav>
    </div>
);
}

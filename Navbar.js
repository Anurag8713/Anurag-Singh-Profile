import React from "react";
import img from "./images/profile.jpeg"

export default function Navbar() {
    return (
        <div className="nav-container">
            <img src={img} className="nav-img"></img>
            <h1 className="nav-name">Anurag Singh</h1>
            <h4 className="nav-profession">Frontend Developer</h4>
            <h5 className="nav-website">Youtube.website</h5>
        </div>
    )
}
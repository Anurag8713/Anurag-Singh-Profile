import React from "react";
import img from "./images/linkedin_icon.svg"

export default function Button() {
    return (
        <div className="btn-container">
            <button className="btn-mail">
            <span class="material-symbols-outlined">mail</span>
            Email</button>
            <button className="btn-linkedin"> <img src={img} className="btn-img"></img>Linkedin</button>
        </div>
    )
}
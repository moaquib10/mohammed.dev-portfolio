import React from "react";
import "./Navbar.css";

export default function Navbar() {
    return (
        <section className="body">
            <div className="container">
                <h4 className="nav-heading">Mohammed.dev</h4>
                <ul className="nav" >
                    <li> <a className="nav-item" href="#skills">Home</a> </li>
                    <li> <a className="nav-item" href="#about">About</a> </li>
                    <li> <a className="nav-item" href="#projects">Projects</a> </li>
                    <li> <a className="nav-item" href="#contact">Contact</a> </li>
                </ul>
            </div>
        </section>
    );
};

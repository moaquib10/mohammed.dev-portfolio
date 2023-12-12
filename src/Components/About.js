import React from "react";
import "./About.css";
import Workplace from '../Images/Workplace.png';

export default function About() {
    return (
        <section className="body3">
            <div className="container0">
                <div className="container3">
                    <h5 className="heading">ABOUT ME</h5>
                    <h1 className="aboutme1">A dedicated Front-end Developer based in Karnataka, India 📍</h1>
                    <p className="discription">As a Junior Front-End Developer, I bring a comprehensive skill set encompassing HTML, CSS, JavaScript, React, and SCSS. My strength lies in creating visually stunning and user-friendly websites that deliver an exceptional browsing experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.</p>
                </div>
                <img className="img" src={Workplace} alt='' />
            </div>
        </section>
    );
}
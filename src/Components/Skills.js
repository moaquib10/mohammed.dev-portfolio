import "./Skills.css"
import { Css, Html, Js, React, Redux, Sass, Linkedin, Github, MongoBD } from "../Imports.js";


export default function Skills() {
    return (
        <section className="body2">
            <div className="container2">
                <h1 className="main2">Front-End React Developer 👋</h1>
                <p className="aboutme">Hi, I'm <i>Mohammed Aquib</i>. A passionate Front-end React Developer based in Karnataka, India. 📍
                </p>
                <a href="https://www.linkedin.com/in/mohammed-aquib-56a727212/" target="_blank" rel="noreferrer"><img src={Linkedin} alt='' height="35" width="35" style={{ marginRight: '15px' }} /></a>
                <a href="https://github.com/moaquib10" target="_blank" rel="noreferrer"><img src={Github} alt='' height="35" width="35" style={{ marginRight: '15px' }} /></a>
                <h3 className="tech">Tech Stack | </h3>
                <div className="i-container">
                    <img className="image-container" src={Html} alt='' height="50" width="50" style={{ marginRight: '25px' }} />
                    <img className="image-container" src={Css} alt='' height="50" width="50" style={{ marginRight: '25px' }} />
                    <img className="image-container" src={Js} alt='' height="50" width="50" style={{ marginRight: '25px' }} />
                    {/* <img className="image-container" src={Java} alt='' height="50" width="50" style={{ marginRight: '25px' }} /> */}
                    <img className="image-container" src={MongoBD} alt='' height="50" width="50" style={{ marginRight: '25px' }} />
                    <img className="image-container" src={React} alt='' height="50" width="50" style={{ marginRight: '25px' }} />
                    <img className="image-container1" src={Redux} alt='' height="50" width="50" style={{ marginRight: '25px' }} />
                    <img className="image-container1" src={Sass} alt='' height="50" width="50" style={{ marginRight: '25px' }} />
                </div>
            </div>
        </section>
    );
};
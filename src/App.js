import React from 'react';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills';
import About from './Components/About.js';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Copyright from './Components/Copyright';


export default function App() {

    return (
        <div>
            
            <Navbar />
            <section id="skills"><Skills /></section>
            <section id="about"><About /></section>
            <section id="projects"><Projects /></section>
            <section id="contact"><Contact /></section>
            <Copyright />
        </div>
    );
}
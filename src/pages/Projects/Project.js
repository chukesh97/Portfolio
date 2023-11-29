import './Project.css'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Project() {
    useEffect(() => {
        AOS.init({
            offset:150,
            duration: 1000,
        });
    }
    , []);
   
    return (
        <div id="projects">
        <div>
           <h2 className='heading'>Projects</h2>
           <hr/>
        </div>
    <div className="project-tile" data-aos="fade-right" >
        <p>Stopwatch</p>
        <p> HTML5 CSS3 JAVASCRIPT</p>
        <a href="https://chukesh97.github.io/Stopwatch/">View Project</a>
    </div>
    <div className="project-tile" data-aos="fade-right">
        <p>Landing Page</p>
        <p>HTML5 CSS3 JAVASCRIPT</p>
        <a href="https://chukesh97.github.io/Landing-Page/">View Project</a>
    </div>
    <div className="project-tile" data-aos="fade-right">
        <p>Project 3</p>
        <p>Description of Project 3</p>
        <a href="#">View Project</a>
    </div>
    </div>
    )
}
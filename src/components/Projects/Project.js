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
        <p>Project 1</p>
        <p></p>
        <a href="#">View Project</a>
    </div>
    <div className="project-tile" data-aos="fade-right">
        <p>Project 2</p>
        <p>Description of Project 2</p>
        <a href="#">View Project</a>
    </div>
    <div className="project-tile" data-aos="fade-right">
        <p>Project 3</p>
        <p>Description of Project 3</p>
        <a href="#">View Project</a>
    </div>
    </div>
    )
}
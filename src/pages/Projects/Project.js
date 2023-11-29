import "./Project.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// components
import ProjectCard from "./ProjectCard";
import stopwatch from './stopwatch.jpg'
import landing from './landing.jpg'
import netflix from './netflix.jpg'

export default function Project() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
    });
  }, []);

  return (
    <div id="projects">
      <div>
        <h2 className="heading">Projects</h2>
        <hr />
      </div>
      <div data-aos="fade-right">
        <ProjectCard 
           image={stopwatch}
           title='Stopwatch'
           skills='HTML5 &nbsp; CSS3 &nbsp; JAVASCRIPT'
           github='https://github.com/chukesh97/Stopwatch.git'
           view='https://chukesh97.github.io/Stopwatch/'
        />
        <ProjectCard 
           image={landing}
           title='Landing page'
           skills='HTML5 &nbsp; CSS3 &nbsp; JAVASCRIPT'
           github='https://github.com/chukesh97/Stopwatch.git'
           view='https://chukesh97.github.io/Landing-Page/'
        />
        <ProjectCard
           image={netflix} 
           title='Netflix login'
           skills='REACT.JS &nbsp; HTML5 &nbsp; CSS3'
           github='https://github.com/chukesh97/netflix-app.git'
           view='https://chukesh97.github.io/Stopwatch/'
        />
        {/* <ProjectCard 
           title='landing page'
           skills='HTML5 &nbsp; CSS3 &nbsp; JAVASCRIPT'
           github='https://github.com/chukesh97/Stopwatch.git'
           view='https://chukesh97.github.io/Stopwatch/'
        /> */}
      </div>
    </div>
  );
}

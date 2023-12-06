import "./Project.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// components
import ProjectCard from "./ProjectCard";
import stopwatch from './stopwatch.jpg'
import landing from './landing.jpg'
import netflix from './netflix.jpg'
import Todo from './Todo.jpg'
// import Quiz from './Quiz.jpg'
import Flipkart from './Flipkart.jpg'

export default function Project() {
  useEffect(() => {
    AOS.init({
      offset: 120,
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
           image={landing}
           title='Landing page'
           skills='HTML5, &nbsp; CSS3, &nbsp; JAVASCRIPT'
           github='https://github.com/chukesh97/Stopwatch.git'
           view='https://chukesh97.github.io/Landing-Page/'
        />
        <ProjectCard 
           image={stopwatch}
           title='Stopwatch'
           skills='HTML5, &nbsp; CSS3, &nbsp; JAVASCRIPT'
           github='https://github.com/chukesh97/Stopwatch.git'
           view='https://chukesh97.github.io/Stopwatch/'
        />
        <ProjectCard 
           image=''
           title='Quiz App'
           skills='REACT.JS, &nbsp; JSX, &nbsp; CSS3'
           github='https://github.com/chukesh97/Google-search-page.git'
           view='https://chukesh97.github.io/Google-search-page/'
           disabled={true}
        />
         <ProjectCard 
           image={Todo}
           title='To-Do App'
           skills='REACT.JS, &nbsp; JSX, &nbsp; CSS3'
           github='https://github.com/chukesh97/todo-app.git'
           view='https://chukesh97.github.io/todo-app/'
        />
        <ProjectCard
           image={netflix} 
           title='Netflix login'
           skills='REACT.JS, &nbsp; JSX, &nbsp; CSS3'
           github='https://github.com/chukesh97/netflix-app.git'
           view='https://chukesh97.github.io/Stopwatch/'
           disabled={true}
        />
        <ProjectCard 
           image={Flipkart}
           title='Flipkart Clone MERN Stack'
           skills='MONGODB, &nbsp; EXPRESS.JS,  &nbsp; REACT.JS, &nbsp; REDUX, &nbsp; NODE.JS, &nbsp; MUI'
           github='https://github.com/chukesh97/Ecommerce-web.git'
           view='https://chukesh97.github.io/todo-app/'
           disabled={true}
        />
      </div>
    </div>
  );
}

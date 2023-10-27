import "./Footer.css";
import { useState, useEffect } from 'react';
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

export default function Footer() {

    const [year, setYear] = useState(new Date().getFullYear());
    
    useEffect(() => {
      setYear(new Date().getFullYear());
    }, []);
    
  return (
    <div className="container">
      <div className="copy">
        <p>
          Copyright &copy;
          <span id="current-year"> {year} </span>
          Chukesh Goud
        </p>
      </div>
      <div className="social-icons">
        <a className="social-links" 
        href="https://github.com/chukesh97"
        name="github"
        aria-label="Go to Github" 
        target="_blank">
          <FaGithubSquare size={30} />
        </a>
        <a className="social-links"
         href="https://www.linkedin.com/in/s-chukesh-goud-84a33522a"
         name="LinkedIn"
         aria-label="Go to LinkedIn"
         target="_blank">
          <FaLinkedin size={30} />
        </a>
      </div>
    </div>
  );
}

import "./Footer.css";
import { useState, useEffect } from 'react';
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

export default function Footer() {

    const [year, setYear] = useState(new Date().getFullYear());
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
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
      <div className="top">
        <button className="Btn" onClick={scrollToTop}>
          <svg height="1.2em" className="arrow" viewBox="0 0 512 512">
            <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
          </svg>
          <p className="text">Back to Top</p>
        </button>
      </div>
      <div className="social-icons">
        <a className="social-links" href="https://github.com/chukesh97" target="_blank">
          <FaGithubSquare size={30} />
        </a>
        <a className="social-links" href="https://www.linkedin.com/in/s-chukesh-goud-84a33522a" target="_blank">
          <FaLinkedin size={30} />
        </a>
      </div>
    </div>
  );
}

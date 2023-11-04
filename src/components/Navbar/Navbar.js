import "./Navbar.css";
import { useRef, useEffect, useState } from "react";
import Logo from "./logo.png";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';

export default function Nav() {

  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const wrapperRef = useRef(null);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      closeOffcanvas();
    }
  };

  const toggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
    document.body.classList.toggle('no-scroll', showOffcanvas);
  };

  const closeOffcanvas = () => {
    setShowOffcanvas(false);
    document.body.classList.remove('no-scroll');
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
    <nav className="navbar">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><img src={Logo} alt="logo" /></a>
      <div className='navbar-items' data-testid="offcanvasNavbar">
          <ul>
            <li>
              <a href="#about-me">About</a>
            </li>
            <li>
            <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#Education">Education</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" onClick={toggleOffcanvas}></span>
      </button>
      <div ref={wrapperRef} className={`offcanvas offcanvas-end fadeOffcanvas${showOffcanvas ? ' show' : ''}`} tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <div></div>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={closeOffcanvas} target="off"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav flex-grow-1 pe-3">
              <li>
                <a href="#about-me" onClick={closeOffcanvas}>About</a>
              </li>
              <li>
                <a href="#experience" onClick={closeOffcanvas}>Experience</a>
              </li>
              <li>
                <a href="#Education" onClick={closeOffcanvas}>Education</a>
              </li>
              <li>
                <a href="#projects" onClick={closeOffcanvas}>Projects</a>
              </li>
              <li>
                <a href="#skills" onClick={closeOffcanvas}>Skills</a>
              </li>
              <li>
                <a href="#contact" onClick={closeOffcanvas}>Contact</a>
              </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  </>
  );
}

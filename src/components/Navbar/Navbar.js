import "./Navbar.css";
import { useState } from "react";
import Logo from "./logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Nav() {

  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const toggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  const closeOffcanvas = () => {
    setShowOffcanvas(false);
  };


  return (
    <nav class="navbar">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src={Logo} alt="logo" /></a>
      <div className='navbar-items'>
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
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" onClick={toggleOffcanvas}></span>
      </button>
      <div class={`offcanvas offcanvas-end${showOffcanvas ? ' show' : ''}`} tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <div></div>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={closeOffcanvas} target=""></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav flex-grow-1 pe-3">
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
  );
}

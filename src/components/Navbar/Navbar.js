import "./Navbar.css";
import { useState, useEffect, useRef } from "react";

export default function Nav() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const sideRef = useRef(null);
  

  useEffect(() => {
    let handler = (e) => {
      if (!sideRef.current.contains(e.target)) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener("mouseenter", handler);
    window.addEventListener("scroll", changeBackground);

    return () => {
      document.removeEventListener("mouseenter", handler);
    }

  }, []);

  return (
    <div className="nav">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <nav className={navbar ? "navbar active" : "navbar"}>
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
      </nav>
      {/* hamburger......................................................... */}
      <div id="hamburger" onClick={toggleSidebar}>
        <input
          id="checkbox2"
          type="checkbox"
          checked={sidebarOpen}
          onChange={() => setSidebarOpen(!sidebarOpen)}
        />
        <label className="toggle toggle2">
          <div id="bar4" className="bars"></div>
          <div id="bar5" className="bars"></div>
          <div id="bar6" className="bars"></div>
        </label>
        
        {/* sidebar........................................................... */}
        <div
          className={sidebarOpen ? "sidebar active" : "sidebar"}
          style={{
            position: sidebarOpen
              ? (document.body.style.overflow = "hidden")
              : (document.body.style.overflow = "visible")}}
            ref={sideRef}>

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
      </div>
    </div>
  );
}

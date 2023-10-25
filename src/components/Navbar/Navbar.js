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

  const sideRef = useRef();
  

  useEffect(() => {
    let handler = (e) => {
      if (!sideRef.current.contains(e.target)) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    window.addEventListener("scroll", changeBackground);

    return () => {
      document.removeEventListener("touchstart", handler);
      document.removeEventListener("mousedown", handler);
      window.removeEventListener("scroll", changeBackground);
    }

  }, []);

  return (
    <div className="nav">
      <nav className={navbar ? "navbar active" : "navbar"}>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
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

        <div
          className={sidebarOpen ? "sidebar active" : "sidebar"}
          style={{
            position: sidebarOpen
              ? (document.body.style.overflow = "hidden")
              : (document.body.style.overflow = "auto"),
          }}
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

import "./Lead.css";
import Pic from "./Profile.png";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

export default function Lead() {
  return (
    <div className="lead">
      <div className="welcome-lead">
        <div id="welcome-section">
          <img src={Pic} alt="Profile-Pic" />
          <h1>Chukesh Goud</h1>
          <h2>Front-End Developer</h2>
          <a href="portfolio-app\public\S Chukesh Goud- Resume.pdf" download="S Chukesh Goud- Resume.pdf">Download Resume</a>

          <div className="social">
            <a
              href="https://github.com/chukesh97"
              name="github"
              target="_blank"
            >
              <FaGithubSquare size={40} />
            </a>
            <a
              href="https://www.linkedin.com/in/s-chukesh-goud-84a33522a"
              name="LinkedIn"
              target="_blank"
            >
              <FaLinkedin size={40} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

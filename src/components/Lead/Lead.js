import "./Lead.css";
import svg from "../Lead/lead.svg";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

export default function Lead() {
  return (
      <div className="welcome-lead">
        <img src={svg} alt="svg" />
        <div id="welcome-section">
          <h1>Chukesh Goud</h1>
          <h2>Front-End Developer</h2>
          <a href="https://drive.google.com/file/d/16_3g7NZBhRZFBRCagFuBS4l75H_LUnSM/view?usp=sharing" target="/blank" download>Download Resume</a>

          <div className="social">
            <a
              href="https://github.com/chukesh97"
              name="github"
              aria-label="Go to Github"
              target="_blank"
            >
              <FaGithubSquare size={40} />
            </a>
            <a
              href="https://www.linkedin.com/in/s-chukesh-goud-84a33522a"
              name="LinkedIn"
              aria-label="Go to LinkedIn"
              target="_blank"
            >
              <FaLinkedin size={40} />
            </a>
          </div>
        </div>
      </div>
  );
}

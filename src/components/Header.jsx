import resume from "../assets/documents/Danny Duong Resume.pdf";
import { Link, NavLink } from "react-router-dom";

const PUBLIC_URL = process.env.PUBLIC_URL;
const IMAGES = PUBLIC_URL + "/assets/images";


const Header = () => {
  return (
    <header>
      <span className="logo-text">HecticKiwi</span>
      <nav className="links">
        <NavLink className="link" to="/">Home</NavLink>
        <NavLink className="link" to="projects">Projects</NavLink>
        <NavLink className="link" to="blog">Blog</NavLink>
        <Link className="link" to={resume} target="_blank">Resume</Link>
        <div className="social">
          <a className="link" href="https://github.com/HecticKiwi" target="_blank" rel="noreferrer"><img src={IMAGES + "/github.svg"} title="GitHub" alt="GitHub" /></a>
          <a className="link" href="https://linkedin.com/in/danny-duong-" target="_blank" rel="noreferrer"> <img src={IMAGES + "/linkedin.svg"} title="LinkedIn" alt="LinkedIn" /> </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
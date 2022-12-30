import resume from "../assets/documents/Danny Duong Resume.pdf";
import { motion } from 'framer-motion';
import { Link, NavLink } from "react-router-dom";

const PUBLIC_URL = process.env.PUBLIC_URL;
const IMAGES = PUBLIC_URL + "/assets/images";


const Header = () => {
  const links = [
    {
      label: "Home",
      to: "/"
    }, {
      label: "Projects",
      to: "projects"
    }, {
      label: "Blog",
      to: "blog"
    }
  ];

  return (
    <header>
      <span className="logo-text">HecticKiwi</span>
      <nav className="links">
        {links.map(({ label, to }, i) => (
          <NavLink className="link" to={to} end key={i}>
            {({ isActive }) =>
              <>
                <div>{label}</div>
                {isActive && <motion.div className="underline" layoutId="underline"></motion.div>}
              </>
            }
          </NavLink>
        ))}
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
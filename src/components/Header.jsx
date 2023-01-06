import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import resume from '../assets/documents/Danny Duong Resume.pdf';

const { PUBLIC_URL } = process.env;
const IMAGES = `${PUBLIC_URL}/assets/images`;

const links = [
  {
    label: 'Home',
    to: '/',
  }, {
    label: 'Projects',
    to: 'projects',
  }, {
    label: 'Blog',
    to: 'blog',
  },
].map((link, i) => ({ ...link, key: i }));

function Header() {
  return (
    <header>
      <Link to="/" className="link"><span className="logo-text">HecticKiwi</span></Link>
      <nav className="links">
        {links.map(({ label, to, key }) => (
          <NavLink className="link" to={to} end key={key}>
            {({ isActive }) => (
              <>
                <div>{label}</div>
                {isActive && <motion.div className="underline" layoutId="underline" />}
              </>
            )}
          </NavLink>
        ))}
        <a className="link" href={resume} target="_blank" rel="noreferrer">Resume</a>
        <div className="social">
          <a className="link" href="https://github.com/HecticKiwi" target="_blank" rel="noreferrer"><img src={`${IMAGES}/github.svg`} title="GitHub" alt="GitHub" /></a>
          <a className="link" href="https://linkedin.com/in/danny-duong-" target="_blank" rel="noreferrer"><img src={`${IMAGES}/linkedin.svg`} title="LinkedIn" alt="LinkedIn" /></a>
        </div>
        <img className="menu-toggle" src={`${IMAGES}/menu.svg`} alt="Navigation" />
      </nav>
    </header>
  );
}

export default Header;

import { motion } from 'framer-motion';

const PUBLIC_URL = process.env.PUBLIC_URL;
const IMAGES = PUBLIC_URL + "/assets/images";

const overlayVariants = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { duration: .5, type: "tween", ease: "easeInOut" }
  }
}

const imgVariants = {
  show: {
    filter: 'blur(5px)',
    transition: { duration: .25, type: "tween", ease: "easeInOut" }
  }
}

const Tile = ({ name, img, projectLink, sourceLink }) => {
  return (
    <figure className="project" >
      <motion.div className="image"
        initial='hide'
        whileHover='show'
      >
        <motion.img src={IMAGES + img} alt=""
        // variants={imgVariants}
        />
        <motion.div className="overlay"
        // variants={overlayVariants}
        >
          <a href={projectLink} target="_blank" className="link link--button" rel="noreferrer">Project</a>
          <a href={sourceLink} target="_blank" className="link link--button" rel="noreferrer">Source Code</a>
        </motion.div>
      </motion.div>
      <figcaption>{name}</figcaption>
    </figure>
  );
}

export default Tile;
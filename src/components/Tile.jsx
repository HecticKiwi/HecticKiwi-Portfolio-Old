import PropTypes from 'prop-types';

const { PUBLIC_URL } = process.env;
const IMAGES = `${PUBLIC_URL}/assets/images`;

const Tile = ({
  name, img, projectLink, sourceLink,
}) => (
  <figure className="project">
    <div className="image">
      <img src={IMAGES + img} alt="" />
      <div className="overlay">
        <a href={projectLink} target="_blank" className="link link--button" rel="noreferrer">Project</a>
        <a href={sourceLink} target="_blank" className="link link--button" rel="noreferrer">Source Code</a>
      </div>
    </div>
    <figcaption>{name}</figcaption>
  </figure>
);

Tile.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
  sourceLink: PropTypes.string.isRequired,
};

export default Tile;

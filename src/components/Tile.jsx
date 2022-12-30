const PUBLIC_URL = process.env.PUBLIC_URL;
const IMAGES = PUBLIC_URL + "/assets/images";

const Tile = ({ name, img, projectLink, sourceLink }) => {
  return (
    <figure className="project" >
      <div className="image" >
        <img src={IMAGES + img} alt="" />
        <div className="overlay" >
          <a href={projectLink} target="_blank" className="link link--button" rel="noreferrer">Project</a>
          <a href={sourceLink} target="_blank" className="link link--button" rel="noreferrer">Source Code</a>
        </div>
      </div>
      <figcaption>{name}</figcaption>
    </figure>
  );
}

export default Tile;
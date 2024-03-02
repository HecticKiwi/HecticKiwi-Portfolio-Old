import PropTypes, { string } from "prop-types";

const IMAGES = "/assets/images";

interface TileProps {
  name: string;
  img: string;
  projectLink: string;
  sourceLink: string;
}

const Tile = ({ name, img, projectLink, sourceLink }: TileProps) => {
  return (
    <figure className="project">
      <div className={`image${img.endsWith(".svg") ? " shrink" : ""}`}>
        <img src={IMAGES + img} alt="" />
        <div className="overlay">
          <a
            href={projectLink}
            target="_blank"
            className="link link--button"
            rel="noreferrer"
          >
            Project
          </a>
          <a
            href={sourceLink}
            target="_blank"
            className="link link--button"
            rel="noreferrer"
          >
            Source Code
          </a>
        </div>
      </div>
      <figcaption>{name}</figcaption>
    </figure>
  );
};
//
export default Tile;

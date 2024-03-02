import { Link } from "react-router-dom";
import Tile from "../components/Tile";

const IMAGES = "/assets/images";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="content">
          <div className="intro">
            <h1>Hi, I'm HecticKiwi.</h1>
            <p>
              My name is Danny and I'm currently studying software development
              at the{" "}
              <a
                className="link link--underline"
                href="https://www.ucalgary.ca/"
                target="_blank"
                rel="noreferrer"
              >
                University of Calgary
              </a>
              . In my free time, I try to expand my skillset by exploring
              various programming languages and tools.
            </p>
            <p>
              This is my old website. You can find my new site{" "}
              <a
                className="link link--underline"
                href="https://dannyduong.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              .
            </p>
          </div>
          <div className="pfp">
            <img src={`${IMAGES}/Spongebob.jpg`} alt="" />
          </div>
        </div>
      </section>
      <section className="projects">
        <h2>Here are some of my latest projects.</h2>
        <div className="content">
          <Tile
            name="Weather App"
            img="/weather-app.svg"
            projectLink="https://hectickiwi.github.io/Weather-App/"
            sourceLink="https://github.com/HecticKiwi/Weather-App/"
          />
          <Tile
            name="Battleship"
            img="/battleship.svg"
            projectLink="https://hectickiwi.github.io/Battleship/"
            sourceLink="https://github.com/HecticKiwi/Battleship/"
          />
          <Tile
            name="CV Builder"
            img="/cv-builder.svg"
            projectLink="https://hectickiwi.github.io/CV-Builder/"
            sourceLink="https://github.com/HecticKiwi/CV-Builder/"
          />
          <Tile
            name="Memory Game"
            img="/epic-seven-memory-game.svg"
            projectLink="https://hectickiwi.github.io/Epic-Seven-Memory-Game/"
            sourceLink="https://github.com/HecticKiwi/Epic-Seven-Memory-Game/"
          />
        </div>
        <p>
          You'll find more on my{" "}
          <Link to="projects" className="link link--button">
            projects
          </Link>{" "}
          page!
        </p>
      </section>
    </>
  );
}

export default Home;

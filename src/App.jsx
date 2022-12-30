const PUBLIC_URL = process.env.PUBLIC_URL;
const IMAGES = PUBLIC_URL + "/assets/images";

function App() {
  return (
    <>
      <header>
        <span className="logo-text">HecticKiwi</span>
        <nav className="links">
          <a className="link link--disabled" href="index.html">Home</a>
          <a className="link" href="projects.html">Projects</a>
          <a className="link" href="blog.html">Blog</a>
          <a className="link" href="./Danny Duong Resume.pdf" target="_blank">Resume</a>
          <div className="social">
            <a className="link" href="https://github.com/HecticKiwi" target="_blank" rel="noreferrer"><img src={IMAGES + "/github.svg"} title="GitHub" alt="GitHub" /></a>
            <a className="link" href="https://linkedin.com/in/danny-duong-" target="_blank" rel="noreferrer"> <img src={IMAGES + "/linkedin.svg"} title="LinkedIn" alt="LinkedIn" /> </a>
          </div>
        </nav>
      </header>
      <section className="hero">
        <div className="content">
          <div className="intro">
            <h1>Hi, I'm HecticKiwi.</h1>
            <p>
              My name is Danny and I'm currently studying software development at the University of Calgary. In my free
              time, I try to expand my skillset by exploring various programming languages and tools.
            </p>
          </div>
          <div className="pfp">
            <img src={IMAGES + "/Spongebob.jpg"} alt="" />
          </div>
        </div>
      </section>
      <section className="projects">
        <h2>Here are some of my latest projects.</h2>
        <div className="content">
          <figure className="project">
            <div className="image">
              <img src={IMAGES + "/weather-app.svg"} alt="" />
              <div className="overlay">
                <a href="https://hectickiwi.github.io/Weather-App/" target="_blank" className="link link--button" rel="noreferrer">Project</a>
                <a href="https://github.com/HecticKiwi/Weather-App" target="_blank" className="link link--button" rel="noreferrer">Source Code</a>
              </div>
            </div>
            <figcaption>Weather App</figcaption>
          </figure>
          <figure className="project">
            <div className="image">
              <img src={IMAGES + "/battleship.svg"} alt="" />
              <div className="overlay">
                <a href="https://hectickiwi.github.io/Battleship/" target="_blank" className="link link--button" rel="noreferrer">Project</a>
                <a href="https://github.com/HecticKiwi/Battleship" target="_blank" className="link link--button" rel="noreferrer">Source Code</a>
              </div>
            </div>
            <figcaption>Battleship</figcaption>
          </figure>
          <figure className="project">
            <div className="image">
              <img src={IMAGES + "/cv-builder.svg"} alt="" />
              <div className="overlay">
                <a href="https://hectickiwi.github.io/CV-Builder/" target="_blank" className="link link--button" rel="noreferrer">Project</a>
                <a href="https://github.com/HecticKiwi/CV-Builder" target="_blank" className="link link--button" rel="noreferrer">Source Code</a>
              </div>
            </div>
            <figcaption>CV Builder</figcaption>
          </figure>
          <figure className="project">
            <div className="image">
              <img src={IMAGES + "/epic-seven-memory-game.svg"} alt="" />
              <div className="overlay">
                <a href="https://hectickiwi.github.io/Epic-Seven-Memory-Game/" target="_blank" className="link link--button" rel="noreferrer">Project</a>
                <a href="https://github.com/HecticKiwi/Epic-Seven-Memory-Game" target="_blank" className="link link--button" rel="noreferrer">Source Code</a>
              </div>
            </div>
            <figcaption>Memory Game</figcaption>
          </figure>
        </div>
        <p>
          You'll find more on my <a href="projects.html" className="link link--button">projects</a> page!
        </p>
      </section>
    </>

  );
}

export default App;

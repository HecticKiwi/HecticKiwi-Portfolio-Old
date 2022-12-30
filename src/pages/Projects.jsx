import Tile from "../components/Tile";

const Projects = () => {
  return (
    <>
      <section className="projects">
        <h1>Web Development</h1>
        <div className="content">
          <Tile
            name="Memory Game"
            img="/epic-seven-memory-game.svg"
            projectLink="https://hectickiwi.github.io/Epic-Seven-Memory-Game/"
            sourceLink="https://github.com/HecticKiwi/Epic-Seven-Memory-Game/"
          />
          <Tile
            name="CV Builder"
            img="/cv-builder.svg"
            projectLink="https://hectickiwi.github.io/CV-Builder/"
            sourceLink="https://github.com/HecticKiwi/CV-Builder/"
          />
          <Tile
            name="Battleship"
            img="/battleship.svg"
            projectLink="https://hectickiwi.github.io/Battleship/"
            sourceLink="https://github.com/HecticKiwi/Battleship/"
          />
          <Tile
            name="Weather App"
            img="/weather-app.svg"
            projectLink="https://hectickiwi.github.io/Weather-App/"
            sourceLink="https://github.com/HecticKiwi/Weather-App/"
          />
          <Tile
            name="Todo List"
            img="/task-line-light.svg"
            projectLink="https://hectickiwi.github.io/Todo-List/"
            sourceLink="https://github.com/HecticKiwi/Todo-List/"
          />
          <Tile
            name="Restaurant Page"
            img="/restaurant-2-line.svg"
            projectLink="https://hectickiwi.github.io/Restaurant-Page/"
            sourceLink="https://github.com/HecticKiwi/Restaurant-Page/"
          />
          <Tile
            name="Tic-tac-toe"
            img="/tic-tac-toe.svg"
            projectLink="https://hectickiwi.github.io/Tic-tac-toe/"
            sourceLink="https://github.com/HecticKiwi/Tic-tac-toe/"
          />
          <Tile
            name="Library"
            img="/book-line.svg"
            projectLink="https://hectickiwi.github.io/Library/"
            sourceLink="https://github.com/HecticKiwi/Library/"
          />
          <Tile
            name="Dashboard"
            img="/dashboard-line.svg"
            projectLink="https://hectickiwi.github.io/Dashboard/"
            sourceLink="https://github.com/HecticKiwi/Dashboard/"
          />
          <Tile
            name="Sign-up Form"
            img="/clipboard-line.svg"
            projectLink="https://hectickiwi.github.io/Sign-up-Form/"
            sourceLink="https://github.com/HecticKiwi/Sign-up-Form/"
          />
          <Tile
            name="Calculator"
            img="/calculator-line.svg"
            projectLink="https://hectickiwi.github.io/Calculator/"
            sourceLink="https://github.com/HecticKiwi/Calculator/"
          />
          <Tile
            name="Etch-a-Sketch"
            img="/brush-line.svg"
            projectLink="https://hectickiwi.github.io/Etch-a-Sketch/"
            sourceLink="https://github.com/HecticKiwi/Etch-a-Sketch/"
          />
          <Tile
            name="Rock Paper Scissors"
            img="/scissors-line.svg"
            projectLink="https://hectickiwi.github.io/Rock-Paper-Scissors/"
            sourceLink="https://github.com/HecticKiwi/Rock-Paper-Scissors/"
          />
        </div>
        <p>
          These projects were completed as part of <a href="https://www.theodinproject.com/" className="link link--button" target="_blank" rel="noopener noreferrer">The Odin Project</a>'s curriculum.
        </p>
      </section>
      <section className="projects">
        <h1>C++</h1>
        <div className="content">
          <Tile
            name="Asteroids"
            img="/asteroids.png"
            projectLink="https://hectickiwi.itch.io/raylib-asteroids"
            sourceLink="https://github.com/HecticKiwi/Asteroids"
          />
          <Tile
            name="Circle Pong"
            img="/circle_pong.png"
            projectLink="https://hectickiwi.itch.io/circle-pong"
            sourceLink="https://github.com/HecticKiwi/Circle-Pong"
          />
        </div>
      </section>
      <section className="projects">
        <h1>Scratch</h1>
        <div className="content">
          <Tile
            name="osu! Standard"
            img="/osu_standard.png"
            projectLink="https://scratch.mit.edu/projects/320375459/"
            sourceLink="https://scratch.mit.edu/projects/320375459/editor"
          />
          <Tile
            name="osu! Mania"
            img="/osu_mania.png"
            projectLink="https://scratch.mit.edu/projects/379169248/"
            sourceLink="https://scratch.mit.edu/projects/379169248/editor"
          />
          <Tile
            name="Don't Press the Button"
            img="/don't_press_the_button.png"
            projectLink="https://scratch.mit.edu/projects/66996900/"
            sourceLink="https://scratch.mit.edu/projects/66996900/editor"
          />
          <Tile
            name="Piano Tiles"
            img="/piano_tiles.png"
            projectLink="https://scratch.mit.edu/projects/204592243/"
            sourceLink="https://scratch.mit.edu/projects/204592243/editor"
          />
          <Tile
            name="Running in the 90's (With Sanic the Heghog)"
            img="/running_in_the_90s.png"
            projectLink="https://scratch.mit.edu/projects/51773916/"
            sourceLink="https://scratch.mit.edu/projects/51773916/editor"
          />
          <Tile
            name="Speed-Type the Alphabet"
            img="/speed-type-the-alphabet.png"
            projectLink="https://scratch.mit.edu/projects/55063876/"
            sourceLink="https://scratch.mit.edu/projects/55063876/editor"
          />
          <Tile
            name="Bad Apple Remade With Music Blocks"
            img="/bad_apple.png"
            projectLink="https://scratch.mit.edu/projects/206959915/"
            sourceLink="https://scratch.mit.edu/projects/206959915/editor"
          />
          <Tile
            name="Arrow Rush!"
            img="/arrow_rush.png"
            projectLink="https://scratch.mit.edu/projects/99136922/"
            sourceLink="https://scratch.mit.edu/projects/99136922/editor"
          />
        </div>
        <p>
          See my Scratch profile and the rest of my projects <a href="https://scratch.mit.edu/users/timhortonsyo/" className="link link--button" target="_blank" rel="noopener noreferrer">here</a>.
        </p>
      </section>
    </>
  );
}

export default Projects;
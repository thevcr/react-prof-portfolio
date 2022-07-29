import React from "react";
import Carousel from "react-bootstrap/Carousel";
import ventApp from "../../assets/projects/vent-app-preview.png";
import weatherByDay from "../../assets/projects/weather-by-day.png";
import codeQuiz from  "../../assets/projects/coding-quiz-screenshot.png";
import passwordGen from  "../../assets/projects/password-gen.png";
import watchlistApp from "../../assets/projects/watchlist-app-screenshot.png"
import horiseon from "../../assets/projects/horiseon-web-screenshot.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

function Project() {
  return (
    <Carousel variant="dark">
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={ventApp}
          alt="Three text blocks with comments underneath"
        />
        <Carousel.Caption>
          <h3>Vent</h3>
          <p >An app that lets you vent as you please. <br/><a href="https://github.com/thevcr/vent-app" className="btn btn-primary btn-sm mt-auto">Vent
                    on <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon></a></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={weatherByDay}
          alt="App showing partial map and input for city search"
        />
        <Carousel.Caption>
          <h3>Weather By Day</h3>
          <p>An app that looks up the weather at a certain date in the past within the range of an available data set. <br/><a href="https://github.com/abel-baker/weather-by-day" className="btn btn-primary btn-sm mt-auto">Weather By Day
                    on <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon></a></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={codeQuiz}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Code Quiz</h3>
          <p>
          A no-thrills timed code quiz with random coding questions. <br/><a href="https://github.com/thevcr/code-quiz" className="btn btn-primary btn-sm mt-auto">Code Quiz
                    on <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon></a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={passwordGen}
          alt="Screenshot of website with title 'Password Generator', an input with a generated password, and a button that says 'Generate Password'"
        />
        <Carousel.Caption>
          <h3>Password Generator</h3>
          <p>
          This site prompts the user to choose which characters they want in their password. <br/><a href="https://github.com/thevcr/password-generator" className="btn btn-primary btn-sm mt-auto">Password Generator
                    on <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon></a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={watchlistApp}
          alt="Screenshot of website with title 'Welcome to Watch List', and three panels, one with a move reel and some text, another with a magnifying glass and some text, and a floppy disk and some text"
        />
        <Carousel.Caption>
          <h3>Watchlist app</h3>
          <p>
          Your own watchlist so you don't have to worry about what to watch. <br/><a href="https://github.com/thevcr/watchlist-app" className="btn btn-primary btn-sm mt-auto">Watchlist App
                    on <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon></a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={horiseon}
          alt="Multiple people around a table discussing"
        />
        <Carousel.Caption>
          <h3>Horiseon refactor</h3>
          <p>
          A marketing agency website focused on search engine optimization (SEO). <br/><a href="https://github.com/thevcr/horiseon" className="btn btn-primary btn-sm mt-auto">Watchlist App
                    on <FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon></a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Project;

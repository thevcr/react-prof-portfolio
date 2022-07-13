import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="section footer">
      <footer className="footer-div p-1">
            <a href="test@example.com"><FontAwesomeIcon icon={faSquareEnvelope} className="px-3"/></a>
            <a href="https://github.com/thevcr"><FontAwesomeIcon icon={faGithubSquare} className="px-3"/></a>
            <a href="https://www.linkedin.com/in/veronica-r-97502961"><FontAwesomeIcon icon={faLinkedin} className="px-3" /></a>
      </footer>
    </div>
  );
}

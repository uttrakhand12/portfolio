import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">
              Komal Gururani </span>
            from <span className="purple"> Uttarakhand, India.</span>
            <br /> I am a second year student pursuing Bachelors in Computer Applications(BCA)
             at Indra Gandhi National University(IGNOU)
            <br />
            Additionally, I am currently on Full-stack Developer
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Website Design
            </li>
            <li className="about-activity">
              <ImPointRight /> Editing
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Komal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

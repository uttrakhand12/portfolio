import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import rent from "../../Assets/Projects/rent.png";

import Recipe from "../../Assets/Projects/recipe.png";
import calculator from "../../Assets/Projects/calc.png";
import register from "../../Assets/Projects/sign.png";
import Google from "../../Assets/Projects/google.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="Calculator"
              
              ghLink="https://github.com/komalgururani1/calculator"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Google}
              isBlog={false}
              title="Google Clone"
              ghLink="https://github.com/komalgururani1/googleclone"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Recipe}
              isBlog={false}
              title="recipe sharing website"
             
              ghLink="https://github.com/komalgururani1/recipe-website"
                          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rent}
              isBlog={false}
              title="Rent website"
              
              ghLink="https://github.com/komalgururani1/RentHub"
           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={register}
              isBlog={false}
              title="Sign-up page"
             
              ghLink="https://github.com/komalgururani1/login-form"

            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

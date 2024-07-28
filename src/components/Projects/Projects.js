import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import calculator from "../../Assets/Projects/calculator.png";
import rendom from "../../Assets/Projects/rendom colour.png";
import analog from "../../Assets/Projects/analogclock.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a three projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={analog}
              isBlog={false}
              title="ANALOG CLOCK"
              description="It is a device that displays the current time using moving hands and a circular dial marked with hours, minutes, and sometimes seconds. It's called “analog” because it represents time through continuous, physical motion, as opposed to digital clocks that use numerical displays."
              ghLink="https://github.com/PRAVEEN2421/ANALOGCLOCK"
              demoLink="https://praveen2421.github.io/ANALOGCLOCK/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rendom}
              isBlog={false}
              title="RANDOM COLOUR CHANGE"
              description="this is my rendom background colour change assignment  "
              ghLink="https://github.com/PRAVEEN2421/RANDOM-COLOR"
              demoLink="https://praveen2421.github.io/RANDOM-COLOR/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="STUDENT CALCULATOR"
              description="This blog is your comprehensive guide to how to calculate percentage of marks and equipping you with the skills to compute your percentage of marks effortlessly. By the conclusion, you’ll emerge as a proficient percentage calculator, armed with the knowledge to navigate the academic landscape easily!"
              ghLink="https://github.com/PRAVEEN2421/STCalculator"
              demoLink=" https://praveen2421.github.io/STCalculator/"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

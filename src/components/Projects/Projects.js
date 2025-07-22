import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { motion } from "framer-motion";
import booksamsys from "../../Assets/Projects/booksamsys.svg";
import robdronego from "../../Assets/Projects/robdronego.png";
import connectly from "../../Assets/Projects/connectly.png";
import schoolportal from "../../Assets/Projects/schoolportal.jpg";
import neurohr from "../../Assets/Projects/neurohr.avif";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 2, y: 0 }}
          transition={{ duration: 3 }}
          >
        <Container>
        <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={neurohr}
                title="NeuroHR"
                description="A Human Resource Management System built with Java. It provides features like employee management, vacation tracking and performance evaluation."
                ghLink="https://github.com/joaodiniscosta/neuroHR"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={robdronego}
                title="RobDroneGo"
                description="A drone control application that allows teachers and school staff to control a drone/robot using a web interface. It features real-time video streaming, list of tasks and telemetry data display."
                ghLink="https://github.com/joaodiniscosta/RobDroneGo"
              />
            </Col>
            
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={connectly}
                title="Connectly"
                description="A a real-time chat application built with React and Firebase, designed for group communication. It features secure Google authentication, responsive design, and seamless messaging. Ideal for teams and communities to stay connected effortlessly."
                ghLink="https://github.com/joaodiniscosta/connectly"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={booksamsys}
                title="Book Samsys"
                description="A book management system built with React and Node.js. It allows users to search and manage books easily."
                ghLink="https://github.com/joaodiniscosta/BookSamsys"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={schoolportal}
                title="School Portal"
                description="A school portal that streamlines administrative tasks, enhances communication between teachers and students and provides a centralized platform for managing academic resources and classes."
                ghLink="https://github.com/joaodiniscosta/sem4pi-23-23"
              />
            </Col>
          </Row>
        </Container>
      </motion.div>
    </Container>
  );
}

export default Projects;

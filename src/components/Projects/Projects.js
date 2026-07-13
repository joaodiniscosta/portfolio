import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { motion } from "framer-motion";
import sentinelweb from "../../Assets/Projects/sentinelweb.png";
import robdronego from "../../Assets/Projects/robdronego.png";
import justnext from "../../Assets/Projects/justnext.png";
import smartheadlines from "../../Assets/Projects/smartheadlines.png";
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
                imgPath={justnext}
                title="JustNext"
                description="A minimalist, cloud-connected Todo Application designed to help you focus on your immediate tasks. Built with Python, Streamlit and Supabase."
                ghLink="https://github.com/joaodiniscosta/JustNext"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={sentinelweb}
                title="SentinelWeb"
                description="A Google Chrome extension, for passive real-time auditing of HTTP security headers alongside active validation of the cryptographic integrity of external resources SRI."
                ghLink="https://github.com/joaodiniscosta/SentinelWeb"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={smartheadlines}
                title="Smart Headlines"
                description="A Python automation tool that delivers a modern, beautifully designed daily news digest directly to your inbox."
                ghLink="https://github.com/joaodiniscosta/SmartHeadlines"
              />
            </Col>

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
          </Row>
        </Container>
      </motion.div>
    </Container>
  );
}

export default Projects;

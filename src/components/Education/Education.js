import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import EducationCard from "./EducationCard";
import { motion } from "framer-motion";

function Education() {
  return (
    <Container fluid className="education-section">
      <Particle />
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 2, y: 0 }}
            transition={{ duration: 3 }}
        >
        <Container style={{
                justifyContent: "center",
                }}>
                <h1 className="education-section" style={{ fontSize: "2.6em" }}>
                Academic <strong className="purple">Journey</strong>
                </h1>

                <EducationCard />

                <h1 className="education-section" style={{ fontSize: "2.6em", paddingTop: "-2%" }}>
                Continuous <strong className="purple">Learning</strong>
                </h1>
                
                <Row style={{ justifyContent: "center"}}>
                <Col md={12} className="education-description">
                    <p>I am committed to <span className="purple">continuous learning</span>, currently focusing on integrating <span className="purple">AI</span> and <span className="purple">machine learning</span> into <span className="purple">cybersecurity</span> and <span className="purple">software development</span>, while deepening my knowledge of <span className="purple">blockchain technologies</span> and <span className="purple">distributed systems</span>.</p> 
                    <br />
                    <p>Professionally, I aim to enhance my <span className="purple">leadership</span> and <span className="purple">team management</span> capabilities through targeted training. </p>
                    <br />
                    <p>Additionally, I am passionate about <span className="purple">innovation management</span>, striving to lead the adoption of emerging technologies that drive impactful change and create competitive advantages within organizations.</p>
                    <br />
                </Col>

                </Row>
            </Container>
        </motion.div>
    </Container>
  );
}

export default Education;
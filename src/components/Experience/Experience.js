import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCard";
import { motion } from "framer-motion";

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Particle />
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 2, y: 0 }}
            transition={{ duration: 3 }}
        >
        <Container style={{
                justifyContent: "center",
                }}>
                <h1 className="experience-section" style={{ fontSize: "2.6em" }}>
                Professional <strong className="purple">Experience</strong>
                </h1>

                <ExperienceCard />
                <h1 className="education-section" style={{ fontSize: "2.6em" }}>
                    Other <strong className="purple">Professional Experience</strong>
                </h1>
                                
                <Row style={{ justifyContent: "center"}}>
                    <Col md={12} className="education-description">
                        <p>Beyond software engineering, I’ve taken on roles that helped shape my <span className="purple">adaptability</span> and <span className="purple">growth</span> mindset as a professional. At 18, I worked in <span className="purple">catering</span>, <span className="purple">providing table</span> and <span className="purple">bar service</span> at events. An experience that taught me how to stay <span className="purple">composed</span> under pressure, <span className="purple">communicate clearly</span> and <span className="purple">deliver consistent quality</span> in fast-paced environments.</p>
                        <br />
                        <p>After completing my degree, I moved to <span className="purple">Germany</span> for an <span className="purple">internship</span> in a food production company. There, I <span className="purple">monitored</span> and <span className="purple">ensured</span> the quality of a stamping software system used on packaging lines. This gave me insight into the intersection between software and industrial operations.</p>
                        <br />
                        <p>These experiences enhanced my <span className="purple">teamwork</span>, <span className="purple">problem-solving</span> and <span className="purple">resilience</span>, qualities that continue to support my work as an engineer today.</p>
                        <br />
                    </Col>
                </Row>
            </Container>
        </motion.div>
    </Container>
  );
}

export default Experience;
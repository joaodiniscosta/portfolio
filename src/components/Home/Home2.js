import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 2, y: 0 }}
                    transition={{ duration: 3 }}
              >
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm João Dinis Costa, a 22-year-old software engineer with a passion for creating transformative digital solutions that drive business success. Currently based in Porto, Portugal, I bring a unique blend of
              <b className="purple"> technical leadership, cybersecurity expertise</b>
               {" "} and{" "}
              <b className="purple"> business process optimization</b>
              {" "} to every project I touch.
              <br />
              <br />
              As a  
                <b className="purple"> Tech Lead managing 15+ developers </b>
               at Deloitte, I've proven my ability to scale teams, architect robust solutions, and deliver high-impact applications serving over 30,000 daily users. My journey combines deep technical knowledge with strategic business thinking, always focused on creating solutions that genuinely improve how people and organizations operate.
              <br />
              <br />
              I thrive in challenging environments where I can leverage my expertise in  
              <b className="purple"> low-code platforms, cybersecurity </b>
               and
              <b className="purple"> full-stack development </b>
               while continuously expanding my skillset. My academic background in Computer Engineering, combined with my ongoing Master's in Cybersecurity, positions me at the forefront of both software development and security innovation.

            </p>
          </Col>
        </Row>
        </motion.div>
      </Container>
    </Container>
  );
}
export default Home2;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <Row>
            <Col md={12} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                I'm João Dinis Costa, a Software Engineer and Team Lead based in Porto. 
                My professional path is defined by a blend of <b className="purple">technical precision</b> and 
                <b className="purple"> human-centric leadership</b>, shaped by diverse experiences—from programming industrial machines in Germany to managing high-stakes teams at Deloitte.
                <br />
                <br />
                As a Team Lead, I oversee the evolution of low-code applications supporting over 30,000 active users. 
                I thrive in environments where I can leverage my expertise in <b className="purple">ServiceNow, cybersecurity, </b> 
                and <b className="purple">full-stack development</b> to build robust, scalable solutions.
                <br />
                <br />
                My background in Informatics Engineering, complemented by an ongoing Master’s in <b className="purple">Cybersecurity</b>, 
                fuels my drive to create digital products that are not only efficient but fundamentally secure. 
                I believe that true innovation happens at the intersection of continuous technical learning and the soft skills 
                honed through a journey that goes well beyond the screen.
              </p>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </Container>
  );
}
export default Home2;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/me.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { motion } from "framer-motion";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 2, y: 0 }}
            transition={{ duration: 3 }}
      >
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> JOÃO DINIS COSTA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5}style={{ paddingBottom: 10 }}>
                <img className="neon-photo-container"
                  src={homeLogo}
                  alt="Home Pic"
                />
            </Col>
          </Row>
          </motion.div>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;

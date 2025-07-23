import { useState } from "react";
import EducationOverlay from "./EducationOverlay";
import EducationItem from "./EducationItem";
import { AnimatePresence } from "framer-motion";
import { Col, Row } from "react-bootstrap";

function EducationCard() {
  const [openOverlay, setOpenOverlay] = useState(null);

  const masterSpecializations = [
    { title: "Advanced Network Security & Architecture", detail: "Designing and implementing security infrastructures, including intrusion detection systems and network segmentation strategies." },
    { title: "Cryptography & Secure Communications", detail: "Implementing modern encryption standards and designing secure communication protocols." },
    { title: "Cloud Security Architecture", detail: "Securing multi-cloud environments and implementing zero-trust security models." }
  ];

  const bachelorSpecializations = [
    { title: "Advanced Software Architecture", detail: "Mastered enterprise design patterns, microservices architecture and scalable system design principles." },
    { title: "Agile Development Methodologies", detail: "Extensive experience with Scrum and DevOps practices in team-based development environments." },
    { title: "Relational Database Design", detail: "Designed and optimized complex database schemas for high-performance applications." },
    { title: "Full-Stack Web Development", detail: "Created responsive web applications using modern JavaScript frameworks, RESTful APIs and cloud deployment strategies." }
  ];

  return (
    <div style={{ position: "relative" }}>
      
      <Row>
        <Col md={6}>
          <EducationItem
            degree="Master's Degree in Cybersecurity"
            institution="ISEP"
            dates="Set 2024 - Present"
            description="Currently pursuing advanced studies that position me at the forefront of enterprise cybersecurity and secure system design. This rigorous program combines cutting-edge theoretical knowledge with intensive hands-on practical experience in real-world security scenarios."
            onShowSpecializations={() => setOpenOverlay("master")}
          />
        </Col>
        <Col md={6}>
          <EducationItem
            degree="Bachelor's Degree in Software Engineering"
            institution="ISEP"
            dates="Set 2021 - Jun 2024"
            description="Graduated with distinction having built a comprehensive foundation in software development, systems architecture, and database management. This intensive program provided both deep theoretical knowledge and extensive practical experience across the complete software development lifecycle.."
            onShowSpecializations={() => setOpenOverlay("bachelor")}
          />
        </Col>
      </Row>

      <AnimatePresence>
        {openOverlay === "master" && (
          <EducationOverlay
            specializations={masterSpecializations}
            onClose={() => setOpenOverlay(null)}
            side="left"
          />
        )}
        {openOverlay === "bachelor" && (
          <EducationOverlay
            specializations={bachelorSpecializations}
            onClose={() => setOpenOverlay(null)}
            side="right"
          />
        )}
      </AnimatePresence>

      <Row style={{
              justifyContent: "center",
            }}>
        <h1 className="education-section" style={{ fontSize: "2.6em", paddingBottom: "20px" }}>
          Professional <strong className="purple">Certifications</strong>
        </h1>
          <Col md={4}>
            <EducationItem
              degree="Ethical Hacking Certification"
              institution="Cisco"
              dates="2025"
              description="Penetration testing and security audit methodologies (OWASP, NIST)."
            />
          </Col>
          <Col md={4}>
            <EducationItem
              degree="The Complete Cyber Security Course"
              institution="Udemy"
              dates="2025"
              description="Advanced cybersecurity principles and enterprise security implementation."
            />
          </Col>
          <Col md={4}>
            <EducationItem
              degree="Blockchain A-Z"
              institution="Udemy"
              dates="2025"
              description="Comprehensive blockchain development and distributed systems architecture."
            />
          </Col>
          </Row>
          <Row style={{ justifyContent: "center", paddingTop: "10px", paddingBottom: "30px" }}>
          <Col md={4}>
            <EducationItem
              degree="Certified System Administrator"
              institution="ServiceNow"
              dates="2024"
              description="ServiceNow ITSM processes and business process optimization"
            />
          </Col>
            <Col md={4}>
            <EducationItem
              degree="Digital Marketing"
              institution="Miles in the Sky"
              dates="2024"
              description="User analytics, conversion optimization and technical product marketing"
            />
          </Col>
          <Col md={4}>
            <EducationItem
              degree="No-Code Development"
              institution="NoCode Institute.io"
              dates="2024"
              description="Enterprise low-code platforms and workflow automation mastery"
            />
            </Col>
            </Row>
            <Row style={{ justifyContent: "center", paddingTop: "10px", paddingBottom: "30px" }}>
          <Col md={4}>
            <EducationItem
              degree="Personal Finance"
              institution="Magma Studio"
              dates="2024"
              description="Strategic financial planning & risk management for technology investments"
            />
            </Col>
          <Row/>
        </Row>
    </div>
  );
}

export default EducationCard;

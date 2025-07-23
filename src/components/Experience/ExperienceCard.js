import { useState } from "react";
import ExperienceOverlay from "../Education/EducationOverlay";
import ExperienceItem from "../Education/EducationItem";
import { AnimatePresence } from "framer-motion";
import { Col, Row } from "react-bootstrap";

function ExperienceCard() {
  const [openOverlay, setOpenOverlay] = useState(null);

  const deloitte1Specializations = [
    {
      title: "ServiceNow Platform Maintenance",
      detail: "Performed updates, bug fixes and configuration adjustments in a deeply customized ServiceNow instance used by thousands of users daily.",
    },
    {
      title: "ITSM & Workflow Automation",
      detail: "Worked with ServiceNow IT Service Management modules and automated key workflows to improve process efficiency and reduce manual effort.",
    },
    {
      title: "Platform Debugging & Performance Tuning",
      detail: "Diagnosed complex issues and optimized system behavior to maintain platform stability and responsiveness under high load.",
    }
  ];


  const deloitte2Specializations = [
    {
      title: "Enterprise Architecture & Governance",
      detail: "Architected scalable, maintainable low-code platforms supporting 30k+ users and enterprise integration patterns.",
    },
    {
      title: "Cross-Functional Team Leadership",
      detail: "Led a multidisciplinary team of 15 developers, overseeing Agile delivery cycles, mentoring junior engineers and driving innovation across sprints.",
    },
    {
      title: "User Experience Optimization",
      detail: "Improved platform usability and adoption through performance tuning, intuitive UI design and data-driven UX testing strategies.",
    }
  ];



  const samsysSpecializations = [
    {
      title: "Full-Stack Application Development",
      detail: "Built modern web apps with React, Node.js, and Express, ensuring responsive design and clean architecture.",
    },
    {
      title: "Database Optimization",
      detail: "Designed efficient database schemas in MySQL, focusing on indexing and query performance.",
    },
    {
      title: "API Design & Integration",
      detail: "Developed and consumed RESTful APIs to connect front-end applications with back-end services.",
    },
    {
      title: "Agile & DevOps Exposure",
      detail: "Participated in daily stand-ups and CI/CD workflows, gaining experience with GitLab pipelines and deployment automation.",
    }
  ];


  return (
    <div style={{ position: "relative" }}>
      
      <Row>
        <Col md={4}>
          <ExperienceItem
            degree="Service Management Tech Lead"
            institution="Deloitte"
            dates="May 2025 - Present"
            description="Leading a cross-functional team of 15 developers in the evolution of a mission-critical low-code application that processes over 30,000 daily active users across multiple business verticals. This enterprise-grade platform has been in continuous production for 7+ years, requiring sophisticated architecture decisions and seamless user experience optimization."
            onShowSpecializations={() => setOpenOverlay("deloitte2")}
          />
        </Col>
        <Col md={4}>
          <ExperienceItem
            degree="Software Analyst"
            institution="Deloitte"
            dates="Set 2024 - May 2025"
            description="Worked on the maintenance and evolution of a highly customized ServiceNow instance serving thousands of users across multiple departments. Involved in diagnosing complex issues, implementing enhancements, and ensuring system performance and reliability within a fast-paced enterprise environment."
            onShowSpecializations={() => setOpenOverlay("deloitte1")}
          />
        </Col>
        <Col md={4}>
          <ExperienceItem
            degree="Full-Stack Intern Developer"
            institution="Samsys"
            dates="Set 2024 - Set 2025"
            description="Contributed to the development of an innovative business automation platform designed to revolutionize how SMEs approach digital transformation. This responsive web application centralized multiple business processes into a single, intuitive interface."
            onShowSpecializations={() => setOpenOverlay("samsys")}
          />
        </Col>
      </Row>

      <AnimatePresence>
        {openOverlay === "deloitte2" && (
          <ExperienceOverlay
            specializations={deloitte2Specializations}
            onClose={() => setOpenOverlay(null)}
            side="left"
          />
        )}
        {openOverlay === "deloitte1" && (
          <ExperienceOverlay
            specializations={deloitte1Specializations}
            onClose={() => setOpenOverlay(null)}
            side="center"
          />
        )}
        {openOverlay === "samsys" && (
          <ExperienceOverlay
            specializations={samsysSpecializations}
            onClose={() => setOpenOverlay(null)}
            side="right"
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default ExperienceCard;

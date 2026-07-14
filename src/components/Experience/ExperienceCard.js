import { useState } from "react";
import ExperienceOverlay from "../Education/EducationOverlay";
import ExperienceItem from "../Education/EducationItem";
import { AnimatePresence } from "framer-motion";
import { Col, Row } from "react-bootstrap";

function ExperienceCard() {
  const [openOverlay, setOpenOverlay] = useState(null);

  const teamLeaderSpecializations = [
    {
      title: "Team Leadership",
      detail: "Lead a technical team of 15 developers, overseeing the evolution of a low-code application supporting over 30,000 active users.",
    },
    {
      title: "Strategic Roadmap",
      detail: "Define technical roadmaps in collaboration with Product Owners, ensuring alignment with strategic business objectives.",
    },
    {
      title: "Mentorship & Growth",
      detail: "Promote technical excellence by mentoring junior engineers and fostering a culture of continuous learning and high-quality code standards.",
    },
    {
      title: "Process Optimization",
      detail: "Streamline GBS processes and instance transitions to ensure operational stability and efficiency during critical project phases.",
    }
  ];

  const techAnalystSpecializations = [
    {
      title: "Platform Evolution",
      detail: "Contributed to the evolution of a platform by integrating new features based on monitoring and user feedback.",
    },
    {
      title: "Incident Management",
      detail: "Proactively resolved technical bottlenecks and system incidents, improving software development lifecycle efficiency.",
    },
    {
      title: "Functional Specification",
      detail: "Translated complex business requirements into detailed technical specifications, ensuring high-quality implementation in ServiceNow.",
    },
    {
      title: "Performance Tuning",
      detail: "Analyzed system performance metrics to identify and mitigate risks, ensuring a responsive user experience under high load.",
    }
  ];

  const fullStackSpecializations = [
    {
      title: "Full-Stack Development",
      detail: "Directly collaborated with clients to deliver tailored solutions and created two new modules for an existing platform.",
    },
    {
      title: "Client Requirements",
      detail: "Engaged directly with clients to identify needs and deliver custom solutions that effectively bridged business gaps.",
    },
    {
      title: "System Integration",
      detail: "Implemented modular enhancements to existing platforms, focusing on clean architecture and maintainability.",
    }
  ];

  return (
    <div style={{ position: "relative" }}>
      <Row className="g-3">
        <Col xs={12} md={4}>
          <ExperienceItem
            degree="Team Leader (ServiceNow)"
            institution="Deloitte"
            dates="2026 - Present"
            description="Lead a technical team of 15 developers, overseeing the evolution of a low-code application supporting over 30,000 active users."
            onShowSpecializations={() => setOpenOverlay("teamLeader")}
          />
        </Col>
        <Col xs={12} md={4}>
          <ExperienceItem
            degree="Tech Analyst (ServiceNow)"
            institution="Deloitte"
            dates="2024 - 2026"
            description="Contributed to the evolution of a platform by integrating new features based on monitoring and user feedback."
            onShowSpecializations={() => setOpenOverlay("techAnalyst")}
          />
        </Col>
        <Col xs={12} md={4}>
          <ExperienceItem
            degree="Full-Stack Developer (JavaScript and .NET)"
            institution="Samsys"
            dates="2024"
            description="Directly collaborated with clients to deliver tailored solutions and created two new modules for an existing platform."
            onShowSpecializations={() => setOpenOverlay("fullStack")}
          />
        </Col>
      </Row>

      <AnimatePresence>
        {openOverlay === "teamLeader" && (
          <ExperienceOverlay
            specializations={teamLeaderSpecializations}
            onClose={() => setOpenOverlay(null)}
            side="left"
          />
        )}
        {openOverlay === "techAnalyst" && (
          <ExperienceOverlay
            specializations={techAnalystSpecializations}
            onClose={() => setOpenOverlay(null)}
            side="center"
          />
        )}
        {openOverlay === "fullStack" && (
          <ExperienceOverlay
            specializations={fullStackSpecializations}
            onClose={() => setOpenOverlay(null)}
            side="right"
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default ExperienceCard;
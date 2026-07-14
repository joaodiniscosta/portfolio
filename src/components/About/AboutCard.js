import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">João Dinis Costa </span>
            from <span className="purple">Vila Nova de Famalicão, Portugal.</span>
            <br />
            <br />
            I am a Software Engineer and Team Leader specializing in <span className="purple">ServiceNow</span> and <span className="purple">Full-Stack development</span>. I bridge the gap between complex requirements and secure, user-centered digital solutions. My technical approach is grounded in a practical, human-centric mindset, heavily shaped by my diverse background.
            <br />
            <br />
            My foundation goes beyond the screen: three years in <span className="purple">fast-paced catering</span> sharpened my resilience and client communication, while <span className="purple">programming industrial machinery</span> in Germany taught me the value of cross-cultural collaboration and precision.
            <br />
            <br />
            These roles proved that whether in a restaurant, on a production floor, or in consulting, success relies on <span className="purple">adaptability</span> and <span className="purple">operational excellence</span>. Currently pursuing a Master’s in <span className="purple">Cybersecurity</span>, I am dedicated to building technical solutions that are robust, secure, and genuinely impactful for the end-user.
            <br />
            <br />
            Beyond tech, I am passionate about <span className="purple">financial markets</span>, <span className="purple">fitness</span>, and continuous learning. I always value meaningful connections and collaborative growth.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
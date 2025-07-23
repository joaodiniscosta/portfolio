import { Card } from "react-bootstrap";

function EducationItem({ degree, institution, dates, description, onShowSpecializations }) {

    return (
        <Card
        onClick={onShowSpecializations}
        style={{
            borderRadius: "15px",
            background: "rgba(0,0,0,0.8)",
            border: "1px solid #0ff",
            boxShadow: "0 0 20px #0ff",
            height: "100%",
            cursor: "pointer",
            transition: "transform 0.2s ease",
        }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.02)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
        >
        <Card.Body>
            <h2>{degree}</h2>
            <h4 style={{ color: "#0ff" }}>{institution} | {dates}</h4>
            <p style={{ textAlign: "justify" }}>{description}</p>
        </Card.Body>
        </Card>
    );
}

export default EducationItem;

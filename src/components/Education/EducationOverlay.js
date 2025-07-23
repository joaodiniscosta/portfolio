import { Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";

function EducationOverlay({ specializations, onClose, side }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "absolute",
        top: 0,
        [side]: "0",
        width: "100%",
        zIndex: 10,
      }}
    >
      <Card
        style={{
          borderRadius: "15px",
          background: "rgba(0,0,0,0.95)",
          border: "1px solid #0ff",
          boxShadow: "0 0 20px #0ff",
        }}
      >
        <Card.Body>
        <h1 style={{ fontSize: "2.6em", paddingBottom: "20px" }}>
          Core <strong className="purple">Specializations</strong>
        </h1>
            {specializations.map((spec, i) => (
              <div key={i}>
                <strong>{spec.title}</strong> - {spec.detail}
              </div>
            ))}
          <Button
            variant="outline-info"
            onClick={onClose}
            style={{ marginTop: "10px" }}
          >
            Close
          </Button>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default EducationOverlay;

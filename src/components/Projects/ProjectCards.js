import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view"         
        style={{
            borderRadius: "15px",
            background: "rgba(0,0,0,0.8)",
            border: "1px solid #0ff",
            boxShadow: "0 0 20px #0ff",
            height: "100%",
            cursor: "pointer",
            transition: "transform 0.2s ease",
        }}>
      <Card.Img variant="top" src={props.imgPath} alt="card-img" className="custom-card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;

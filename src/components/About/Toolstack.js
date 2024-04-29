import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
       <Col xs={4} md={2} className="tech-icons">
        <FaGitAlt />
        <p className="tech-names">Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p className="tech-names">VS Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <p className="tech-names">Postman</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <p className="tech-names">Vercel</p>
      </Col>
    </Row>
  );
}

export default Toolstack;

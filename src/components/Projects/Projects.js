  import React, { useMemo, useState } from "react";
  import { Container, Row, Col } from "react-bootstrap";
  import ProjectCard from "./ProjectCards";
  import Particle from "../Particle";
  import leaf from "../../Assets/Projects/leaf.png";
  import emotion from "../../Assets/Projects/emotion.png";
  import editor from "../../Assets/Projects/codeEditor.png";
  import chatify from "../../Assets/Projects/chatify.png";
  import suicide from "../../Assets/Projects/suicide.png";
  import bitsOfCode from "../../Assets/Projects/blog.png";
  import PortfolioItem from './PortfolioItem'

  const portfoliolist = [
    {
      id: 1,
      imgPath: chatify,
      isBlog: false,
      title: "Charify",
      description: "Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.",
      ghLink: "https://github.com/soumyajit4419/Chatify",
      demoLink: "https://chatify-49.web.app/",
      category: "web development"
    },
    {
        id: 2,
        imgPath: editor,
        isBlog: false,
        title: "Trade Pinas",
        description: "Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.",
        ghLink: "https://github.com/soumyajit4419/Chatify",
        demoLink: "https://chatify-49.web.app/",
        category: "machine learning"
    },
    {
        id: 3,
        imgPath: emotion,
        isBlog: false,
        title: "TeamDir",
        description: "Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.",
        ghLink: "https://github.com/soumyajit4419/Chatify",
        demoLink: "https://chatify-49.web.app/",
        category: "applications"
    }
  ];
  const categorylist = [
    { id: 1, category: "all", value: "all" },
    { id: 2, category: "web development", value: "all" },
    { id: 3, category: "applications", value: "all" },
    { id: 4, category: "machine learning", value: "all" },
    
  ];

  function Projects() {
    const [filter, setFilter] = useState('all');
    
    const filteredPortfolio = useMemo(() => {
      if (filter === 'all') return portfoliolist;

      return portfoliolist.filter((portfolio) => portfolio.category === filter);
    }, [filter])
    return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <ul className="portfolio-nav">
            {categorylist.map((types) => (
              <li>
                <a onClick={() => setFilter(types.category)}>
                  {types.category}
                </a>
              </li>
            ))}
          </ul>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


              {filteredPortfolio.map((item) => (
                <Col md={4} className="project-card" key={item.id}>
                    <PortfolioItem item={item} />
                </Col>
              ))}
             
            
          </Row>
        </Container>
      </Container>
    );
  }

  export default Projects;

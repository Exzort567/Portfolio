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
  import beanLeaf from "../../Assets/Projects/bean_leaf.png"
  import bitcoinforecast from '../../Assets/Projects/bitcoin-forecast.png'
  import tradepinas from '../../Assets/Projects/tradepinas.png'
  import PortfolioItem from './PortfolioItem'

  const portfoliolist = [
    {
      id: 1,
      imgPath: beanLeaf,
      isBlog: false,
      title: "Bean Leaf Disease Classification",
      description: "Using Tensorflow, Google Colab and Streamlit to design, build, train, evaluate a CNN model and Deploy a web app capable of identifying bean leaf diseases into three classes: healthy, bean rust, and angular leaf spot.",
      ghLink: "https://github.com/Exzort567/cnn_bean_leaf_disease",
      demoLink: "https://cnnbeanleafdisease.streamlit.app/",
      category: "machine learning"
    },
    {
        id: 2,
        imgPath: bitcoinforecast,
        isBlog: false,
        title: "Bitcoin forecast",
        description: "Bitcoin Forecast: Your go-to app for accurate predictions on Bitcoin trends. Utilizing React and Vercel",
        ghLink: "https://github.com/Exzort567/BitcoinForecast",
        demoLink: "https://bitcoin-forecast.vercel.app/",
        category: "web development"
    },
    {
        id: 3,
        imgPath: tradepinas,
        isBlog: false,
        title: "Trade Pinas",
        description: "Trade Pinas: Your premier destination for trading insights across Forex, stocks, and cryptocurrencies. Powered by Vite and React, our dynamic blog delivers expert analysis, and market trends. With Vercel deployment.",
        ghLink: "https://github.com/Exzort567/tradepinas",
        demoLink: "https://tradepinas.vercel.app/",
        category: "web development"
    }
  ];
  const categorylist = [
    { id: 1, category: "all", value: "all" },
    { id: 2, category: "web development", value: "all" },
    { id: 3, category: "machine learning", value: "all" },
    
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

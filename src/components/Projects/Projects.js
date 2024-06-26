  import React, { useMemo, useState } from "react";
  import { Container, Row, Col } from "react-bootstrap";
  import Particle from "../Particle";
  import teamdir from '../../Assets/Projects/teamdir.png'
  import beanLeaf from "../../Assets/Projects/bean_leaf.png"
  import bitcoinforecast from '../../Assets/Projects/bitcoin-forecast.png'
  import tradepinas from '../../Assets/Projects/tradepinas.png'
  import PortfolioItem from './PortfolioItem'
  import f1Peeps from '../../Assets/Projects/f1Peeps.png'

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
      imgPath: teamdir,
      isBlog: false,
      title: "Teamdir",
      description: "teamdir: Your ultimate hub for Valorant enthusiasts, offering a social networking platform tailored for players. Built on Prisma and MongoDB for robust data management, teamdir provides a seamless experience powered by Next.js. With Vercel deployment, connect with fellow gamers, and form teams. Account: username: demo@gmail.com password: demo567",
      ghLink: "https://github.com/Exzort567/teamdir",
      demoLink: "https://teamdir.vercel.app/",
      category: "web development"
    },
    {
        id: 3,
        imgPath: bitcoinforecast,
        isBlog: false,
        title: "Bitcoin forecast",
        description: "Bitcoin Forecast: Your go-to app for accurate predictions on Bitcoin trends. Utilizing React and Vercel",
        ghLink: "https://github.com/Exzort567/BitcoinForecast",
        demoLink: "https://bitcoin-forecast.vercel.app/",
        category: "web development"
    },
    {
        id: 4,
        imgPath: tradepinas,
        isBlog: false,
        title: "Trade Pinas",
        description: "Trade Pinas: Your premier destination for trading insights across Forex, stocks, and cryptocurrencies. Powered by Vite and React, our dynamic blog delivers expert analysis, and market trends. With Vercel deployment.",
        ghLink: "https://github.com/Exzort567/tradepinas",
        demoLink: "https://tradepinas.vercel.app/",
        category: "web development"
    },
    {
      id: 5,
      imgPath: f1Peeps,
      isBlog: false,
      title: "F1 Peeps",
      description: "F1 Peeps: Your Formula 1 Dashboard powered by React and Ergast API. Deployed on Vercel, this project is my journey into API integration with a focus on Formula 1 data.",
      ghLink: "https://github.com/Exzort567/F1-Peeps",
      demoLink: "https://f1-peeps.vercel.app/",
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

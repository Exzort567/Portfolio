import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import homeLogo from "../../Assets/home-main.svg";
import Type from "./Type";
import Github from "../About/Github";
import Toolstack from "../About/Toolstack";
import Techstack from "../About/Techstack";
import ProjectCard from "../Projects/ProjectCards";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import myImg from "../../Assets/gwapo.jpeg";

import Projects from "../Projects/Projects";




function Home() {
  
  return (
    <>
      {/* Home Section */}
      <section id="home">
       
        <Container fluid className="home-section home-about-section"  id="home">
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                {/* Home Header Content */}
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> Kenneth Quibel</strong>
                </h1>
                <h6 className="quote">compile(); optimize(); compute(); repeat();</h6>
                <div style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div>
              </Col>

              <Col md={5} style={{ paddingBottom: 20 }}>
                {/* Home Image */}
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                />
              </Col>
            </Row>
          
            
          </Container>
        </Container>
        
        
      </section>
    <section id="home">
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ABOUT <span className="purple">ME</span> 
            </h1>
            <p className="home-about-body">
              I'm currently enrolled as a student at <b className="purple">Bohol Island State University</b>, working towards my Bachelor's degree in Computer Science.
              <br />
              <br />My interest lies at the intersection of 
              <i>
                <b className="purple"> Machine Learning</b> and<b className="purple">  Web development. </b> 
              </i>
              
              Additionally, I'm intrigued by <b className="purple">Crypto and Forex trading. </b>
              In April 2023, I achieved a significant milestone by winning a trading competition hosted by
              <a target="_blank" href="https://x.com/myfundedfx/status/1652684119313199109?s=46&t=v3dtp2VT7YDF7OmmOQYAqg" class="purple-link"> <b className="purple">My Funded Fx prop firm.</b></a>
              <br />
              <br />
             
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
              <br />
              <br />

              Apart from coding, some other activities that I love to do!
              <br />
              <ul>
                <li>🎮 Playing Games</li>
                <li>📺 Watching TV shows</li>
                <li>🎥 Creating TikTok Content <a
                href="https://www.tiktok.com/@kkkinittt?_t=8lw3nv1WVG6&_r=1"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                
              >
                <FaTiktok />
              </a></li>
              </ul>


            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        
      </Container>
    </Container>
    </section>
    <section id="skills">
    <Container fluid className="about-section">  
      <Container>
        
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <br />
        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
    </section>

    <section id="projects">
      <Projects/>
    </section>
    <section id="contact">
    <Container fluid className="home-about-section" id="about">
      <Container>
        
        <Row>
          <Col md={12} className="home-about-social">
            
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:quibelkenneth@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <MdEmail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
    </section>
    </>
  );
}

export default Home;

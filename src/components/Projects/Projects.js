import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle"; 
import editor from "../../Assets/Projects/codeEditor.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import youTube from "../../Assets/Projects/YouTube_Clone.png";
import meal from "../../Assets/Projects/Meal.png";

function Projects() {
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
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meal}
              isBlog={false}
              title="MealWay"
              description="
              Your go-to hub for scoring awesome street eats nearby! Powered by the MERN stack, MealsWay lets you scout out a variety of tasty treats with map integration. Vendors can hop on board effortlessly, while you can dive into random or categorized food finds. Whether you're a food lover or a vendor, MealsWay makes it easy to connect and indulge in the best street food around"
              ghLink="https://github.com/pranavbhosale808/Mealway"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="SocialSnap"
              description="Inspired by Instagram, our dynamic social media backend lets users register, create profiles, and follow others seamlessly. Powered by the MERN stack, it offers a robust platform for connecting and engaging with content. Whether you're a social butterfly or a developer, SocialSnap is your foundation for crafting captivating user experiences"
              ghLink="https://github.com/pranavbhosale808/Social_Media"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Decentralized-Voting-System"
              description="A cutting-edge voting system leveraging Ethereum blockchain for smart contracts, React for frontend, and MySQL for database. DecentralVote ensures secure, transparent, and tamper-proof elections, enabling users to cast votes seamlessly. Join us in revolutionizing democracy with DecentralVote."
              ghLink="https://github.com/Pranavbhosale808/Decentralized-Voting-System-"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={youTube}
              isBlog={false}
              title="YouTube Clone"
              description="A sleek YouTube clone crafted with React, Material UI, and the YouTube API. TubeView mirrors the familiar interface of YouTube, allowing users to browse, search, and watch videos seamlessly. With its intuitive design and responsive layout, TubeView offers a professional and user-friendly alternative for enjoying online video content. Whether you're a content creator or a viewer, TubeView provides a seamless experience for discovering and sharing videos in style"
              ghLink="https://github.com/Pranavbhosale808/Youtube-Clone"
              demoLink="https://ahp-media-nine-tau.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

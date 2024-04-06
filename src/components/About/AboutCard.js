import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pranav Bhosale </span>
            from <span className="purple"> Amravati, India.</span>
            <br />
            I am currently pre final year student of BE
            <br />
            I have completed Diploma in Computer Science and Engineering
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
{/* 
          <p style={{ color: "rgb(155 126 172)" }}>
            "There is Always someone better than You!"{" "}
          </p>
          <footer className="blockquote-footer">Pranav</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

import React from "react";
import "./About.css";
import photo from "../assets/photo.jpg";
import linez from "../assets/linez.jpg";

const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>
        Producing highly educationally equipped young people for now and the
        future through teaching of ethics and values. 
      </p>
      <img src={photo} alt="linez" />

      <h1 className="playground">A child friendly playground</h1>
      <p>A happy child is a learning child</p>
      <img src={linez} alt="backo" />
    </div>
  );
};

export default About;

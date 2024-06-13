import React from 'react'
import "./About.css"
import linez from "../assets/linez.jpg"

const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur sequi
        rerum ratione maxime! Provident laudantium omnis distinctio aliquid odit
        reiciendis ad quibusdam ipsa rerum doloremque recusandae veritatis
        debitis at velit voluptatibus, dolores temporibus eius ratione beatae
        expedita facere delectus nihil mollitia unde? Tempore, alias! Aliquid
        quas magni nostrum unde odit!
      </p>
        <img src={linez} alt="linez" />
      
    </div>
  );
}

export default About
import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>
        I'm a passionate web developer with a strong interest in creating
        innovative and user-friendly websites. My goal is to leverage my skills
        to build meaningful online experiences.
      </p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;

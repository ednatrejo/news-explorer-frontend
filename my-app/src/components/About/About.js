import "./About.css";
import React from "react";
import MyPhoto from "../../images/MyPhoto.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about__section">
        <img className="about__image" src={MyPhoto} alt="Author Image" />
        <div className="about__text">
          <h2 className="about__title">About the author</h2>
          <div className="about__para">
            <p className="about__para-text">
              Hello there! I'm Edna Trejo, I'm full stack software engineer
              proficient in JavaScript, HTML, CSS,Node, Express, and React. I
              transitioned from sales to web development.
            </p>
            <p className="about__para-text">
              I started learning to code at TripleTen bootcamp. There, I
              received thorough training and learned how to handle difficult
              programming tasks. I'm skilled in creating smooth user experiences
              with React and building large-scale backend systems with Node.js.
              Whether you want to improve your online presence or upgrade your
              tech setup, I can provide smart solutions and achieve effective
              outcomes. Let's work together to turn your ideas into reality,
              step by step.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

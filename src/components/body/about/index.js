import React from "react";
import SocialContact from "../../common/social-contact";
import "./about.css";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          <span className="info-name">
            I am Pavithra Lakshmikanthanbharathi,
          </span>
          <br />
          An Enthusiastic Civil Engineer from Government College of Technology,
          Coimbatore.
          <br /> Has strong academic credentials with Internships from various
          Firms including Startups. Has a deep interest in Management and
          Programming.
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/about-picture.svg").default}
            className="picture"
          ></img>
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;

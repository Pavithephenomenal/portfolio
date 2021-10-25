import React from "react";
import "./skills.css";
import Separator from "../../common/separator";
import { SkillsData } from "../../data/skills";
import SkillCard from "./skill-card";

function Skills() {
  const data = SkillsData;
  return (
    <div className="skills">
      <Separator />
      <lable className="section-title">Skills</lable>
      <div className="skills-container">
        {data.map((item) => {
          return (
            <div className="skills-section">
              <lable className="skills-section-title">{item.type}</lable>
              <div className="skills-list">
                {item.lists.map((skill) => {
                  return <SkillCard skill={skill} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;

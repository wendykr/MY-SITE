import React from "react";
import "./Skill.scss";

interface SkillProps {
  name: string;
  icon: React.ElementType;
}

export const Skill: React.FC<SkillProps> = ({ name, icon: Icon }) => {
  return (
    <div className="skill" title={name}>
      <p className="skill__icon">
        <Icon />
      </p>
      <p className="skill__name">{name}</p>
    </div>
  );
};

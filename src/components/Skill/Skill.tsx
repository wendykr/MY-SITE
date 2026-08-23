import { ElementType } from "react";
import "./Skill.scss";

interface SkillProps {
  name: string;
  icon: ElementType;
}

export const Skill = ({ name, icon: Icon }: SkillProps) => {
  return (
    <div className="skill" title={name}>
      <p className="skill__icon">
        <Icon />
      </p>
      <p className="skill__name">{name}</p>
    </div>
  );
};

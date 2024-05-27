import React from 'react';
import './Skill.scss';

interface SkillProps {
  name: string;
  icon: React.ReactNode;
}

export const Skill: React.FC<SkillProps> = ({ name, icon }) => {
  return (
    <div className="skill" title={name}>
      <p className="skill__icon">{icon}</p>
      <p className="skill__name">{name}</p>
    </div>
  )
}
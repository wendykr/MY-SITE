import './Skill.scss';

export const Skill = ({ name, icon }) => {
  return (
    <div className="skill" title={name}>
      <p className="skill__icon">{icon}</p>
      <p className="skill__name">{name}</p>
    </div>
  )
}
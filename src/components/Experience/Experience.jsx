import './Experience.scss';

export const Experience = ({ anchor, year, company, name, description }) => {

  return (
    <div id={anchor} className="experience">
      <div className="experience__info">
        <p className="experience__year">{year}</p>
        <p className="experience__company">{company}</p>
      </div>
      <div className="experience__text">
        <h3 className="experience__name">{name}</h3>
        <p className="experience__description" dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  )
}
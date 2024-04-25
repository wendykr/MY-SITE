import './Education.scss';

export const Education = ({ anchor, year, company, name, description }) => {

  return (
    <div id={anchor} className="education">
      <div className="education__info">
        <p className="education__year">{year}</p>
        <p className="education__company">{company}</p>
      </div>
      <div className="education__text">
        <h3 className="education__name">{name}</h3>
        <p className="education__description" dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  )
}
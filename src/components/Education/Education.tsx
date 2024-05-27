import './Education.scss';

interface EducationProps {
  anchor: string;
  year: string;
  company: string;
  name: string;
  description: string;
  isClicked: boolean;
}

export const Education: React.FC<EducationProps> = ({ anchor, year, company, name, description, isClicked }) => {

  return (
    <div id={anchor} className="education">
      <div className="education__info">
        <p className="education__year">{year}</p>
        <p className="education__company">{company}</p>
      </div>
      <div className={`education__text ${isClicked ? 'highlight' : '' }`}>
        <h3 className="education__name">{name}</h3>
        <p className="education__description" dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  )
}
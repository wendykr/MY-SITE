import { useEffect, useRef, useState } from 'react';
import './Project.scss';
import { Button } from '../Button/Button';

export const Project = ({ name, skills, description, linkWeb, linkGH, screen, order }) => {
  const [isVisible, setIsVisible] = useState(false);
  const projectRef = useRef(null);

  useEffect(() => {
    const showProject = () => {
      const triggerBottom = window.innerHeight / 5 * 4;
      const boxTop = projectRef.current.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', showProject);

    return () => {
      window.removeEventListener('scroll', showProject);
    };
  }, []);

  return (
    <div ref={projectRef} className={`project ${isVisible ? 'visible' : ''}`}>
      <div className={`project__container ${order ? 'order': ''}`}>
        <a className="project__screen--link" href={linkWeb}>
          <img className="project__screen" src={screen} width="100%" height="auto" alt={`náhled webu ${name}`} />
        </a>
      </div>
      <div className="project__data">
          <p className="project__skills">{skills}</p>
          <h3 className="project__name">{name}</h3>
          <p className="project__description" dangerouslySetInnerHTML={{ __html: description }} />
          <Button link={linkGH} text="Zobrazit kód" style="primary" />
          <Button link={linkWeb} text="Přejít na web" style="secondary" />
      </div>
    </div>
  )
}
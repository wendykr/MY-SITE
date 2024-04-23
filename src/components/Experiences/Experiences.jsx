import { useState, useEffect } from 'react';
import './Experiences.scss';
import { coursesData } from '../../constants/courses';
import { Experience } from '../Experience/Experience';
import { Link as ScrollLink } from 'react-scroll';

export const Experiences = () => {
  const [showAll, setShowAll] = useState(false);
  const [displayedCourses, setDisplayedCourses] = useState([]);
  const [targetAnchor, setTargetAnchor] = useState(null);
  const [scroll, setScroll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(prev => !prev);
  };

  useEffect(() => {
    if (!showAll) {
      setDisplayedCourses(coursesData.slice(-3).reverse());
    } else {
      setDisplayedCourses(coursesData.slice().reverse());
    }
  }, [showAll]);

  useEffect(() => {
    if (scroll && targetAnchor) {
      const timeout = setTimeout(() => {
        const targetElement = document.getElementById(targetAnchor);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
          });
        }
        setTargetAnchor(null);
      }, 500);
  
      return () => clearTimeout(timeout);
    }
  }, [scroll, targetAnchor]);

  const handleAnchorClick = (event) => {
    if (!event.target.classList.contains('link-anchor')) {
      return;
    }
    setShowAll(true);
    const clickedAnchor = event.target.getAttribute('href').replace('#', '');
    setTargetAnchor(clickedAnchor);
    setScroll(true);
  };

  useEffect(() => {
    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="bg-white">
      <section id="educations" className="experiences">
        <h2 className="title">Kurzy a certifikáty</h2>
        <p className="description">... vzdělávám se a rozšiřuju si své dovednosti.</p>
        {displayedCourses.map(course => (
          <Experience
            key={course.id}
            year={course.year}
            company={course.company}
            name={course.name}
            description={course.description}
            anchor={course.anchor}
          />
        ))}
        {coursesData.length > 3 && (
          <ScrollLink
            className="link-anchor"
            onClick={toggleShowAll}
            to={showAll ? "educations" : ""}
            spy={true}
            smooth={true}
            offset={0}
            duration={1500}
          >
            {showAll ? 'Skrýt' : 'Zobrazit další'}
          </ScrollLink>
        )}
      </section>
    </div>
  )
}
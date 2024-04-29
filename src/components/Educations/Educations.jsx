import { useState, useEffect } from 'react';
import './Educations.scss';
import { coursesData } from '../../constants/courses';
import { Education } from '../Education/Education';
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';

export const Educations = () => {
  const [showAll, setShowAll] = useState(false);
  const [displayedCourses, setDisplayedCourses] = useState([]);
  const [targetAnchor, setTargetAnchor] = useState(null);
  const [scroll, setScroll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(prev => !prev);

    if (showAll) {
      setTargetAnchor(null);
      setTimeout(() => {
        scroller.scrollTo('educations', {
          spy: true,
          smooth: true,
          offset: 0,
          duration: 1000,
        });
      }, 200);
    }
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
      }, 500);
  
      return () => clearTimeout(timeout);
    }
  }, [scroll, targetAnchor]);

  const handleAnchorClick = (event) => {

    if (event.target.tagName === 'A' && event.target.getAttribute('href')) {
      const hrefValue = event.target.getAttribute('href');

      if (hrefValue.includes('#')) {
        const clickedAnchor = hrefValue.replace('#', '');
        setTargetAnchor(clickedAnchor);
        if (!showAll) {
          setShowAll(true);
          setScroll(true);
        } else {
          setScroll(true);
        }
        event.preventDefault();
      }
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="bg-white">
      <section id="educations" className="educations">
        <h2 className="title">Kurzy a certifikáty</h2>
        <p className="description">... vzdělávám se a rozšiřuju si své dovednosti.</p>
        {displayedCourses.map(course => (
          <Education
            key={course.id}
            year={course.year}
            company={course.company}
            name={course.name}
            description={course.description}
            anchor={course.anchor}
            isClicked={course.anchor === targetAnchor}
          />
        ))}
        {coursesData.length > 3 && (
          showAll ?
            <Link
              className="link-anchor"
              onClick={toggleShowAll}
              to="/educations">Skrýt</Link>
              :
            <button
              className="link-anchor button-reset-style"
              onClick={toggleShowAll}>Zobrazit další</button>
        )}
      </section>
    </div>
  )
}
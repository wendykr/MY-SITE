import { useState, useEffect } from 'react';
import './Educations.scss';
import { coursesData } from '../../constants/courses';
import { Education } from '../Education/Education';
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { CoursesDataStructure } from '../../models/Courses';

export const Educations = () => {
  const [showAll, setShowAll] = useState(false);
  const [displayedCourses, setDisplayedCourses] = useState<CoursesDataStructure[]>([]);
  const [targetAnchor, setTargetAnchor] = useState<string | null>(null);
  const [scroll, setScroll] = useState(false);

  const toggleShowAll = () => {
    if (showAll) {
      setTargetAnchor(null);
      setTimeout(() => {
        setShowAll(false);
      }, 1300);
      setTimeout(() => {
        scroller.scrollTo('educations', {
          spy: true,
          smooth: true,
          offset: 0,
          duration: 1000,
        });
      }, 300);
    } else {
      setShowAll(true);
    }
  };

  useEffect(() => {
    if (!showAll) {
      setDisplayedCourses(coursesData.slice(-5).reverse());
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

  const handleAnchorClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement | null;
  
    if (target && target.tagName === 'A' && target.getAttribute('href')) {
      const hrefValue = target.getAttribute('href');
  
      if (hrefValue && hrefValue.includes('#')) {
        const clickedAnchor = hrefValue.replace('#', '');
  
        if (target.classList.contains('show-edu')) {
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
    }
  };

  useEffect(() => {
    document.addEventListener('click', (handleAnchorClick));

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
              className="link-anchor show-edu"
              onClick={toggleShowAll}
              to="#educations">Skrýt</Link>
              :
            <button
              className="link-anchor button-reset-style"
              onClick={toggleShowAll}>Zobrazit další</button>
        )}
      </section>
    </div>
  )
}
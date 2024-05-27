import { useState, useEffect } from 'react';
import './ToTop.scss';
import { animateScroll } from 'react-scroll';
import { RiArrowUpSLine } from "react-icons/ri";

export const ToTop: React.FC = () => {
  const [isDisplay, setIsDisplay] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsDisplay(true);
      } else {
        setIsDisplay(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const options = {
      duration: 1000,
      smooth: true,
    };

    animateScroll.scrollToTop(options);
  };

  return (
    <div className={`ToTop ${isDisplay ? 'display' : ''}`}>
        <RiArrowUpSLine className="ToTop__button" onClick={scrollToTop} />
    </div>
  )
}

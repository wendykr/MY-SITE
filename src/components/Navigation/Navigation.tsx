import { useState, useEffect } from 'react';
import './Navigation.scss';
import { NavigationList } from '../NavigationList/NavigationList';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navigation__container ${isScrolled ? 'navigation__container--scrolled' : ''}`}>
      <nav className="navigation">
        <NavigationList />
      </nav>
    </div>
  )
}
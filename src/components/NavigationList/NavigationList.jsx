import { useEffect } from 'react';
import './NavigationList.scss';
import { linkMenuData } from '../../constants/linkMenu';
import { NavigationItem } from '../NavigationItem/NavigationItem';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { useNav } from '../../context/NavContext';

export const NavigationList = () => {
  const { isOpenHamburger, setIsOpenHamburger } = useNav();

  useEffect(() => {
    const handleResize = () => {
      if (isOpenHamburger && window.innerWidth > 640) {
        setIsOpenHamburger(prev => !prev);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpenHamburger]);

  const handleClick = () => {
    setIsOpenHamburger(prev => !prev);
  }

  return (
  <nav>
    <div id="toggler" onClick={handleClick}>
      {
        isOpenHamburger ? <RxCross2 className="navigation__icon" /> : <RxHamburgerMenu className="navigation__icon" />
      }
    </div>
      <ul id="menu" className={`navigationList ${isOpenHamburger ? 'display' : ''}`}>
        {
          linkMenuData.map(link => <NavigationItem key={link.id} name={link.name} to={link.url} />)
        }
      </ul>
    </nav>
  )
}
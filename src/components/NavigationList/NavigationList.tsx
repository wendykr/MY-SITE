import { useEffect } from 'react';
import './NavigationList.scss';
import { linkMenuData } from '../../constants/linkMenu';
import { NavigationItem } from '../NavigationItem/NavigationItem';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { useNav } from '../../context/NavContext';

export const NavigationList: React.FC = () => {
  const { isOpenMenu, setIsOpenMenu } = useNav();

  useEffect(() => {
    const handleResize = () => {
      if (isOpenMenu && window.innerWidth > 640) {
        setIsOpenMenu(prev => !prev);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpenMenu]);

  const handleClick = () => {
    setIsOpenMenu(prev => !prev);
  }

  return (
  <nav>
    <div id="toggler" onClick={handleClick}>
      {
        isOpenMenu ? <RxCross2 className="navigation__icon" /> : <RxHamburgerMenu className="navigation__icon" />
      }
    </div>
      <ul id="menu" className={`navigationList ${isOpenMenu ? 'display' : ''}`}>
        {
          linkMenuData.map(link => <NavigationItem key={link.id} name={link.name} to={link.url} />)
        }
      </ul>
    </nav>
  )
}
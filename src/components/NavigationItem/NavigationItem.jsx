import { useEffect } from 'react';
import './NavigationItem.scss';
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { useNav } from '../../context/NavContext';

export const NavigationItem = ({ name, to }) => {
  const { setIsOpenMenu } = useNav();

  const handleClick = () => {
    setIsOpenMenu(false);
    scroller.scrollTo(to, {
      spy: true,
      smooth: true,
      offset: 0,
      duration: 1000,
    });
  };

  useEffect(() => {
    const urlPath = window.location.pathname;
    if (urlPath === `/${to}`) {
      scroller.scrollTo(to, {
        spy: true,
        smooth: true,
        offset: 0,
        duration: 0,
      });
    }
  }, [to]);

  return (
    <li className="navigationItem">
      <Link
        className="navigationItem__link"
        to={`/${to}`}
        onClick={handleClick}
      >
        {name}
      </Link>
    </li>
  );
};

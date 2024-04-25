import { Link } from 'react-scroll';
import './NavigationItem.scss';
import { useNav } from '../../context/NavContext';

export const NavigationItem = ({ name, to }) => {
  const { setIsOpenMenu } = useNav();

  return (
    <li className="navigationItem">
      <Link
        className="navigationItem__link"
        to={to}
        spy={true}
        smooth={true}
        offset={0}
        duration={1000}
        onClick={() => setIsOpenMenu(false)}
      >
        {name}
      </Link>
    </li>
  )
}
import './Footer.scss';
import { Link, NavLink } from 'react-router-dom';
import { linkMenuData } from '../../constants/linkMenu';
import { scroller } from 'react-scroll';
import { Contact } from '../Contact/Contact';

export const Footer: React.FC = () => {
  const handleClick = (to: string) => {
    scroller.scrollTo(to, {
      spy: true,
      smooth: true,
      offset: 0,
      duration: 1000,
    });
  };

  return (
    <footer id="contact" className="footer">
      <Contact />
      <hr className="footer__line" />
      <div className="footer__content">
        <p className="footer__navigation">
          {linkMenuData.map((link) => (
            <Link
              key={link.id}
              className="footer__navigation--link"
              to={`#${link.url}`}
              onClick={() => handleClick(link.url)}
            >
              {link.name}
            </Link>
          ))}
        </p>
        <p className="footer__text">
          © 2024{' '}
          <NavLink target="_blank" to="https://github.com/wendykr/" className="footer__link">
            Vendula Krajíčková
          </NavLink>
        </p>
      </div>
    </footer>
  );
};

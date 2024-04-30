import { Contact } from '../Contact/Contact';
import './Footer.scss';
import { NavLink } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <Contact />
      <hr className="footer__line" />
      <div className="footer__content">
        <p className="footer__text">© 2024 <NavLink target="_blank" to="https://github.com/wendykr/" className="footer__link">Vendula Krajíčková</NavLink></p>
      </div>
  </footer>
  )
}
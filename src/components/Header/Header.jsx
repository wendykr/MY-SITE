import './Header.scss';
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaAngleDoubleDown } from "react-icons/fa";
import { Link } from 'react-scroll';

export const Header = () => {
  return (
    <div className="header__cover">
      <header className="header">
        <div className="header__info">
          <h1 className="header__title">Vendula Krajíčková</h1>
          <h2 className="header__subtitle">Junior frontend developer & coder</h2>
          <p className="header__description">Frontend React vývojářka webů a webových aplikací, HTML/CSS kodérka grafických návrhů webů.</p>
          <ul className="header__list">
          <li>
              <a href="https://github.com/wendykr/">
                <FaGithub className="header__icon" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/vendula-krajickova/">
                <FaLinkedinIn className="header__icon" />
              </a>
            </li>
            <li>
              <a href="mailto:vendysacek@seznam.cz">
                <FaEnvelope className="header__icon" />
              </a>
            </li>
          </ul>
        </div>
        <Link
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
          ><FaAngleDoubleDown className="header__icon--down" />
          </Link>
      </header>
    </div>
  )
}
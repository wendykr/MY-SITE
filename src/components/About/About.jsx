import { Link } from 'react-scroll';
import './About.scss';

export const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="title">O mě</h2>
        <h3 className="about__subtitle">Kdo jsem?</h3>
        <p className="about__text">Junior s pokročilými <Link className="link-anchor"
            to="skills"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            >dovednostmi
          </Link> ve vývoji webu a webových aplikací s technologiemi - React, JavaScript, HTML/CSS.
          Aktuálně se vzdělávám v Reactu v kombinaci TypeScriptu, při kterém současně pracuji na svých projektech.
          Absolvovala jsem několik <Link className="link-anchor"
            to="educations"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            >kurzů
          </Link> zaměřených na tvorbu webů. Další <Link className="link-anchor"
            to="skills"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            >technologii
          </Link>, kterou se chci výhledově naučit je Vue.</p>

        <h3 className="about__subtitle">Proč frontend?</h3>
        <p className="about__text">Po zkušenostech s psaním textů a úpravou obsahu webů v HTML editoru jsem se posunula blíže ke kódu. Získávám tak větší kontrolu nad obsahem webových stránek, které si můžu přizpůsobit svým potřebám bez omezení. S <Link className="link-anchor"
            to="skills"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            >technologiemi
          </Link> se kterými jsem se setkala během <Link className="link-anchor"
            to="educations"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            >kurzů
          </Link> mi nejvíce přirostl k srdci React. Pomocí něj můžu programovat weby s dynamickým obsahem.</p>

        <h3 className="about__subtitle">Jak dál?</h3>
        <p className="about__text">Jsem <a className="link-anchor" href='https://www.linkedin.com/in/vendula-krajickova/'>#opentowork</a> příležitosti, kde chci získávat zkušenosti ve vývoji webů a webových aplikací. Být součástí týmu, kde mohu profesně růst a uplatnit své dovednosti. Pokud Vás můj profil oslovil, neváhejte mě kontaktovat. Pouze tak zjistíme, zdali najdeme ideální souhrnu mezi mými dovednostmi a vašimi potřebami.</p>
    </section>
  )
}
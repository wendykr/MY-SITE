import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';
import './About.scss';

export const About = () => {
  const handleClick = (to) => {
    scroller.scrollTo(to, {
      spy: true,
      smooth: true,
      offset: 0,
      duration: 1000,
    });
  };

  return (
    <section id="about" className="about">
      <h2 className="title">O mě</h2>
      <h3 className="about__subtitle">Kdo jsem?</h3>
      <p className="about__text">Junior s pokročilými <Link className="link-anchor"
        to="#skills"
        onClick={() => handleClick("skills")}
      >dovednostmi
      </Link> ve vývoji webu a webových aplikací s technologiemi - React, JavaScript, HTML/CSS.
      Aktuálně se vzdělávám v Reactu v kombinaci TypeScriptu, při kterém současně pracuji na svých projektech.
      Absolvovala jsem <Link className="link-anchor"
        to="#educations"
        onClick={() => handleClick("educations")}
      >kurzy
      </Link> zaměřené na tvorbu webů. Další <Link className="link-anchor"
        to="#skills"
        onClick={() => handleClick("skills")}
      >technologii
      </Link>, kterou se chci naučit je Vue.</p>

      <h3 className="about__subtitle">Proč frontend?</h3>
      <p className="about__text">Po zkušenostech s psaním textů a úpravou obsahu webů v HTML editoru jsem se posunula blíže ke kódu. Získávám tak větší kontrolu nad obsahem webových stránek, které si můžu přizpůsobit svým potřebám bez omezení. S <Link className="link-anchor"
        to="#skills"
        onClick={() => handleClick("skills")}
      >technologiemi
      </Link> se kterými jsem se setkala během <Link className="link-anchor"
        to="#educations"
        onClick={() => handleClick("educations")}
      >kurzů
      </Link> mi nejvíce přirostl k srdci React. Pomocí něj můžu programovat weby s dynamickým obsahem.</p>

      <h3 className="about__subtitle">Jak dál?</h3>
      <p className="about__text">Jsem <a className="link-anchor" href='https://www.linkedin.com/in/vendula-krajickova/'>#opentowork</a> příležitosti, kde chci získávat zkušenosti ve vývoji webů a webových aplikací. Být součástí týmu, kde mohu profesně růst a uplatnit své dovednosti. Oslovil vás můj profil? <Link className="link-anchor"
        to="#contact"
        onClick={() => handleClick("contact")}
      >Napište mi
      </Link> a pojďme si popovídat. Pouze tak zjistíme, zdali najdeme ideální souhrnu mezi mými dovednostmi a vašimi potřebami.</p>
    </section>
  )
}
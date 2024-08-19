import { Link } from "react-router-dom";
import { scroller } from "react-scroll";
import "./About.scss";

export const About: React.FC = () => {
  const handleClick = (to: string) => {
    scroller.scrollTo(to, {
      spy: true,
      smooth: true,
      offset: 0,
      duration: 1000,
    });
  };

  return (
    <section id="about" className="about">
      <h2 className="title">O mně</h2>
      <h3 className="about__subtitle">Kdo jsem?</h3>
      <p className="about__text">
        Junior s pokročilými{" "}
        <Link
          className="link-anchor"
          to="#skills"
          onClick={() => handleClick("skills")}
        >
          dovednostmi
        </Link>{" "}
        ve vývoji webu a webových aplikací s technologiemi - React, TypeScript,
        JavaScript, HTML/CSS. Aktuálně se vzdělávám ve vývoji webových aplikací
        postavených na Next.js s využitím Reactu. Absolvovala jsem{" "}
        <Link
          className="link-anchor"
          to="#educations"
          onClick={() => handleClick("educations")}
        >
          kurzy
        </Link>{" "}
        zaměřené na tvorbu webů. Další{" "}
        <Link
          className="link-anchor"
          to="#skills"
          onClick={() => handleClick("skills")}
        >
          technologii
        </Link>
        , kterou si chci rozšířit své dovednosti je Vue.
      </p>

      <h3 className="about__subtitle">Proč frontend?</h3>
      <p className="about__text">
        Po zkušenostech s psaním textů a úpravou obsahu webů v HTML editoru jsem
        se posunula blíže ke kódu. Získávám tak větší kontrolu nad obsahem
        webových stránek, které si můžu přizpůsobit svým potřebám bez omezení. S{" "}
        <Link
          className="link-anchor"
          to="#skills"
          onClick={() => handleClick("skills")}
        >
          technologiemi
        </Link>{" "}
        se kterými jsem se setkala během{" "}
        <Link
          className="link-anchor"
          to="#educations"
          onClick={() => handleClick("educations")}
        >
          kurzů
        </Link>{" "}
        mi nejvíce přirostl k srdci React. Pomocí něj můžu programovat weby s
        dynamickým obsahem.
      </p>

      <h3 className="about__subtitle">Kam směřuji?</h3>
      <p className="about__text">
        Chci získávat zkušenosti ve vývoji webů a webových aplikací. Jsem{" "}
        <a
          className="link-anchor"
          href="https://www.linkedin.com/in/vendula-krajickova/"
        >
          #opentowork
        </a>{" "}
        a hledám příležitost být součástí týmu, kde mohu profesně růst a
        uplatnit své dovednosti. Oslovil vás můj profil?{" "}
        <Link
          className="link-anchor"
          to="#contact"
          onClick={() => handleClick("contact")}
        >
          Napište mi
        </Link>{" "}
        a pojďme si popovídat. Pouze tak zjistíme, zdali najdeme ideální souhrnu
        mezi mými dovednostmi a vašimi potřebami.
      </p>

      <h3 className="about__subtitle">Pokud si plácneme?</h3>
      <p className="about__text">
        Získáte ve mně člověka, který je:
        <ul className="about__list">
          <li className="about__list--item">
            <span className="about__list--term">Spolehlivý</span> - dodržuji
            termíny úkolů a často předkládám výsledky dříve, než je potřeba.
          </li>
          <li className="about__list--item">
            <span className="about__list--term">Pečlivý</span> - mám smysl pro
            detail s tolerancí na 1px.
          </li>
          <li className="about__list--item">
            <span className="about__list--term">Flexibilní</span> - jako junior
            se cítím jistější, mám-li po ruce parťáka, ale dokážu pracovat i
            samostatně.
          </li>
          <li className="about__list--item">
            <span className="about__list--term">Otevřený zpětné vazbě</span> -
            ráda vyslechnu názory druhých a beru je jako motivaci k rozvoji
            svých dovedností.
          </li>
        </ul>
      </p>
    </section>
  );
};

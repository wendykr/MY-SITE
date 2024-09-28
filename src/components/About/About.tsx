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
        JavaScript. Mám zkušenosti s kódováním grafických návrhů webů do
        HTML/CSS. Směřuji k vývoji webových aplikací s dynamickým obsahem
        postavených na Next.js s využitím Reactu. Své dovednosti si dále plánuji
        rozšířit o Vue.
      </p>

      <h3 className="about__subtitle">Kam směřuji?</h3>
      <p className="about__text">
        K získávání komerčních zkušenosti ve vývoji webů a webových aplikací.
        Hledám{" "}
        <a
          className="link-anchor"
          href="https://www.linkedin.com/in/vendula-krajickova/"
        >
          #opentowork
        </a>{" "}
        příležitost být součástí týmu, kde mohu uplatnit své dovednosti a
        profesně růst. Oslovil vás můj profil?{" "}
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

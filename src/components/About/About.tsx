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
      <div className="about__text">
        <p>
          Frontend vývojářka webů a webových aplikací v{" "}
          <Link
            className="link-anchor"
            to="#skills"
            onClick={() => handleClick("skills")}
          >
            technologiích
          </Link>{" "}
          - React, TypeScript a JavaScript.{" "}
        </p>
        <p>
          Grafické návrhy webů z Figmy kóduji do responsivního HTML/CSS a
          doplňuji o interaktivní prvky.
        </p>{" "}
        <p>
          Moje další meta? Next.js – přirozené rozšíření toho, co už dobře znám
          z Reactu.
        </p>
      </div>

      <h3 className="about__subtitle">Co mě baví na frontendu?</h3>
      <div className="about__text">
        <p>
          Vyvíjet funkční a vizuálně přívětivé{" "}
          <Link
            className="link-anchor"
            to="#projects"
            onClick={() => handleClick("projects")}
          >
            webové aplikace
          </Link>{" "}
          , které návštěvníci přímo vidí a používají.
        </p>
        <p>
          Navrhovat a tvořit komponenty v Reactu s důrazem na jejich
          znovupoužitelnost napříč projektem.
        </p>
        <p>
          Kódovat a převádět grafické návrhy z Figmy do podoby s dynamickým
          obsahem, který následně ožívá v prohlížeči.
        </p>
      </div>

      <h3 className="about__subtitle">Jaké vlastnosti mě vystihují?</h3>
      <div className="about__text">
        <ul className="about__list">
          <li className="about__list--item">
            <span className="about__list--term">Spolehlivost:</span> Dodržuji
            termíny a často předkládám výsledky dříve, než je potřeba.
          </li>
          <li className="about__list--item">
            <span className="about__list--term">Pečlivost:</span> Detaily
            nepřehlížím – toleruju jen 1px!
          </li>
          <li className="about__list--item">
            <span className="about__list--term">Flexibilita:</span> Cítím se
            jistější, mám-li po ruce parťáka, ale dokážu pracovat i samostatně.
          </li>
          <li className="about__list--item">
            <span className="about__list--term">Otevřenost:</span> Zpětná vazba?
            Ráda si vyslechnu, je pro mě motivací k rozvoji svých dovedností.
          </li>
        </ul>
      </div>
    </section>
  );
};

import { ReactNode } from "react";
import "./Hero.scss";

interface HeroProps {
  title?: ReactNode;
  subtitle?: ReactNode;
}

export const Hero = ({ title, subtitle }: HeroProps) => {
  return (
    <section className="pageHero">
      <div className="pageHero__inner">
        {title && <h1 className="title">{title}</h1>}
        {subtitle && <p className="description">{subtitle}</p>}
      </div>
    </section>
  );
};

export default Hero;

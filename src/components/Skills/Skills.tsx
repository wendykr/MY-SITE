import "./Skills.scss";
import { Skill } from "../Skill/Skill";
import { useTranslation } from "react-i18next";

import { FaReact, FaHtml5, FaSass } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiSupabase,
  SiEleventy,
  SiGit,
  SiVisualstudiocode,
  SiAdobephotoshop,
  SiFigma,
  SiCoreldraw,
} from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";

const skillsLanguagesData = [
  {
    id: 1,
    name: "React",
    icon: <FaReact />,
  },
  {
    id: 2,
    name: "JavaScript",
    icon: <SiJavascript />,
  },
  {
    id: 3,
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    id: 4,
    name: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    id: 5,
    name: "HTML",
    icon: <FaHtml5 />,
  },
  {
    id: 6,
    name: "CSS",
    icon: <IoLogoCss3 />,
  },
  {
    id: 7,
    name: "Sass",
    icon: <FaSass />,
  },
  {
    id: 8,
    name: "Tailwind",
    icon: <SiTailwindcss />,
  },
];

const skillsToolsData = [
  {
    id: 9,
    name: "Git",
    icon: <SiGit />,
  },
  {
    id: 10,
    name: "Visual Studio Code",
    icon: <SiVisualstudiocode />,
  },
  {
    id: 11,
    name: "Vite",
    icon: <SiVite />,
  },
  {
    id: 12,
    name: "Figma",
    icon: <SiFigma />,
  },
  {
    id: 13,
    name: "Supabase",
    icon: <SiSupabase />,
  },
  {
    id: 14,
    name: "11ty",
    icon: <SiEleventy />,
  },
  {
    id: 15,
    name: "Photoshop",
    icon: <SiAdobephotoshop />,
  },
  {
    id: 16,
    name: "Corel",
    icon: <SiCoreldraw />,
  },
];

export const Skills = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white">
      <section id="skills" className="skills">
        <h2 className="title">{t("skills.title")}</h2>
        <p className="description">{t("skills.description")}</p>
        <div className="skills__container">
          <div className="skills__languages">
            {skillsLanguagesData.map((skill) => (
              <Skill key={skill.id} name={skill.name} icon={skill.icon} />
            ))}
          </div>
          <div className="skills__tools">
            {skillsToolsData.map((skill) => (
              <Skill key={skill.id} name={skill.name} icon={skill.icon} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

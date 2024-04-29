import './Skills.scss';
import { Skill } from '../Skill/Skill';

import { FaReact, FaHtml5, FaSass } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { SiJavascript, SiTypescript, SiTailwindcss, SiVite, SiSupabase, SiEleventy, SiGit, SiVisualstudiocode, SiAdobephotoshop, SiCoreldraw } from "react-icons/si";

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
    name: "HTML",
    icon: <FaHtml5 />,
  },
  {
    id: 5,
    name: "CSS",
    icon: <IoLogoCss3 />,
  },
  {
    id: 6,
    name: "Sass",
    icon: <FaSass />,
  },
  {
    id: 7,
    name: "Tailwind",
    icon: <SiTailwindcss />,
  }
];

const skillsToolsData = [
  {
    id: 8,
    name: "Vite",
    icon: <SiVite />,
  },
  {
    id: 9,
    name: "Supabase",
    icon: <SiSupabase />,
  },
  {
    id: 10,
    name: "Git",
    icon: <SiGit />,
  },
  {
    id: 11,
    name: "Visual Studio Code",
    icon: <SiVisualstudiocode />,
  },
  {
    id: 12,
    name: "11ty",
    icon: <SiEleventy />,
  },
  {
    id: 13,
    name: "Photoshop",
    icon: <SiAdobephotoshop />,
  },
  {
    id: 14,
    name: "Corel",
    icon: <SiCoreldraw />,
  }
];

export const Skills = () => {
  return (
    <div className="bg-white">
      <section id="skills" className="skills">
        <h2 className="title">Dovednosti a nástroje</h2>
        <p className="description">... se kterými pracuju ve svých projektech.</p>
        <div className="skills__container">
          <div className="skills__languages">
            {
              skillsLanguagesData.map(skill => <Skill key={skill.id} name={skill.name} icon={skill.icon} />)
            }
          </div>
          <div className="skills__tools">
            {
              skillsToolsData.map(skill => <Skill key={skill.id} name={skill.name} icon={skill.icon} />)
            }
          </div>
        </div>
      </section>
    </div>
  )
}
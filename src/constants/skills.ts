import { FaReact, FaHtml5, FaSass } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiReactquery,
  SiReacthookform,
  SiZod,
  SiOpenapiinitiative,
  SiStorybook,
  SiGit,
  SiFigma,
  SiClaude,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { BiLogoVisualStudio } from "react-icons/bi";

export const skillGroups = [
  {
    id: 1,
    items: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: IoLogoCss3 },
      { name: "Sass", icon: FaSass },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    id: 2,
    items: [
      { name: "TanStack Query", icon: SiReactquery },
      { name: "React Hook Form", icon: SiReacthookform },
      { name: "Zod", icon: SiZod },
      { name: "REST API", icon: TbApi },
      { name: "OpenAPI", icon: SiOpenapiinitiative },
      { name: "Storybook", icon: SiStorybook },
    ],
  },
  {
    id: 3,
    items: [
      { name: "Git", icon: SiGit },
      { name: "Visual Studio Code", icon: BiLogoVisualStudio },
      { name: "Claude Code", icon: SiClaude },
      { name: "Figma", icon: SiFigma },
    ],
  },
];

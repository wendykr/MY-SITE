import { FaCartShopping, FaLayerGroup, FaGavel } from "react-icons/fa6";

export const commercialProjectsData = [
  {
    id: 1,
    company: "BlueGhost",
    projects: [
      {
        id: 1,
        name: "commercialProjects.1.name",
        description: "commercialProjects.1.description",
        icon: FaGavel,
        technologies: ["React", "Next.js", "TypeScript", "Sass", "Storybook"],
      },
      {
        id: 2,
        name: "commercialProjects.2.name",
        description: "commercialProjects.2.description",
        icon: FaLayerGroup,
        technologies: ["React", "TypeScript", "Storybook"],
      },
      {
        id: 3,
        name: "commercialProjects.3.name",
        description: "commercialProjects.3.description",
        icon: FaCartShopping,
        technologies: [
          "React",
          "Next.js",
          "TypeScript",
          "REST API",
          "OpenAPI",
          "TanStack Query",
          "React Hook Form",
          "Zod",
        ],
      },
    ],
  },
];

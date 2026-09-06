import { SectionKey } from "./sectionRoutes";

export const linkMenuData: { id: number; name: string; sectionKey: SectionKey }[] = [
  {
    id: 1,
    name: 'nav.1.name',
    sectionKey: 'about',
  },
  {
    id: 3,
    name: 'nav.3.name',
    sectionKey: 'experience',
  },
  {
    id: 4,
    name: 'nav.4.name',
    sectionKey: 'projects',
  },
  {
    id: 5,
    name: 'nav.5.name',
    sectionKey: 'recommendations',
  },
  // Educations section is currently disabled (not routed/rendered anywhere).
  // Re-enable by adding 'educations' back to SectionKey/sectionRoutes and
  // Recommendations to sectionElements in App.tsx, then uncomment below.
  // {
  //   id: 2,
  //   name: 'nav.educations.name',
  //   sectionKey: 'educations',
  // },
  {
    id: 7,
    name: 'nav.7.name',
    sectionKey: 'posts',
  },
  {
    id: 6,
    name: 'nav.6.name',
    sectionKey: 'contact',
  },
];

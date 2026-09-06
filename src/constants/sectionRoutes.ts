export type SectionKey =
  | "about"
  | "experience"
  | "projects"
  | "posts"
  | "recommendations"
  | "contact";

interface SectionRoute {
  key: SectionKey;
  cs: string;
  en: string;
}

export const sectionRoutes: SectionRoute[] = [
  { key: "about", cs: "o-mne", en: "about" },
  { key: "experience", cs: "zkusenosti", en: "experience" },
  { key: "projects", cs: "projekty", en: "projects" },
  { key: "posts", cs: "prispevky", en: "posts" },
  { key: "recommendations", cs: "doporuceni", en: "recommendations" },
  { key: "contact", cs: "kontakt", en: "contact" },
];

const slugFor = (key: SectionKey, lang: string): string => {
  const route = sectionRoutes.find((r) => r.key === key);
  return lang === "en" ? route!.en : route!.cs;
};

export const getHomePath = (lang: string): string =>
  lang === "en" ? "/en" : "/";

export const getSectionPath = (key: SectionKey, lang: string): string => {
  const slug = slugFor(key, lang);
  return lang === "en" ? `/en/${slug}` : `/${slug}`;
};

export const findSectionKeyBySlug = (slug: string): SectionKey | undefined =>
  sectionRoutes.find((r) => r.cs === slug || r.en === slug)?.key;

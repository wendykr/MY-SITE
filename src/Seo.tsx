import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import {
  findSectionKeyBySlug,
  getHomePath,
  getSectionPath,
  SectionKey,
} from "./constants/sectionRoutes";

const SITE_URL = "https://www.vendula-krajickova.cz";

interface SeoProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  noIndex?: boolean;
}

const getSectionKeyFromPath = (pathname: string): SectionKey | undefined => {
  const segments = pathname.split("/").filter(Boolean);
  const slug = segments[0] === "en" ? segments[1] : segments[0];
  return slug ? findSectionKeyBySlug(slug) : undefined;
};

export const Seo = ({
  title,
  description,
  ogTitle,
  ogDescription,
  noIndex,
}: SeoProps) => {
  const { i18n } = useTranslation();
  const { pathname } = useLocation();
  const lang = i18n.language ? i18n.language.slice(0, 2) : "cs";

  const sectionKey = getSectionKeyFromPath(pathname);
  const csPath = sectionKey ? getSectionPath(sectionKey, "cs") : getHomePath("cs");
  const enPath = sectionKey ? getSectionPath(sectionKey, "en") : getHomePath("en");
  const currentPath = lang === "en" ? enPath : csPath;

  const resolvedOgTitle = ogTitle ?? title;
  const resolvedOgDescription = ogDescription ?? description;

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      <meta property="og:title" content={resolvedOgTitle} />
      <meta property="og:description" content={resolvedOgDescription} />
      <meta name="twitter:title" content={resolvedOgTitle} />
      <meta name="twitter:description" content={resolvedOgDescription} />
      <link rel="canonical" href={`${SITE_URL}${currentPath}`} />
      <link rel="alternate" hrefLang="cs" href={`${SITE_URL}${csPath}`} />
      <link rel="alternate" hrefLang="en" href={`${SITE_URL}${enPath}`} />
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}${csPath}`} />
    </Helmet>
  );
};

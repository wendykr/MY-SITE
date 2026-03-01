import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export function Seo() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const apply = () => {
      const title = t("meta.title");
      const description = t("meta.description");
      const ogTitle = t("meta.ogTitle", { defaultValue: "" }) || "";
      const ogDescription = t("meta.ogDescription", { defaultValue: "" }) || "";

      if (title) document.title = title;

      const setMeta = (selector: string, attr: string, value?: string) => {
        if (!value) return;
        let el = document.head.querySelector(selector) as HTMLElement | null;
        if (!el) {
          if (selector.startsWith("meta")) {
            const m = document.createElement("meta");
            if (attr === "property")
              m.setAttribute(
                "property",
                selector.match(/\[property="(.+?)"\]/)![1],
              );
            else m.setAttribute("name", selector.match(/\[name="(.+?)"\]/)![1]);
            document.head.appendChild(m);
            el = m;
          } else if (selector === 'link[rel="canonical"]') {
            const l = document.createElement("link");
            l.setAttribute("rel", "canonical");
            document.head.appendChild(l);
            el = l as unknown as HTMLElement;
          }
        }
        if (el) el.setAttribute("content", value);
      };

      setMeta('meta[name="description"]', "name", description);
      setMeta('meta[property="og:title"]', "property", ogTitle || title);
      setMeta(
        'meta[property="og:description"]',
        "property",
        ogDescription || description,
      );
      setMeta('meta[name="twitter:title"]', "name", ogTitle || title);
      setMeta(
        'meta[name="twitter:description"]',
        "name",
        ogDescription || description,
      );

      const canonical = t("meta.canonical", { defaultValue: "" });
      if (canonical) {
        let link = document.head.querySelector(
          'link[rel="canonical"]',
        ) as HTMLLinkElement | null;
        if (!link) {
          link = document.createElement("link");
          link.rel = "canonical";
          document.head.appendChild(link);
        }
        link.href = canonical;
      }

      const html = document.documentElement;
      html.lang = i18n.language ? i18n.language.slice(0, 2) : html.lang;
    };

    apply();
    i18n.on("languageChanged", apply);
    return () => {
      i18n.off("languageChanged", apply);
    };
  }, [t, i18n]);

  return null;
}

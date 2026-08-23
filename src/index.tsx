import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.scss";
import "./i18n";
import { NavProvider } from "./context/NavContext.tsx";

// index.html ships static SEO tags so crawlers that don't run JS still see
// correct content for the homepage (see scripts/generate-localized-index.js).
// Once React mounts, <Seo> (react-helmet-async) owns these tags per route,
// so the static ones are removed here to avoid duplicates.
document
  .querySelectorAll(
    'meta[name="description"], meta[property="og:title"], meta[property="og:description"], meta[name="twitter:title"], meta[name="twitter:description"], link[rel="canonical"]',
  )
  .forEach((el) => el.remove());

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <NavProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NavProvider>
  </HelmetProvider>,
);

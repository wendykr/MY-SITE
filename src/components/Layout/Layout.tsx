import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import "./Layout.scss";
import { Navigation } from "../Navigation/Navigation";
import { Footer } from "../Footer/Footer";
import { ToTop } from "../ToTop/ToTop";

export const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="layout">
      <Navigation />
      <main className="layout__main">
        <Outlet />
      </main>
      <Footer />
      <ToTop />
    </div>
  );
};

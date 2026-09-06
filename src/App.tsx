import { ReactElement } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { About } from "./pages/About/About";
import { Blog } from "./pages/Blog/Blog";
import { Contact } from "./pages/Contact/Contact";
import { Experiences } from "./pages/Experiences/Experiences";
import { Home } from "./pages/Home/Home";
import { Layout } from "./components/Layout/Layout";
import { Projects } from "./pages/Projects/Projects";
import { Recommendations } from "./pages/Recommendations/Recommendations";
import { sectionRoutes } from "./constants/sectionRoutes";
import { SectionKey } from "./constants/sectionRoutes";

const sectionElements: Record<SectionKey, ReactElement> = {
  about: <About />,
  experience: <Experiences />,
  projects: <Projects />,
  posts: <Blog />,
  recommendations: <Recommendations />,
  contact: <Contact />,
};

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="en" element={<Home />} />
        {sectionRoutes.flatMap((route) => [
          <Route
            key={`${route.key}-cs`}
            path={route.cs}
            element={sectionElements[route.key]}
          />,
          <Route
            key={`${route.key}-en`}
            path={`en/${route.en}`}
            element={sectionElements[route.key]}
          />,
        ])}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;

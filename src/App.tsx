import { About } from "./components/About/About";
import { Experiences } from "./components/Experiences/Experiences";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation";
import { Projects } from "./components/Projects/Projects";
import { Recommendations } from "./components/Recommendations/Recommendations";
import { ToTop } from "./components/ToTop/ToTop";
import { Seo } from "./Seo";

function App() {
  return (
    <>
      <Seo />
      <Navigation />
      <Header />
      <About />
      <Experiences />
      <Projects />
      <Recommendations />
      <Footer />
      <ToTop />
    </>
  );
}

export default App;

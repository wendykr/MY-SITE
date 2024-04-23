import { About } from './components/About/About';
import { Experiences } from './components/Experiences/Experiences';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Navigation } from './components/Navigation/Navigation';
import { Projects } from './components/Projects/Projects';
import { Skills } from './components/Skills/Skills';
import { ToTop } from './components/ToTop/ToTop';

function App() {

  return (
    <>
      <Navigation />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Experiences />
      <Footer />
      <ToTop />
    </>
  )
}

export default App
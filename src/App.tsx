import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="noise" style={{ position: 'relative', minHeight: '100svh' }}>
        <Navbar />
        <main>
          <Hero />
          {/* Section dividers */}
          <div className="container-main">
            <div className="divider" />
          </div>
          <About />
          <div className="container-main">
            <div className="divider" />
          </div>
          <Skills />
          <div className="container-main">
            <div className="divider" />
          </div>
          <Projects />
          <div className="container-main">
            <div className="divider" />
          </div>
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

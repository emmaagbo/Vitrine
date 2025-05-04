import Navbar from './components/Header';
import Hero from './pages/Hero';
import About from './pages/About';
import Projects from './pages/Projects/Project';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './styles/globals.css';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
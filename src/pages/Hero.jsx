import { ArrowRight } from 'lucide-react';
import { Code } from 'lucide-react';

function Hero() {
  return (
    <section id="home" className="pt-24 min-h-screen flex items-center bg-gray-900">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="flex flex-col w-full md:w-1/2 justify-center items-start md:pr-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Développeur <span className="text-neon">Web</span> Créatif
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Je transforme vos idées en expériences web exceptionnelles
          </p>
          <div className="flex gap-4">
            <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex items-center">
              Voir mes projets
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a href="#contact" className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-800 hover:bg-opacity-20 transition-all">
              Me contacter
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 py-12 md:py-0 flex justify-center">
          <div className="relative w-64 h-64 animate-float">
            <div className="absolute inset-0 rounded-full bg-blue-500 bg-opacity-20 blur-xl"></div>
            <div className="absolute inset-4 rounded-full bg-gray-800 flex items-center justify-center">
              <Code size={80} className="text-neon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
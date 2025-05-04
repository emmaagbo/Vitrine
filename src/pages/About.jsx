import { User, ArrowRight } from 'lucide-react';

function About() {
  return (
    <section id="about" className="py-24 min-h-screen bg-gray-800 flex items-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">À propos de <span className="text-neon">moi</span></h2>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-64 h-64 rounded-full bg-gray-700 p-2 border-4 border-neon">
              <div className="w-full h-full rounded-full bg-gray-600 flex items-center justify-center">
                <User size={100} className="text-neon" />
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-bold text-white mb-4">Emmanuel</h3>
            <p className="text-lg text-gray-300 mb-6">
              Développeur passionné spécialisé dans la création d'applications web modernes et performantes. Avec plus de 5 ans d'expérience dans le développement frontend et backend, je combine créativité et expertise technique pour donner vie à des projets innovants.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-700 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-white mb-3">Compétences</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    React, Next.js, Vue.js
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Node.js, Express, MongoDB
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Tailwind CSS, SASS, UI/UX
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-700 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-white mb-3">Expérience</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Développeur Frontend Senior
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Chef de projet technique
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Consultant UX/UI
                  </li>
                </ul>
              </div>
            </div>
            
            <a href="#contact" className="inline-flex items-center text-neon hover:underline">
              En savoir plus sur mon parcours
              <ArrowRight className="ml-2" size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
import { useState } from 'react';
import reactLogo from '../assets/image.png'
import { User, ArrowRight, Code, Server, Palette } from 'lucide-react';

function About() {
  // État pour gérer l'animation des compétences au survol
  const [activeSkill, setActiveSkill] = useState(null);

  // Liste des compétences avec icônes
  const skills = [
    {
      id: 1,
      icon: <Code size={18} />,
      text: "React, Next.js, Vue.js",
      color: "blue-500"
    },
    {
      id: 2,
      icon: <Server size={18} />,
      text: "Node.js, Express, MongoDB",
      color: "green-500"
    },
    {
      id: 3,
      icon: <Palette size={18} />,
      text: "Tailwind CSS, SASS, UI/UX",
      color: "purple-500"
    }
  ];

  // Liste des expériences
  const experiences = [
    {
      id: 1,
      role: "Développeur Frontend Senior",
      period: "2023 - Présent"
    },
    {
      id: 2, 
      role: "Chef de projet technique",
      period: "2023 - 2024"
    },
    {
      id: 3,
      role: "Consultant UX/UI",
      period: "2024 - 2025"
    }
  ];

  return (
    <section id="about" className="py-24 min-h-screen bg-gray-800 flex items-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">À propos de <span className="text-blue-500">moi</span></h2>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/*Photo de profil */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-64 h-64 rounded-full bg-gray-700 p-2 border-4 border-blue-500 shadow-lg shadow-blue-500/20 transition-all duration-300 hover:shadow-blue-500/40">
              <div className="w-full h-full rounded-full bg-gray-600 flex items-center justify-center overflow-hidden">
                {/**<User size={100} className="text-blue-500" /> */}
                <img src={reactLogo} alt="React Logo" className="w-full h-full object-cover rounded-full" />
              </div>
            </div>
          </div>
          
          {/* Informations personnelles */}
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-bold text-white mb-4">Emmanuel Mahoukpégo</h3>
            <p className="text-lg text-gray-300 mb-6">
              Développeur passionné spécialisé dans la création d'applications web modernes et performantes. 
              Avec plus de 5 ans d'expérience dans le développement frontend et backend, 
              je combine créativité et expertise technique pour donner vie à des projets innovants.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Section compétences */}
              <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-xl font-bold text-white mb-3 flex items-center">
                  <span className="bg-blue-500 p-1 rounded mr-2 inline-flex">
                    <Code size={18} />
                  </span>
                  Compétences
                </h4>
                <ul className="space-y-3 text-gray-300">
                  {skills.map(skill => (
                    <li 
                      key={skill.id} 
                      className="flex items-center p-2 rounded hover:bg-gray-600 transition-colors duration-200"
                      onMouseEnter={() => setActiveSkill(skill.id)}
                      onMouseLeave={() => setActiveSkill(null)}
                    >
                      <div className={`w-6 h-6 bg-${skill.color} rounded flex items-center justify-center mr-3 transition-transform duration-300 ${activeSkill === skill.id ? 'scale-110' : ''}`}>
                        {skill.icon}
                      </div>
                      <span>{skill.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Section expérience */}
              <div className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-xl font-bold text-white mb-3 flex items-center">
                  <span className="bg-blue-500 p-1 rounded mr-2 inline-flex">
                    <ArrowRight size={18} />
                  </span>
                  Expérience
                </h4>
                <ul className="space-y-3 text-gray-300">
                  {experiences.map(exp => (
                    <li key={exp.id} className="p-2 rounded hover:bg-gray-600 transition-colors duration-200">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          <span>{exp.role}</span>
                        </div>
                        <span className="text-sm text-gray-400">{exp.period}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Lien vers la section contact */}
            <a 
              href="#contact" 
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
              aria-label="En savoir plus sur mon parcours"
            >
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
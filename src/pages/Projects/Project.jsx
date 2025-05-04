import { ArrowRight } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../../utils/constants';

function Projects() {
  return (
    <section id="projects" className="py-24 min-h-screen bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">Mes <span className="text-neon">projets</span></h2>
        <p className="text-xl text-gray-400 mb-12 text-center max-w-3xl mx-auto">
          Découvrez une sélection de mes travaux récents, démontrant mon expertise technique et ma créativité
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#" className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">
            Voir tous les projets
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
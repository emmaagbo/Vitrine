import { useState, useEffect } from 'react';
import { ArrowRight, Filter, Grid, List } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { projectsData } from '../../utils/constants';

function Projects() {
  // États pour le filtrage et l'affichage
  const [filter, setFilter] = useState('all');
  const [displayMode, setDisplayMode] = useState('grid');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Extraction des catégories uniques depuis les données des projets
  const uniqueCategories = ['all', ...new Set(projectsData.map(project => project.category || 'other'))];
  
  // Nom des catégories pour l'affichage
  const categoryNames = {
    all: 'Tous',
    web: 'Web',
    mobile: 'Mobile',
    design: 'Design',
    other: 'Autres'
  };

  // Effet pour filtrer les projets quand le filtre change
  useEffect(() => {
    setIsAnimating(true);
    
    setTimeout(() => {
      if (filter === 'all') {
        setFilteredProjects(projectsData);
      } else {
        setFilteredProjects(projectsData.filter(project => project.category === filter));
      }
      setIsAnimating(false);
    }, 300);
  }, [filter]);

  return (
    <section id="projects" className="py-24 min-h-screen bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">Mes <span className="text-blue-500">projets</span></h2>
        <p className="text-xl text-gray-400 mb-12 text-center max-w-3xl mx-auto">
          Découvrez une sélection de mes travaux récents, démontrant mon expertise technique et ma créativité
        </p>
        
        {/* Filtres et contrôles d'affichage */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center space-x-2 mb-4 md:mb-0 overflow-x-auto pb-2 w-full md:w-auto">
            <Filter size={18} className="text-blue-500 mr-2" />
            {uniqueCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  filter === cat 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {categoryNames[cat] || cat}
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => setDisplayMode('grid')}
              className={`p-2 rounded ${displayMode === 'grid' ? 'bg-blue-600' : 'bg-gray-800 hover:bg-gray-700'}`}
              aria-label="Affichage en grille"
            >
              <Grid size={16} className="text-white" />
            </button>
            <button 
              onClick={() => setDisplayMode('list')}
              className={`p-2 rounded ${displayMode === 'list' ? 'bg-blue-600' : 'bg-gray-800 hover:bg-gray-700'}`}
              aria-label="Affichage en liste"
            >
              <List size={16} className="text-white" />
            </button>
          </div>
        </div>
        
        {/* Grille de projets avec animation */}
        <div 
          className={`grid ${
            displayMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2' 
              : 'grid-cols-1'
          } gap-8 transition-all duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id || index} 
              {...project} 
              displayMode={displayMode}
            />
          ))}
        </div>
        
        {/* Message si aucun projet ne correspond au filtre */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            Aucun projet ne correspond à ce filtre.
          </div>
        )}
        
        {/* Bouton pour voir plus de projets */}
        <div className="mt-16 text-center">
          <a 
            href="/projets" 
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-all hover:shadow-lg hover:shadow-blue-500/20"
          >
            Voir tous les projets
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
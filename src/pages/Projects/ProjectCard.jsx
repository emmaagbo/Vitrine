import { Code, ExternalLink } from 'lucide-react';

function ProjectCard({ title, description, tags, image }) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover-scale transition-transform">
      <div className="h-48 bg-gray-700 flex items-center justify-center">
        {image || <Code size={64} className="text-gray-500" />}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-gray-700 text-blue-400 text-sm rounded-full">{tag}</span>
          ))}
        </div>
        <a href="#" className="text-neon hover:underline flex items-center">
          Voir le projet
          <ExternalLink size={16} className="ml-2" />
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
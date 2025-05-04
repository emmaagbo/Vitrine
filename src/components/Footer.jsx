import { Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  // Liens de navigation identiques à la navbar pour maintenir la cohérence
  const navLinks = [
    { id: "home", label: "Accueil" },
    { id: "about", label: "À propos" },
    { id: "projects", label: "Projets" },
    { id: "contact", label: "Contact" }
  ];
  
  // Liens vers les réseaux sociaux
  const socialLinks = [
    { id: "github", label: "GitHub", icon: Github, url: "https://github.com/emmaagbo" },
    { id: "linkedin", label: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/" },
    { id: "twitter", label: "Twitter", icon: Twitter, url: "https://twitter.com/" },
    { id: "email", label: "Email", icon: Mail, url: "mailto:mahoukpegoemmanuel@gmail.com" }
  ];
  
  // Fonction pour un défilement fluide
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Colonne 1: À propos */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">ManuTech</h2>
            <p className="mb-4">Développeur web créatif passionné par la création d'expériences web innovantes et intuitives.</p>
            
            {/* Réseaux sociaux */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((link) => (
                <a 
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Colonne 2: Navigation */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Colonne 3: Services */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-white transition-colors duration-200">
                Développement Front-end
              </li>
              <li className="text-gray-400 hover:text-white transition-colors duration-200">
                Développement Back-end
              </li>
              <li className="text-gray-400 hover:text-white transition-colors duration-200">
                UX/UI Design
              </li>
              <li className="text-gray-400 hover:text-white transition-colors duration-200">
                Responsive Design
              </li>
            </ul>
          </div>
          
          {/* Colonne 4: Contact */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Contact</h3>
            <address className="not-italic">
              <p className="mb-2">Porto-Novo, Bénin</p>
              <p className="mb-2">
                <a href="mailto:contact@exemple.com" className="text-gray-400 hover:text-white transition-colors duration-200">
                  mahoukpegoemmanuel@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+33612345678" className="text-gray-400 hover:text-white transition-colors duration-200">
                  +229 01 91 73 24 32
                </a>
              </p>
            </address>
          </div>
        </div>
        
        {/* Section du bas avec copyright et liens légaux */}
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} <span className='text-green-800'>ManuTech</span>. Tous droits réservés.</p>
          <div className="mt-4 md:mt-0 flex flex-col md:flex-row gap-4 md:gap-6">
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
            >
              Mentions légales
              <ExternalLink size={14} className="ml-1" />
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
            >
              Politique de confidentialité
              <ExternalLink size={14} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
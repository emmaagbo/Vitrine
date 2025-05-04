import { useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
// Pour utiliser EmailJS, importez la bibliothèque
// Installez avec: npm install @emailjs/browser
import emailjs from '@emailjs/browser';

function Contact() {
  // États pour gérer le formulaire
  const [name, setName] = useState(""); // Nom de l'utilisateur
  const [email, setEmail] = useState(""); // Email de l'utilisateur
  const [message, setMessage] = useState(""); // Message de l'utilisateur
  const [submitted, setSubmitted] = useState(false); // État de soumission réussie
  const [error, setError] = useState(""); // Message d'erreur
  const [loading, setLoading] = useState(false); // État de chargement

  // Fonction pour valider le format de l'email
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Réinitialisation des états
    setError("");
    
    // Validation des champs
    if (!name) {
      setError("Veuillez entrer votre nom");
      return;
    }
    
    if (!email) {
      setError("Veuillez entrer votre email");
      return;
    }
    
    if (!validateEmail(email)) {
      setError("Veuillez entrer un email valide");
      return;
    }
    
    if (!message) {
      setError("Veuillez entrer votre message");
      return;
    }

    setLoading(true);
    
    try {
      // Préparation des données pour EmailJS
      const templateParams = {
        name,
        email,
        message
      };

      // IMPORTANT: Ces valeurs doivent être définies dans des variables d'environnement
      // dans un fichier .env à la racine du projet:
      // REACT_APP_EMAILJS_SERVICE_ID=votre_service_id
      // REACT_APP_EMAILJS_TEMPLATE_ID=votre_template_id
      // REACT_APP_EMAILJS_PUBLIC_KEY=votre_clé_publique
      
      // Envoi de l'email via EmailJS
      const response = await emailjs.send(
        import.meta.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_1iprooc', 
        import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_enijtna', 
        templateParams, 
        import.meta.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'votre_clé_publique'
      );
      
      console.log('Succès!', response.status, response.text);
      
      // Succès
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
      
      // Réinitialisation de l'état après 5 secondes
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error('Échec de l\'envoi de l\'email:', err);
      setError("Une erreur est survenue. Veuillez réessayer plus tard.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 min-h-screen bg-gray-800 flex items-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">Me <span className="text-blue-500">contacter</span></h2>
        <p className="text-xl text-gray-400 mb-12 text-center max-w-3xl mx-auto">
          Vous avez un projet en tête ? N'hésitez pas à me contacter pour discuter de vos idées
        </p>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2">
            <div className="space-y-6">
              {submitted ? (
                <div className="bg-green-500 bg-opacity-20 border border-green-500 text-green-400 p-4 rounded-lg text-center">
                  <p>Merci pour votre message ! Je vous répondrai très bientôt.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {error && (
                    <div className="bg-red-500 bg-opacity-20 border border-red-500 text-red-400 p-4 rounded-lg">
                      {error}
                    </div>
                  )}
                  
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">Nom</label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="votre@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white mb-2">Message</label>
                    <textarea
                      id="message"
                      rows="5"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Décrivez votre projet ou votre message ici..."
                    ></textarea>
                  </div>
                  
                  <div
                    onClick={handleSubmit}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex justify-center items-center cursor-pointer disabled:bg-blue-800 disabled:opacity-70"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        handleSubmit(e);
                      }
                    }}
                  >
                    {loading ? (
                      <span>Envoi en cours...</span>
                    ) : (
                      <>
                        <span>Envoyer le message</span>
                        <Send className="ml-2" size={18} />
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="bg-gray-700 p-8 rounded-xl h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Informations de contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="text-blue-500 mr-4 mt-1" size={24} />
                  <div>
                    <h4 className="text-lg font-medium text-white">Email</h4>
                    <a href="mailto:mahoukpegoemmanuel@gmail.com" className="text-gray-400 hover:text-blue-500 transition-colors">
                      contact@emmanuel-dev.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Github className="text-blue-500 mr-4 mt-1" size={24} />
                  <div>
                    <h4 className="text-lg font-medium text-white">GitHub</h4>
                    <a href="https://github.com/emmaagbo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                      github.com/emmanuel-dev
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Linkedin className="text-blue-500 mr-4 mt-1" size={24} />
                  <div>
                    <h4 className="text-lg font-medium text-white">LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/emmanuel-mahoukp%C3%A9go-agbotoedo-50a6bb351" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                      linkedin.com/in/emmanuel-dev
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-600">
                <h4 className="text-lg font-medium text-white mb-4">Retrouvez-moi sur</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/emmaagbo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={24} className="text-white" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/emmanuel-mahoukp%C3%A9go-agbotoedo-50a6bb351" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} className="text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
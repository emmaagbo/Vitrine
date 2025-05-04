import { useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    // Ici, nous simulons juste un envoi réussi
    // Dans un vrai site, vous ajouteriez la logique d'envoi d'email
    if (name && email && message) {
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
      
      // Réinitialiser l'état après 3 secondes
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section id="contact" className="py-24 min-h-screen bg-gray-800 flex items-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">Me <span className="text-neon">contacter</span></h2>
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
                <>
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
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex justify-center items-center cursor-pointer"
                  >
                    <span>Envoyer le message</span>
                    <Send className="ml-2" size={18} />
                  </div>
                </>
              )}
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="bg-gray-700 p-8 rounded-xl h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Informations de contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="text-neon mr-4 mt-1" size={24} />
                  <div>
                    <h4 className="text-lg font-medium text-white">Email</h4>
                    <p className="text-gray-400">contact@emmanuel-dev.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Github className="text-neon mr-4 mt-1" size={24} />
                  <div>
                    <h4 className="text-lg font-medium text-white">GitHub</h4>
                    <p className="text-gray-400">github.com/emmanuel-dev</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Linkedin className="text-neon mr-4 mt-1" size={24} />
                  <div>
                    <h4 className="text-lg font-medium text-white">LinkedIn</h4>
                    <p className="text-gray-400">linkedin.com/in/emmanuel-dev</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-600">
                <h4 className="text-lg font-medium text-white mb-4">Retrouvez-moi sur</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                    <Github size={24} className="text-white" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
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
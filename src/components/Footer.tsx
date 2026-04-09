
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import meecrogateLogoSvg from "@/assets/meecrogate-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-900/80 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <img 
              src={meecrogateLogoSvg} 
              alt="Meecrogate" 
              className="h-8 mb-4"
            />
            <p className="text-gray-400 mb-6 max-w-md">
              La plateforme modulaire d'APIs cloud-native. Solution composable pour 
              l'exposition, la sécurisation et l'orchestration d'APIs.
            </p>
            <div className="flex space-x-4">
              <Link to="/demo">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Support
                </Button>
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Composants</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/components/api-gateway" className="hover:text-white transition-colors">API Gateway</Link></li>
              <li><Link to="/components/identity-server" className="hover:text-white transition-colors">Serveur d'identité</Link></li>
              <li><Link to="/components/orchestrator" className="hover:text-white transition-colors">Orchestrateur</Link></li>
              <li><Link to="/components/process-executor" className="hover:text-white transition-colors">Process Executor</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Ressources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/usecases" className="hover:text-white transition-colors">Cas d'usage</Link></li>
              <li><Link to="/demo" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2026 Meecrogate. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/mentions-legales" className="text-gray-400 hover:text-white text-sm transition-colors">Mentions légales</Link>
            <Link to="/politique-confidentialite" className="text-gray-400 hover:text-white text-sm transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


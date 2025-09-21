
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PricingHero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient removed */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <Badge className="mb-4 bg-blue-500/10 text-blue-300 border-blue-500/20">
            🚀 Tarifs d'accès anticipé
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Gestion d'API
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Simplifiée
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Plateforme révolutionnaire de gestion d'API low-code alimentée par la configuration JSON. 
            Pas de configuration complexe, pas de vendor lock-in - juste de la pure magie d'orchestration d'API.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              Démarrer l'essai gratuit
            </Button>
            <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3">
              Voir la démo
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-2xl font-bold text-blue-400">API Gateway</div>
              <div className="text-sm text-gray-400">Routage intelligent</div>
            </div>
            <div className="text-white">
              <div className="text-2xl font-bold text-purple-400">Orchestrateur</div>
              <div className="text-sm text-gray-400">Moteur de workflow</div>
            </div>
            <div className="text-white">
              <div className="text-2xl font-bold text-green-400">Serveur d'accès</div>
              <div className="text-sm text-gray-400">Auth & Sécurité</div>
            </div>
            <div className="text-white">
              <div className="text-2xl font-bold text-orange-400">Process Executor</div>
              <div className="text-sm text-gray-400">Moteur d'exécution</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingHero;

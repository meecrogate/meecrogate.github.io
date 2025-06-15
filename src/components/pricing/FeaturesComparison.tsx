
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const FeaturesComparison = () => {
  const features = [
    {
      category: "Plateforme principale",
      items: [
        { name: "Passerelle API", developer: true, startup: true, business: true },
        { name: "Moteur d’orchestration", developer: true, startup: true, business: true },
        { name: "Serveur d’accès", developer: true, startup: true, business: true },
        { name: "Exécuteur de process", developer: true, startup: true, business: true },
        { name: "Configuration JSON", developer: true, startup: true, business: true },
      ]
    },
    {
      category: "Gestion des APIs",
      items: [
        { name: "Routage intelligent", developer: true, startup: true, business: true },
        { name: "Limitation de débit", developer: false, startup: true, business: true },
        { name: "Répartition de charge", developer: false, startup: true, business: true },
        { name: "Circuit breaker", developer: false, startup: false, business: true },
        { name: "Auto-scaling", developer: false, startup: false, business: true },
      ]
    },
    {
      category: "Sécurité & Auth",
      items: [
        { name: "Auth de base", developer: true, startup: true, business: true },
        { name: "OAuth 2.0 / JWT", developer: false, startup: true, business: true },
        { name: "Gestion des clés API", developer: false, startup: true, business: true },
        { name: "Liste blanche IP", developer: false, startup: false, business: true },
        { name: "Sécurité avancée", developer: false, startup: false, business: true },
      ]
    },
    {
      category: "Analyse & monitoring",
      items: [
        { name: "Métriques de base", developer: true, startup: true, business: true },
        { name: "Analytique temps réel", developer: false, startup: false, business: true },
        { name: "Dashboards personnalisés", developer: false, startup: false, business: true },
        { name: "Alertes", developer: false, startup: false, business: true },
        { name: "Performance avancée", developer: false, startup: false, business: true },
      ]
    },
    {
      category: "Limites d’APIs",
      items: [
        { name: "APIs maximum gérées", developer: "2", startup: "10", business: "Illimitées" }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          Comparatif des forfaits
        </h2>
        <p className="text-xl text-gray-300">
          Comparez les fonctionnalités incluses dans chaque offre
        </p>
      </div>

      <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
        <CardHeader>
          <div className="grid grid-cols-4 gap-4">
            <div></div>
            <div className="text-center">
              <CardTitle className="text-lg text-blue-400">Developer</CardTitle>
              <p className="text-sm text-gray-400">Gratuit</p>
            </div>
            <div className="text-center">
              <CardTitle className="text-lg text-purple-400">Startup</CardTitle>
              <p className="text-sm text-gray-400">49€/mois</p>
            </div>
            <div className="text-center">
              <CardTitle className="text-lg text-green-400">Business</CardTitle>
              <p className="text-sm text-gray-400">Contactez-nous</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {features.map((category) => (
            <div key={category.category} className="border-t border-gray-700">
              <div className="bg-gray-900/50 px-6 py-3">
                <h3 className="font-semibold text-white">{category.category}</h3>
              </div>
              {category.items.map((item) => {
                if (category.category === "Limites d’APIs") {
                  return (
                    <div key={item.name} className="grid grid-cols-4 gap-4 px-6 py-3 border-t border-gray-700/50 hover:bg-gray-800/30">
                      <div className="text-gray-300">{item.name}</div>
                      <div className="text-center text-white font-semibold">{item.developer}</div>
                      <div className="text-center text-white font-semibold">{item.startup}</div>
                      <div className="text-center text-white font-semibold">{item.business}</div>
                    </div>
                  );
                }
                return (
                  <div key={item.name} className="grid grid-cols-4 gap-4 px-6 py-3 border-t border-gray-700/50 hover:bg-gray-800/30">
                    <div className="text-gray-300">{item.name}</div>
                    <div className="text-center">
                      {item.developer === true ? (
                        <Check className="w-5 h-5 text-green-400 mx-auto" />
                      ) : item.developer === false  ? (
                        <X className="w-5 h-5 text-gray-600 mx-auto" />
                      ) : (
                        <span className="font-semibold text-white">{item.developer}</span>
                      )}
                    </div>
                    <div className="text-center">
                      {item.startup === true ? (
                        <Check className="w-5 h-5 text-green-400 mx-auto" />
                      ) : item.startup === false ? (
                        <X className="w-5 h-5 text-gray-600 mx-auto" />
                      ) : (
                        <span className="font-semibold text-white">{item.startup}</span>
                      )}
                    </div>
                    <div className="text-center">
                      {item.business === true ? (
                        <Check className="w-5 h-5 text-green-400 mx-auto" />
                      ) : item.business === false ? (
                        <X className="w-5 h-5 text-gray-600 mx-auto" />
                      ) : (
                        <span className="font-semibold text-white">{item.business}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default FeaturesComparison;


import { Check } from "lucide-react";

const Benefits = () => {
  const benefits = [
    "Déploiement rapide sans développeur",
    "Haute disponibilité et scalabilité automatique",
    "Gouvernance des APIs intégrée (sécurité, accès, quotas)",
    "Surveillance et traçabilité natives",
    "Adapté aux architectures modernes : microservices, serverless, event-driven",
    "No cloud vendor locking"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-white mb-6">
          🔷 Bénéfices clés
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Une plateforme qui s'adapte à vos besoins, pas l'inverse
        </p>
      </div>

      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-start space-x-4 group hover:scale-105 transition-transform duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-400" />
                </div>
              </div>
              <div className="text-lg text-gray-300 group-hover:text-white transition-colors duration-300">
                ✅ {benefit}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;


import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const UseCases = () => {
  const useCases = [
    {
      title: "Portails API sécurisés",
      description: "Pour partenaires ou clients externes",
      details: "Exposition contrôlée avec authentification, quotas et monitoring"
    },
    {
      title: "Intégration rapide",
      description: "Systèmes existants sans code",
      details: "Connectez vos applications legacy en quelques configurations JSON"
    },
    {
      title: "Processus métiers",
      description: "Comme APIs REST",
      details: "Transformez vos workflows BPMN en services web accessibles"
    },
    {
      title: "Orchestration intelligente",
      description: "APIs internes ou partenaires",
      details: "Chaînage automatique avec conditions et transformations"
    },
    {
      title: "Déploiement hybride",
      description: "Cloud + datacenter interne",
      details: "Flexibilité totale selon vos contraintes de sécurité"
    },
    {
      title: "Standardisation d'API",
      description: "Gouvernance unifiée",
      details: "Politiques cohérentes sur l'ensemble de votre SI"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-white mb-6">
          🔷 Cas d'usage typiques
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Des solutions concrètes pour vos défis d'intégration
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {useCases.map((useCase, index) => (
          <Card 
            key={index}
            className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 hover:scale-105"
          >
            <CardHeader>
              <CardTitle className="text-xl text-white">{useCase.title}</CardTitle>
              <CardDescription className="text-blue-400 font-medium">
                {useCase.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">{useCase.details}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UseCases;

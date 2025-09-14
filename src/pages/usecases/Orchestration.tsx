
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Network, Shuffle, Filter, Layers } from "lucide-react";

const OrchestrationPage = () => {
  const features = [
    {
      icon: Network,
      title: "Chaînage intelligent",
      description: "Orchestrez plusieurs APIs en un seul appel avec logique conditionnelle"
    },
    {
      icon: Shuffle,
      title: "Routage dynamique",
      description: "Direction automatique des requêtes selon les conditions métier"
    },
    {
      icon: Filter,
      title: "Transformation de données",
      description: "Mapping et enrichissement automatique des données en transit"
    },
    {
      icon: Layers,
      title: "Composition de services",
      description: "Créez des APIs composites à partir de services existants"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              🎯 Orchestration intelligente
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Coordonnez et chaînez vos APIs internes et partenaires pour créer des services complexes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <feature.icon className="h-8 w-8 text-blue-400" />
                    <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gray-800/30 border-gray-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Scénarios d'orchestration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-gray-300">
                <h3 className="text-lg font-semibold text-white mb-2">E-commerce intelligent</h3>
                <p>Orchestrez vérification de stock, calcul de prix dynamique, validation de paiement et déclenchement de livraison en une seule API.</p>
              </div>
              <div className="text-gray-300">
                <h3 className="text-lg font-semibold text-white mb-2">Services financiers</h3>
                <p>Chaînez APIs de scoring crédit, vérification d'identité, et validation réglementaire pour l'ouverture de compte instantanée.</p>
              </div>
              <div className="text-gray-300">
                <h3 className="text-lg font-semibold text-white mb-2">IoT et Industry 4.0</h3>
                <p>Agrégez données de capteurs, appliquez des règles métier et déclenchez des actions automatisées sur les équipements.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OrchestrationPage;

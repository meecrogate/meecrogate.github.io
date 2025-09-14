
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Server, Shield, Repeat } from "lucide-react";

const DeploiementHybridePage = () => {
  const features = [
    {
      icon: Cloud,
      title: "Multi-cloud",
      description: "Déployez sur AWS, Azure, GCP selon vos besoins"
    },
    {
      icon: Server,
      title: "On-premise",
      description: "Installation dans vos datacenters pour les données sensibles"
    },
    {
      icon: Shield,
      title: "Sécurité adaptée",
      description: "Politiques de sécurité personnalisées par environnement"
    },
    {
      icon: Repeat,
      title: "Synchronisation",
      description: "Réplication et synchronisation entre environnements"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              🌐 Déploiement hybride
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexibilité totale de déploiement : cloud public, privé, ou infrastructure sur site selon vos contraintes.
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
              <CardTitle className="text-2xl text-white">Architectures hybrides</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-gray-300">
                <h3 className="text-lg font-semibold text-white mb-2">Secteur bancaire</h3>
                <p>APIs publiques dans le cloud pour les services clients, APIs sensibles on-premise pour les opérations internes et la conformité.</p>
              </div>
              <div className="text-gray-300">
                <h3 className="text-lg font-semibold text-white mb-2">Santé et pharma</h3>
                <p>Données patients sécurisées dans le datacenter privé, APIs de recherche et analytics dans le cloud pour la scalabilité.</p>
              </div>
              <div className="text-gray-300">
                <h3 className="text-lg font-semibold text-white mb-2">Industrie manufacturière</h3>
                <p>Systèmes de production en edge computing, agrégation cloud pour l'analytics, et APIs partenaires en multi-cloud.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DeploiementHybridePage;

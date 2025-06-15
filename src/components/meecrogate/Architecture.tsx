
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Database, Settings, Monitor } from "lucide-react";

const Architecture = () => {
  const architecturePoints = [
    {
      icon: <Cloud className="w-6 h-6 text-blue-400" />,
      title: "100% Stateless",
      description: "Aucun stockage local, scalabilité horizontale native"
    },
    {
      icon: <Settings className="w-6 h-6 text-purple-400" />,
      title: "Configuration-driven",
      description: "Logique métier via fichiers JSON ou interface graphique"
    },
    {
      icon: <Database className="w-6 h-6 text-green-400" />,
      title: "Interopérabilité native",
      description: "REST, WebSocket, Kafka, JDBC"
    },
    {
      icon: <Monitor className="w-6 h-6 text-orange-400" />,
      title: "Monitoring centralisé",
      description: "Logs, métriques et traces intégrés"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-white mb-6">
          🔷 Architecture technique
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Cloud-native par design, compatible Kubernetes et VM traditionnelles
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {architecturePoints.map((point, index) => (
          <Card 
            key={index}
            className="bg-gray-800/50 border-gray-700 backdrop-blur-sm text-center hover:bg-gray-800/70 transition-all duration-300"
          >
            <CardHeader className="pb-4">
              <div className="flex justify-center mb-3">
                {point.icon}
              </div>
              <CardTitle className="text-lg text-white">{point.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300">
                {point.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-white mb-4">
            Déploiement flexible
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="grid md:grid-cols-3 gap-8 text-gray-300">
            <div>
              <h4 className="font-semibold text-blue-400 mb-2">Cloud-Native</h4>
              <p>Kubernetes, containers, auto-scaling</p>
            </div>
            <div>
              <h4 className="font-semibold text-purple-400 mb-2">Hybride</h4>
              <p>Cloud public + datacenter interne</p>
            </div>
            <div>
              <h4 className="font-semibold text-green-400 mb-2">On-Premise</h4>
              <p>Machines virtuelles traditionnelles</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Architecture;

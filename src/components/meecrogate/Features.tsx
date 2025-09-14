
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Settings, Layers, Zap, Check } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      title: "🔐 API Gateway",
      description: "Exposition et sécurisation complète de vos APIs",
      capabilities: [
        "APIs REST, OpenAPI, AsyncAPI",
        "Auth, OAuth2, JWT, quotas, CORS",
        "Routage intelligent et versioning",
        "Documentation intégrée"
      ]
    },
    {
      icon: <Settings className="w-8 h-8 text-purple-400" />,
      title: "🧾 Serveur d'identité & souscription",
      description: "Gestion centralisée des utilisateurs et accès",
      capabilities: [
        "Gestion utilisateurs, clients, rôles",
        "Portail développeur personnalisable",
        "Attribution quotas et SLA",
        "Intégration SSO / LDAP"
      ]
    },
    {
      icon: <Layers className="w-8 h-8 text-green-400" />,
      title: "⚙️ Orchestrateur d'APIs",
      description: "Orchestration intelligente synchrone et asynchrone",
      capabilities: [
        "Enchaînement de services",
        "Conditions et transformations",
        "Déclenchements événementiels",
        "Support OpenAPI & AsyncAPI"
      ]
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-400" />,
      title: "🧠 Process Executor",
      description: "Processus métier exécutables comme Services Web",
      capabilities: [
        "Intégration BPMN native",
        "Moteurs d'automatisation",
        "Service web sans code",
        "Observabilité complète"
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-white mb-6">
          🔷 Composants principaux
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Chaque composant est stateless, modulaire et entièrement configurable sans code
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <Card 
            key={index}
            className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 hover:scale-105"
          >
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-4 mb-4">
                {feature.icon}
                <CardTitle className="text-2xl text-white">{feature.title}</CardTitle>
              </div>
              <CardDescription className="text-gray-300 text-lg">
                {feature.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {feature.capabilities.map((capability, idx) => (
                  <li key={idx} className="flex items-start text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Features;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Layers, Zap, ArrowRight, Fingerprint } from "lucide-react";
import MeecrogateComponentsGrid from "./MeecrogateComponentsGrid";

const Features = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" style={{ color: '#007AFF' }} />,
      title: "API Gateway",
      description: "Exposition et sécurisation complète de vos APIs",
      capabilities: [
        "APIs REST, OpenAPI, AsyncAPI",
        "Auth, OAuth2, JWT, quotas, CORS",
        "Routage intelligent et versioning",
        "Documentation intégrée"
      ]
    },
    {
      icon: <Fingerprint className="w-8 h-8" style={{ color: '#007AFF' }} />,
      title: "Serveur d'identité & souscription",
      description: "Gestion centralisée des utilisateurs et accès",
      capabilities: [
        "Gestion utilisateurs, clients, rôles",
        "Portail développeur personnalisable",
        "Attribution quotas et SLA",
        "Intégration SSO / LDAP"
      ]
    },
    {
      icon: <Layers className="w-8 h-8" style={{ color: '#007AFF' }} />,
      title: "Orchestrateur d'APIs",
      description: "Orchestration intelligente synchrone et asynchrone",
      capabilities: [
        "Enchaînement de services",
        "Conditions et transformations",
        "Déclenchements événementiels",
        "Support OpenAPI & AsyncAPI"
      ]
    },
    {
      icon: <Zap className="w-8 h-8" style={{ color: '#007AFF' }} />,
      title: "Process Executor",
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
    <div className="min-h-screen bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            Composants principaux
          </h1>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            <span style={{ color: '#FFB300' }} className="font-extrabold">
              Chaque composant est stateless, modulaire et entièrement configurable sans code.
            </span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-24">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm shadow-lg shadow-gray-900/50 transition-all duration-300 border-2 border-gray-700 border-opacity-30 hover:bg-gray-800/70"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  {feature.icon}
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                </div>
                <CardDescription className="text-gray-300 text-lg">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {feature.capabilities.map((capability, idx) => (
                    <li key={idx} className="flex items-start text-gray-300 text-base">
                      <ArrowRight style={{ color: '#FFB300' }} className="w-4 h-4 mr-3 flex-shrink-0 mt-1" />
                      <span className="font-light">{capability}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Explorer les composants
          </h3>
          <p className="text-lg text-gray-400 mb-12">
            Cliquez sur un composant pour découvrir ses fonctionnalités détaillées et sa place dans l'architecture.
          </p>
        </div>
        
        <MeecrogateComponentsGrid />
      </div>
    </div>
  );
};

export default Features;

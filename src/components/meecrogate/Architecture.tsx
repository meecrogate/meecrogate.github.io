
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Database, Settings, Monitor, GitBranch, Server, Workflow } from "lucide-react";

const Architecture = () => {
  const architecturePoints = [
    {
      icon: <Cloud className="w-6 h-6 text-brand-blue" />,
      title: "100% Stateless",
      description: "Aucun stockage local, scalabilité horizontale native",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop&crop=center"
    },
    {
      icon: <Settings className="w-6 h-6 text-brand-orange" />,
      title: "Configuration-driven",
      description: "Logique métier via fichiers JSON ou interface graphique",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center"
    },
    {
      icon: <Database className="w-6 h-6 text-brand-blue" />,
      title: "Interopérabilité native",
      description: "REST, WebSocket, Kafka, JDBC",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop&crop=center"
    },
    {
      icon: <Monitor className="w-6 h-6 text-brand-orange" />,
      title: "Monitoring centralisé",
      description: "Logs, métriques et traces intégrés",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop&crop=center"
    }
  ];

  const GitOpsFlowDiagram = () => {
    const steps = [
      { id: 1, title: "Git Repository", icon: <GitBranch className="w-5 h-5" />, color: "bg-brand-blue" },
      { id: 2, title: "CI/CD Pipeline", icon: <Workflow className="w-5 h-5" />, color: "bg-brand-orange" },
      { id: 3, title: "Container Registry", icon: <Database className="w-5 h-5" />, color: "bg-brand-blue" },
      { id: 4, title: "Kubernetes Cluster", icon: <Server className="w-5 h-5" />, color: "bg-brand-orange" }
    ];

    return (
      <div className="mt-6 p-4 bg-brand-dark/50 rounded-lg">
        <h5 className="text-white font-semibold mb-4 text-center">Flux GitOps avec Kubernetes</h5>
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0 sm:space-x-2">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className={`${step.color} p-3 rounded-full text-white mb-2`}>
                  {step.icon}
                </div>
                <span className="text-xs text-brand-light text-center max-w-20">{step.title}</span>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden sm:block mx-2">
                  <div className="w-8 h-0.5 bg-brand-light/30"></div>
                  <div className="w-0 h-0 border-l-4 border-l-brand-light/30 border-t-2 border-t-transparent border-b-2 border-b-transparent ml-8 -mt-1"></div>
                </div>
              )}
              {index < steps.length - 1 && (
                <div className="sm:hidden">
                  <div className="h-8 w-0.5 bg-brand-light/30 mx-auto"></div>
                  <div className="w-0 h-0 border-t-4 border-t-brand-light/30 border-l-2 border-l-transparent border-r-2 border-r-transparent -mt-1"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-4 text-xs text-brand-light/70 text-center">
          Code → Build → Deploy → Monitor
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-white mb-6">
          🔷 Architecture technique
        </h2>
        <p className="text-xl text-brand-light max-w-3xl mx-auto">
          Cloud-native par design, compatible Kubernetes et VM traditionnelles
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {architecturePoints.map((point, index) => (
          <Card 
            key={index}
            className="bg-brand-dark/50 border-brand-light/20 backdrop-blur-sm hover:bg-brand-dark/70 transition-all duration-300 overflow-hidden"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={point.image} 
                alt={point.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />
              <div className="absolute top-4 left-4">
                {point.icon}
              </div>
            </div>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg text-white">{point.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-brand-light">
                {point.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-brand-dark/50 border-brand-light/20 backdrop-blur-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-white mb-4">
            Déploiement flexible
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="grid md:grid-cols-3 gap-8 text-brand-light mb-6">
            <div>
              <h4 className="font-semibold text-brand-blue mb-2">Cloud-Native</h4>
              <p>Kubernetes, containers, auto-scaling</p>
            </div>
            <div>
              <h4 className="font-semibold text-brand-orange mb-2">Hybride</h4>
              <p>Cloud public + datacenter interne</p>
            </div>
            <div>
              <h4 className="font-semibold text-brand-blue mb-2">On-Premise</h4>
              <p>Machines virtuelles traditionnelles</p>
            </div>
          </div>
          <GitOpsFlowDiagram />
        </CardContent>
      </Card>
    </div>
  );
};

export default Architecture;

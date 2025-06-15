
import { Shield, Settings, Layers, Zap } from "lucide-react";

const components = [
  {
    icon: Shield,
    title: "API Gateway",
    description: "Sécurisation & Routage",
    gradient: "from-brand-blue/20 to-brand-blue/30",
    border: "hover:border-brand-blue/30"
  },
  {
    icon: Settings,
    title: "Serveur d'identité",
    description: "Gestion des accès",
    gradient: "from-brand-orange/20 to-brand-orange/30",
    border: "hover:border-brand-orange/30"
  },
  {
    icon: Layers,
    title: "Orchestrateur",
    description: "Synchrone & Asynchrone",
    gradient: "from-brand-blue/20 to-brand-blue/30",
    border: "hover:border-brand-blue/30"
  },
  {
    icon: Zap,
    title: "Process Executor",
    description: "BPMN & Automatisation",
    gradient: "from-brand-orange/20 to-brand-orange/30",
    border: "hover:border-brand-orange/30"
  }
];

const MeecrogateComponentsGrid = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
    {components.map((comp, i) => (
      <div key={i} className={`group hover:scale-105 transition-all duration-300`}>
        <div className={`bg-gradient-to-br from-brand-dark/60 to-brand-dark/40 backdrop-blur-md rounded-2xl p-6 border border-brand-light/10 ${comp.border} transition-colors`}>
          <div className={`bg-gradient-to-br ${comp.gradient} w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4`}>
            <comp.icon className="w-6 h-6 text-brand-light" />
          </div>
          <div className="text-lg font-bold text-brand-light mb-2">{comp.title}</div>
          <div className="text-sm text-brand-light/60">{comp.description}</div>
        </div>
      </div>
    ))}
  </div>
);

export default MeecrogateComponentsGrid;

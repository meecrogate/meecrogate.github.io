
import { Settings, Layers, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import apiGatewayIcon from "@/assets/api-gateway-icon.png";

const components = [
  {
    icon: "image",
    iconSrc: apiGatewayIcon,
    title: "API Gateway",
    description: "Sécurisation & Routage",
    gradient: "from-brand-blue/20 to-brand-blue/30",
    border: "hover:border-brand-blue/30",
    href: "/components/api-gateway"
  },
  {
    icon: Settings,
    title: "Serveur d'identité",
    description: "Gestion des accès",
    gradient: "from-brand-orange/20 to-brand-orange/30",
    border: "hover:border-brand-orange/30",
    href: "/components/identity-server"
  },
  {
    icon: Layers,
    title: "Orchestrateur",
    description: "Synchrone & Asynchrone",
    gradient: "from-brand-blue/20 to-brand-blue/30",
    border: "hover:border-brand-blue/30",
    href: "/components/orchestrator"
  },
  {
    icon: Zap,
    title: "Process Executor",
    description: "BPMN & Automatisation",
    gradient: "from-brand-orange/20 to-brand-orange/30",
    border: "hover:border-brand-orange/30",
    href: "/components/process-executor"
  }
];

const MeecrogateComponentsGrid = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
    {components.map((comp, i) => (
      <Link key={i} to={comp.href} className={`group hover:scale-105 transition-all duration-300 block`}>
        <div className={`bg-gradient-to-br from-brand-dark/60 to-brand-dark/40 backdrop-blur-md rounded-2xl p-6 border border-brand-light/10 ${comp.border} transition-colors cursor-pointer`}>
          <div className={`bg-gradient-to-br ${comp.gradient} w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4`}>
            {comp.icon === "image" ? (
              <img src={comp.iconSrc} alt={comp.title} className="w-8 h-8 bg-white/10 rounded-lg p-1" />
            ) : (
              <comp.icon className="w-6 h-6 text-brand-light" />
            )}
          </div>
          <div className="text-lg font-bold text-brand-light mb-2">{comp.title}</div>
          <div className="text-sm text-brand-light/60">{comp.description}</div>
        </div>
      </Link>
    ))}
  </div>
);

export default MeecrogateComponentsGrid;

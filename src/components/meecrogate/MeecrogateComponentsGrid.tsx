import { Shield, Fingerprint, Layers, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const components = [
  {
    icon: Shield,
    title: "API Gateway",
    href: "/components/api-gateway"
  },
  {
    icon: Fingerprint,
    title: "Serveur d'identité & souscription",
    href: "/components/identity-server"
  },
  {
    icon: Layers,
    title: "Orchestrateur d'APIs",
    href: "/components/orchestrator"
  },
  {
    icon: Zap,
    title: "Process Executor",
    href: "/components/process-executor"
  }
];

const MeecrogateComponentsGrid = () => (
  <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
    {components.map((component, index) => {
      const Icon = component.icon;
      return (
        <Link
          key={index}
          to={component.href}
          className="flex flex-col items-center p-4 sm:p-6 bg-gray-900/60 rounded-xl cursor-pointer hover:bg-gray-800 hover:border-blue-500 border border-gray-700 transition-all duration-300 transform hover:scale-[1.02] group"
        >
          <Icon className="w-8 h-8 group-hover:text-white mb-3" style={{ color: '#007AFF' }} />
          <p className="text-sm font-medium text-gray-300 group-hover:text-white text-center">
            {component.title}
          </p>
        </Link>
      );
    })}
  </div>
);

export default MeecrogateComponentsGrid;

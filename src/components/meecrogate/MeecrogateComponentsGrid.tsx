import { Shield, Fingerprint, Layers, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "@/i18n/Link";

const components = [
  { id: "apiGateway", icon: Shield, href: "/components/api-gateway#" },
  { id: "identityServer", icon: Fingerprint, href: "/components/identity-server#" },
  { id: "orchestrator", icon: Layers, href: "/components/orchestrator#" },
  { id: "processExecutor", icon: Zap, href: "/components/process-executor#" },
];

const MeecrogateComponentsGrid = () => {
  const { t } = useTranslation("home");

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
      {components.map((component) => {
        const Icon = component.icon;
        return (
          <Link
            key={component.id}
            to={component.href}
            className="flex flex-col items-center p-4 sm:p-6 bg-gray-900/60 rounded-xl cursor-pointer hover:bg-gray-800 hover:border-blue-500 border border-gray-700 transition-all duration-300 transform hover:scale-[1.02] group"
          >
            <Icon className="w-8 h-8 group-hover:text-white mb-3" style={{ color: '#007AFF' }} />
            <p className="text-sm font-medium text-gray-300 group-hover:text-white text-center">
              {t(`componentsGrid.${component.id}`)}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default MeecrogateComponentsGrid;

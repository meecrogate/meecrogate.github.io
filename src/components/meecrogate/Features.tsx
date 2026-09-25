import { useTranslation } from "react-i18next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Layers, Zap, ArrowRight, Fingerprint } from "lucide-react";
import MeecrogateComponentsGrid from "./MeecrogateComponentsGrid";

const Features = () => {
  const { t } = useTranslation("features");

  const features = [
    { id: "apiGateway", icon: <Shield className="w-8 h-8" style={{ color: '#007AFF' }} /> },
    { id: "identityServer", icon: <Fingerprint className="w-8 h-8" style={{ color: '#007AFF' }} /> },
    { id: "orchestrator", icon: <Layers className="w-8 h-8" style={{ color: '#007AFF' }} /> },
    { id: "processExecutor", icon: <Zap className="w-8 h-8" style={{ color: '#007AFF' }} /> },
  ];

  return (
    <div className="min-h-screen bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-3">
            {t("title")}
          </h1>
          <div className="w-16 h-1 bg-indigo-500 rounded-sm mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto">
            <span style={{ color: '#FFB300' }} className="font-extrabold">
              {t("subtitle")}
            </span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-24">
          {features.map((feature) => (
            <Card
              key={feature.id}
              className="bg-gray-900/50 backdrop-blur-sm shadow-lg shadow-gray-900/50 transition-all duration-300 border-2 border-gray-700 border-opacity-30 hover:bg-gray-800/70"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  {feature.icon}
                  <CardTitle className="text-white">{t(`items.${feature.id}.title`)}</CardTitle>
                </div>
                <CardDescription className="text-gray-300 text-lg">
                  {t(`items.${feature.id}.description`)}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {(t(`items.${feature.id}.capabilities`, { returnObjects: true }) as string[]).map((capability, idx) => (
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
            {t("explore.title")}
          </h3>
          <p className="text-lg text-gray-400 mb-12">
            {t("explore.description")}
          </p>
        </div>
        
        <MeecrogateComponentsGrid />
      </div>
    </div>
  );
};

export default Features;

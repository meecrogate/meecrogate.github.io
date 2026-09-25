import { useTranslation } from "react-i18next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@/i18n/Link";
import portailsApiImg from "@/assets/usecases/portails-api-new.jpg";
import integrationRapideImg from "@/assets/usecases/integration-rapide-new.jpg";
import processusMetiersImg from "@/assets/usecases/processus-metiers-new.jpg";
import orchestrationImg from "@/assets/usecases/orchestration-new.jpg";
import deploiementHybrideImg from "@/assets/usecases/deploiement-hybride-new.jpg";
import standardisationImg from "@/assets/usecases/standardisation-new.jpg";

const UseCases = () => {
  const { t } = useTranslation("usecases");

  const useCases = [
    { id: "apiPortals", image: portailsApiImg, link: "/usecases/portails-api" },
    { id: "fastIntegration", image: integrationRapideImg, link: "/usecases/integration-rapide" },
    { id: "businessProcesses", image: processusMetiersImg, link: "/usecases/processus-metiers" },
    { id: "orchestration", image: orchestrationImg, link: "/usecases/orchestration" },
    { id: "hybridDeployment", image: deploiementHybrideImg, link: "/usecases/deploiement-hybride" },
    { id: "standardisation", image: standardisationImg, link: "/usecases/standardisation" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-white mb-3">
          {t("title")}
        </h2>
        <div className="w-16 h-1 bg-indigo-500 rounded-sm mx-auto mb-6"></div>
        <p className="text-xl text-brand-orange font-extrabold max-w-3xl mx-auto">
          {t("subtitle")}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {useCases.map((useCase) => (
          <Link key={useCase.id} to={useCase.link}>
            <Card 
              className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 h-full cursor-pointer"
            >
              <CardHeader>
                <div className="w-24 h-24 mb-4 mx-auto rounded-xl overflow-hidden">
                  <img 
                    src={useCase.image} 
                    alt={t(`items.${useCase.id}.title`)}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl text-white">{t(`items.${useCase.id}.title`)}</CardTitle>
                <CardDescription className="text-blue-400 font-medium">
                  {t(`items.${useCase.id}.description`)}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">{t(`items.${useCase.id}.details`)}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UseCases;

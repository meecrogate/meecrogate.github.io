import { useTranslation } from "react-i18next";
import { BarChart3, Clock, Settings, Users, Workflow, Zap } from "lucide-react";

import ComponentDetailPage from "./ComponentDetailPage";

interface Entry {
  title: string;
  description: string;
}

/** Native integrations, a section only this page has. */
const IntegrationsSection = () => {
  const { t } = useTranslation("componentpages");
  const integrations = t("processExecutor.integrations", { returnObjects: true }) as Entry[];

  return (
    <section className="py-20 px-6 border-t border-brand-light/10">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-bold text-brand-light mb-8">
          {t("processExecutor.integrationsTitle")}
        </h2>
        <p className="text-brand-light/80 text-lg mb-12 max-w-3xl mx-auto">
          {t("processExecutor.integrationsSubtitle")}
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {integrations.map((integration) => (
            <div key={integration.title} className="bg-brand-orange/15 rounded-xl p-6 border border-brand-orange/20">
              <h3 className="text-xl font-bold text-brand-light mb-3">{integration.title}</h3>
              <p className="text-brand-light/80 text-sm">{integration.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessExecutorPage = () => (
  <ComponentDetailPage
    id="processExecutor"
    hero={{
      icon: Zap,
      accent: "orange",
      boxClassName: "bg-brand-orange/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-6",
      iconClassName: "w-12 h-12 text-brand-light",
    }}
    benefitIcons={[Workflow, BarChart3, Clock]}
    featureIcons={[Workflow, Users, Settings, Clock, BarChart3, Zap]}
    afterUseCases={<IntegrationsSection />}
  />
);

export default ProcessExecutorPage;

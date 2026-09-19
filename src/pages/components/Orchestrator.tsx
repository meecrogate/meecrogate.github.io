import { useTranslation } from "react-i18next";
import { Activity, GitBranch, Layers, MessageSquare, RefreshCw, Workflow } from "lucide-react";

import ComponentDetailPage from "./ComponentDetailPage";

/** Synchronous / asynchronous pattern lists, a section only this page has. */
const PatternsSection = () => {
  const { t } = useTranslation("componentpages");
  const patterns = t("orchestrator.patterns", { returnObjects: true }) as { title: string; items: string[] }[];
  const accents = [
    { card: "bg-brand-blue/15 border-brand-blue/20", dot: "bg-brand-blue" },
    { card: "bg-brand-orange/15 border-brand-orange/20", dot: "bg-brand-orange" },
  ];

  return (
    <section className="py-20 px-6 border-t border-brand-light/10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-brand-light text-center mb-16">
          {t("orchestrator.patternsTitle")}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {patterns.map((pattern, index) => (
            <div key={pattern.title} className={`rounded-xl p-8 border ${accents[index].card}`}>
              <h3 className="text-2xl font-bold text-brand-light mb-4">{pattern.title}</h3>
              <div className="space-y-3">
                {pattern.items.map((item) => (
                  <div key={item} className="flex items-center">
                    <div className={`w-2 h-2 rounded-full mr-3 ${accents[index].dot}`}></div>
                    <span className="text-brand-light/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const OrchestratorPage = () => (
  <ComponentDetailPage
    id="orchestrator"
    hero={{ icon: Workflow, accent: "blue" }}
    benefitIcons={[Workflow, RefreshCw, Activity]}
    featureIcons={[Workflow, GitBranch, RefreshCw, MessageSquare, Activity, Layers]}
    beforeUseCases={<PatternsSection />}
  />
);

export default OrchestratorPage;

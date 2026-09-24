import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";

import { Panel, SectionHeading } from "./primitives";

interface Step {
  title: string;
  description: string;
}

/** How a visitor arrives at their own number — and the one step we do with them. */
const PricingPredictability = ({ onContact }: { onContact: (plan: string) => void }) => {
  const { t } = useTranslation("pricing");
  const steps = t("predictability.steps", { returnObjects: true }) as Step[];

  return (
    <section className="px-6 py-12" aria-labelledby="predictability-title">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t("predictability.eyebrow")}
          title={t("predictability.title")}
          subtitle={t("predictability.subtitle")}
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          <ol className="lg:col-span-3 space-y-3">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-4 rounded-2xl border border-brand-light/10 bg-brand-dark/60 p-5">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-orange/15 text-sm font-bold text-brand-orange">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-base font-bold text-brand-light">{step.title}</h3>
                  <p className="mt-1 text-sm text-brand-light/70 leading-relaxed">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>

          <Panel className="lg:col-span-2 p-6 flex flex-col">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-orange">
              {t("predictability.cta.label")}
            </p>
            <h3 className="mt-4 text-xl font-bold text-brand-light">{t("predictability.cta.title")}</h3>
            <p className="mt-3 text-sm text-brand-light/70 leading-relaxed">
              {t("predictability.cta.description")}
            </p>

            <div className="mt-auto pt-6">
              <Button
                onClick={() => onContact(t("predictability.cta.button"))}
                className="w-full border-0 bg-brand-orange font-semibold text-gray-900 hover:bg-brand-orange/90"
              >
                {t("predictability.cta.button")}
              </Button>
            </div>
          </Panel>
        </div>
      </div>
    </section>
  );
};

export default PricingPredictability;

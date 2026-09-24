import { useTranslation } from "react-i18next";

import { Panel, SectionHeading } from "./primitives";

interface RuleItem {
  label: string;
  value: string;
  unit: string;
  note: string;
}

/** The three things that never move the bill: traffic, scaling, non-production. */
const PricingRules = () => {
  const { t } = useTranslation("pricing");
  const items = t("rules.items", { returnObjects: true }) as RuleItem[];

  return (
    <section className="px-6 py-12" aria-labelledby="rules-title">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading eyebrow={t("rules.eyebrow")} title={t("rules.title")} subtitle={t("rules.subtitle")} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <Panel key={item.label} className="p-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-orange">{item.label}</p>
              <p className="mt-6 text-4xl font-bold tracking-tight text-brand-orange">{item.value}</p>
              <p className="mt-1 text-sm text-brand-light/60">{item.unit}</p>
              <p className="mt-5 text-sm text-brand-light/70 leading-relaxed">{item.note}</p>
            </Panel>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingRules;

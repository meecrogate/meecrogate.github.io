import { useTranslation } from "react-i18next";

import { Panel, SectionHeading } from "./primitives";

interface AddonItem {
  title: string;
  description: string;
}

/**
 * What sits beyond the edition. Deliberately qualitative: the unit prices and
 * the thresholds behind them belong in a quote, not on a public page.
 */
const PricingAddons = () => {
  const { t } = useTranslation("pricing");
  const items = t("addons.items", { returnObjects: true }) as AddonItem[];

  return (
    <section className="px-6 py-12" aria-labelledby="addons-title">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t("addons.eyebrow")}
          title={t("addons.title")}
          subtitle={t("addons.subtitle")}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <Panel key={item.title} className="p-5">
              <h3 className="text-base font-bold text-brand-light">{item.title}</h3>
              <p className="mt-2 text-sm text-brand-light/70 leading-relaxed">{item.description}</p>
            </Panel>
          ))}
        </div>

        <p className="mt-5 text-sm text-brand-light/55 leading-relaxed max-w-4xl">{t("addons.note")}</p>
      </div>
    </section>
  );
};

export default PricingAddons;

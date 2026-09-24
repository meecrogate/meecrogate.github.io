import { useTranslation } from "react-i18next";

import { Panel } from "./primitives";

interface Principle {
  title: string;
  description: string;
}

/** Page title and the four things the model deliberately does not bill for. */
const PricingHero = () => {
  const { t } = useTranslation("pricing");
  const principles = t("principles.items", { returnObjects: true }) as Principle[];

  return (
    <section className="px-6 pt-16 pb-12" aria-labelledby="pricing-title">
      <div className="container mx-auto max-w-6xl">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-orange mb-4">
          {t("hero.eyebrow")}
        </p>
        <h1 id="pricing-title" className="text-4xl md:text-5xl font-bold text-brand-light leading-tight max-w-3xl">
          {t("hero.title")}
        </h1>
        <p className="mt-5 text-lg text-brand-light/75 max-w-3xl leading-relaxed">{t("hero.subtitle")}</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {principles.map((principle) => (
            <Panel key={principle.title} className="p-5">
              <h2 className="text-base font-bold text-brand-light">{principle.title}</h2>
              <p className="mt-2 text-sm text-brand-light/70 leading-relaxed">{principle.description}</p>
            </Panel>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingHero;

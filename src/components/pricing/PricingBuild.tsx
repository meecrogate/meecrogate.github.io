import { useTranslation } from "react-i18next";

import { Panel, SectionHeading } from "./primitives";

interface BuildItem {
  title: string;
  description: string;
}

/** Integration, project delivery and run — shape of the offer, not its rate card. */
const PricingBuild = () => {
  const { t } = useTranslation("pricing");
  const items = t("build.items", { returnObjects: true }) as BuildItem[];

  return (
    <section className="px-6 py-12" aria-labelledby="build-title">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading eyebrow={t("build.eyebrow")} title={t("build.title")} subtitle={t("build.subtitle")} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((item) => (
            <Panel key={item.title} className="p-5">
              <h3 className="text-base font-bold text-brand-light">{item.title}</h3>
              <p className="mt-2 text-sm text-brand-light/70 leading-relaxed">{item.description}</p>
            </Panel>
          ))}
        </div>

        <p className="mt-5 text-sm text-brand-light/60 leading-relaxed max-w-4xl">{t("build.note")}</p>
      </div>
    </section>
  );
};

export default PricingBuild;

import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

import { SectionHeading } from "./primitives";

/** Ordering lives here; every word comes from the `pricing` namespace. */
const EDITIONS = ["launch", "business", "scale", "enterprise"] as const;

/** The edition most deals land on, highlighted as such. */
const FEATURED = "business";

const PricingEditions = ({ onContact }: { onContact: (plan: string) => void }) => {
  const { t } = useTranslation("pricing");

  return (
    <section id="editions" className="px-6 py-12" aria-labelledby="editions-title">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={t("editions.eyebrow")}
          title={t("editions.title")}
          subtitle={t("editions.subtitle")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {EDITIONS.map((edition) => {
            const featured = edition === FEATURED;
            const name = t(`editions.items.${edition}.name`);
            const features = t(`editions.items.${edition}.features`, { returnObjects: true }) as string[];

            return (
              <article
                key={edition}
                aria-labelledby={`edition-${edition}`}
                className={`relative flex flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-0.5 ${
                  featured
                    ? "border-brand-orange/50 bg-brand-dark/80 shadow-lg shadow-brand-orange/5"
                    : "border-brand-light/10 bg-brand-dark/60"
                }`}
              >
                {featured && (
                  <span className="absolute -top-3 left-6 rounded-full bg-brand-orange px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gray-900">
                    {t("editions.popular")}
                  </span>
                )}

                <h3 id={`edition-${edition}`} className="text-xl font-bold text-brand-light">
                  {name}
                </h3>

                <p className="mt-4 text-3xl font-bold tracking-tight text-brand-orange tabular-nums">
                  {t(`editions.items.${edition}.price`)}
                </p>
                <p className="mt-1 text-xs text-brand-light/50">{t("editions.priceUnit")}</p>

                <ul className="mt-6 space-y-2.5 text-sm">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start text-brand-light/80">
                      <Check className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0 text-brand-orange" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <p className="mt-5 border-t border-brand-light/10 pt-4 text-sm text-brand-light/60 leading-relaxed">
                  {t(`editions.items.${edition}.description`)}
                </p>

                {/* mt-auto keeps the buttons on one line across cards of unequal height. */}
                <div className="mt-auto pt-6">
                  <Button
                    onClick={() => onContact(name)}
                    className={`w-full border-0 font-semibold ${
                      featured
                        ? "bg-brand-orange text-gray-900 hover:bg-brand-orange/90"
                        : "bg-brand-light/10 text-brand-light hover:bg-brand-light/20"
                    }`}
                  >
                    {t(`editions.items.${edition}.cta`)}
                  </Button>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-6 text-sm text-brand-light/55 leading-relaxed max-w-4xl">{t("editions.footnote")}</p>
      </div>
    </section>
  );
};

export default PricingEditions;

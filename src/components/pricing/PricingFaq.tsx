import { Trans, useTranslation } from "react-i18next";

import { Panel } from "./primitives";

interface FaqItem {
  question: string;
  answer: string;
}

/** Questions the pricing model raises, and the small print. */
const PricingFaq = () => {
  const { t } = useTranslation("pricing");
  const items = t("faq.items", { returnObjects: true }) as FaqItem[];

  return (
    <section className="px-6 py-12" aria-labelledby="faq-title">
      <div className="container mx-auto max-w-6xl">
        <Panel className="p-6">
          <h2 id="faq-title" className="text-2xl font-bold text-brand-light">
            {t("faq.title")}
          </h2>
          <dl className="mt-4 divide-y divide-brand-light/10">
            {items.map((item) => (
              <div key={item.question} className="py-4">
                <dt className="font-bold text-brand-light">{item.question}</dt>
                <dd className="mt-1.5 text-sm text-brand-light/70 leading-relaxed">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </Panel>

        <p className="mt-6 text-xs text-brand-light/50 leading-relaxed">
          <strong className="text-brand-light/70">{t("notes.label")}</strong>{" "}
          <Trans ns="pricing" i18nKey="notes.text" components={[<strong key="0" className="text-brand-light/70" />]} />
        </p>
      </div>
    </section>
  );
};

export default PricingFaq;

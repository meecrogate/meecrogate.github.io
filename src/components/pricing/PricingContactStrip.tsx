import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";

/** Closing call to action: give us your API count, get the number back. */
const PricingContactStrip = ({ onContact }: { onContact: (plan: string) => void }) => {
  const { t } = useTranslation("pricing");

  return (
    <section id="contact" className="px-6 pb-20 pt-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-5 rounded-2xl border border-brand-orange/30 bg-gradient-to-r from-brand-orange/15 to-brand-orange/5 p-7 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-xl font-bold text-brand-light">{t("contactStrip.title")}</p>
            <p className="mt-1.5 text-sm text-brand-light/70 max-w-2xl">{t("contactStrip.description")}</p>
          </div>
          <Button
            onClick={() => onContact(t("contactStrip.cta"))}
            className="bg-brand-orange text-gray-900 hover:bg-brand-orange/90 font-semibold border-0 flex-shrink-0"
          >
            {t("contactStrip.cta")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingContactStrip;

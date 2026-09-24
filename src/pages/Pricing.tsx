import { useState } from "react";
import { useTranslation } from "react-i18next";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import PricingAddons from "@/components/pricing/PricingAddons";
import PricingBuild from "@/components/pricing/PricingBuild";
import PricingContactDialog from "@/components/pricing/PricingContactDialog";
import PricingContactStrip from "@/components/pricing/PricingContactStrip";
import PricingEditions from "@/components/pricing/PricingEditions";
import PricingFaq from "@/components/pricing/PricingFaq";
import PricingHero from "@/components/pricing/PricingHero";
import PricingIncluded from "@/components/pricing/PricingIncluded";
import PricingPredictability from "@/components/pricing/PricingPredictability";
import PricingRules from "@/components/pricing/PricingRules";

/**
 * Public pricing page: editions and their prices lead, then what every edition
 * includes, the add-ons and promises in qualitative form, and how to derive your
 * own number. Unit prices, thresholds and multipliers stay out of it — those are
 * quote material. Every word lives in the `pricing` namespace.
 */
const Pricing = () => {
  const { t } = useTranslation("pricing");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleContact = (plan: string) => {
    setSelectedPlan(plan);
    setIsDialogOpen(true);
  };

  return (
    <div className="bg-slate-900 min-h-screen flex flex-col">
      <Seo title={t("seo.title")} description={t("seo.description")} />
      <Navigation />
      <main className="flex-1 pt-16">
        <PricingHero />
        <PricingEditions onContact={handleContact} />
        <PricingIncluded />
        <PricingAddons />
        <PricingRules />
        <PricingPredictability onContact={handleContact} />
        <PricingBuild />
        <PricingFaq />
        <PricingContactStrip onContact={handleContact} />
      </main>
      <Footer />
      <PricingContactDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} plan={selectedPlan} />
    </div>
  );
};

export default Pricing;


import { useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PricingHero from "@/components/pricing/PricingHero";
import Seo from "@/components/Seo";

const Pricing = () => {
  const { t } = useTranslation("pricing");

  return (
    <div className="bg-slate-900 min-h-screen flex flex-col">
      <Seo title={t("seo.title")} description={t("seo.description")} />
      <Navigation />
      <main className="flex-1 pt-16">
        <PricingHero />
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;

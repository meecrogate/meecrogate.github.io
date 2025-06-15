
import PricingHero from "@/components/pricing/PricingHero";
import PricingCards from "@/components/pricing/PricingCards";
import FeaturesComparison from "@/components/pricing/FeaturesComparison";
import PricingFAQ from "@/components/pricing/PricingFAQ";

const Pricing = () => {
  return (
    <div className="bg-slate-900 min-h-screen">
      <PricingHero />
      <PricingCards />
      <FeaturesComparison />
      <PricingFAQ />
    </div>
  );
};

export default Pricing;

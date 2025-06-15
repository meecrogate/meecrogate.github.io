
import PricingHero from "@/components/pricing/PricingHero";
import PricingCards from "@/components/pricing/PricingCards";
import FeaturesComparison from "@/components/pricing/FeaturesComparison";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <PricingHero />
      <PricingCards />
      <FeaturesComparison />
      <PricingFAQ />
      <Footer />
    </div>
  );
};

export default Index;

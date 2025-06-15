
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PricingHero from "@/components/pricing/PricingHero";
import PricingCards from "@/components/pricing/PricingCards";
import FeaturesComparison from "@/components/pricing/FeaturesComparison";
import PricingFAQ from "@/components/pricing/PricingFAQ";

const Pricing = () => {
  return (
    <div className="bg-slate-900 min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <PricingHero />
        <PricingCards />
        <FeaturesComparison />
        <PricingFAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;


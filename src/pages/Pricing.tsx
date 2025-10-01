
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PricingHero from "@/components/pricing/PricingHero";

const Pricing = () => {
  return (
    <div className="bg-slate-900 min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-16">
        <PricingHero />
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;


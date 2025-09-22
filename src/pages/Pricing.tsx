
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PricingHero from "@/components/pricing/PricingHero";

const Pricing = () => {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <PricingHero />
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;


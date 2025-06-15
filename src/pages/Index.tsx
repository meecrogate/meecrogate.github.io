
import Navigation from "@/components/Navigation";
import Hero from "@/components/meecrogate/Hero";
import Features from "@/components/meecrogate/Features";
import Architecture from "@/components/meecrogate/Architecture";
import Benefits from "@/components/meecrogate/Benefits";
import UseCases from "@/components/meecrogate/UseCases";
import CTA from "@/components/meecrogate/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation />
      <div className="pt-16"> {/* Add padding-top to account for fixed navbar */}
        <div id="hero">
          <Hero />
        </div>
        <div id="features">
          <Features />
        </div>
        <div id="architecture">
          <Architecture />
        </div>
        <div id="benefits">
          <Benefits />
        </div>
        <div id="usecases">
          <UseCases />
        </div>
        <div id="cta">
          <CTA />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;

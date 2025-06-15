
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
      <Hero />
      <Features />
      <Architecture />
      <Benefits />
      <UseCases />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;

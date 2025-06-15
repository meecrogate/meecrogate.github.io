
import Benefits from "@/components/meecrogate/Benefits";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BenefitsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation />
      <div className="pt-16">
        <Benefits />
      </div>
      <Footer />
    </div>
  );
};

export default BenefitsPage;

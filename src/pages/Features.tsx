
import Features from "@/components/meecrogate/Features";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-dark via-brand-blue to-brand-dark">
      <Navigation />
      <div className="pt-16">
        <Features />
      </div>
      <Footer />
    </div>
  );
};

export default FeaturesPage;

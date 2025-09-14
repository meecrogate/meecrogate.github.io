
import Features from "@/components/meecrogate/Features";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <div className="pt-16">
        <Features />
      </div>
      <Footer />
    </div>
  );
};

export default FeaturesPage;

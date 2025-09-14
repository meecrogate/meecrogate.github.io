
import Navigation from "@/components/Navigation";
import Hero from "@/components/meecrogate/Hero";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <div className="pt-16">
        <Hero />
      </div>
      <Footer />
    </div>
  );
};

export default Index;

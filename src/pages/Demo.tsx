
import CTA from "@/components/meecrogate/CTA";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const DemoPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation />
      <div className="pt-16">
        <CTA />
      </div>
      <Footer />
    </div>
  );
};

export default DemoPage;

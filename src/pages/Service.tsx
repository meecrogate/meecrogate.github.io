import Service from "@/components/meecrogate/Service";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ServicePage = () => {
  return (
    <div className="min-h-screen bg-slate-900 overflow-x-hidden">
      <Navigation />
      <div className="pt-16">
        <Service />
      </div>
      <Footer />
    </div>
  );
};

export default ServicePage;

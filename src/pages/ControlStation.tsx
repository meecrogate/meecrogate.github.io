
import Navigation from "@/components/Navigation";
import ControlStation from "@/components/ControlStation";
import Footer from "@/components/Footer";

const ControlStationPage = () => {
  return (
    <div className="min-h-screen bg-brand-dark">
      <Navigation />
      <div className="pt-16">
        <ControlStation />
      </div>
      <Footer />
    </div>
  );
};

export default ControlStationPage;

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import BenefitsSection from "./BenefitsSection";
import ControlStationCard from "./ControlStationCard";
import MeecrogateComponentsGrid from "./MeecrogateComponentsGrid";
import ProcessPhasesSection from "./ProcessPhasesSection";
import SovereigntySection from "./SovereigntySection";

const Hero = () => {
  return (
    <div className="relative overflow-hidden" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* HERO SECTION */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 mt-6">
            <span className="block">Meecrogate</span>
            <span className="block text-[#FFB300] text-4xl md:text-5xl mt-4">
              La plateforme modulaire d'APIs cloud-native
            </span>
          </h1>

          <p className="text-xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            Solution modulaire composable pour l'exposition, la sécurisation et l'orchestration d'APIs.
            Conçue pour le cloud et les environnements traditionnels, entièrement configurable sans code.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button size="lg" className="bg-[#FFB300] text-gray-900 px-8 py-4 text-lg h-auto border-0 font-semibold">
              Demander une démo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* BENEFITS SECTION */}
      <BenefitsSection />
      
      {/* SOVEREIGNTY / RGPD SECTION */}
      <SovereigntySection />

      {/* ARCHITECTURE & CONTROL STATION SECTION */}
      <section className="relative py-16 bg-gray-900/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ControlStationCard />
          <MeecrogateComponentsGrid />
        </div>
      </section>

      {/* PROCESS PHASES SECTION */}
      <ProcessPhasesSection />
    </div>
  );
};

export default Hero;

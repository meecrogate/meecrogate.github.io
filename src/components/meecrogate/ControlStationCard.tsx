import { Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

const ControlStationCard = () => (
  <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-700 mb-16 relative overflow-hidden">
    <div className="flex flex-col lg:flex-row justify-between items-center relative z-10">
      <div className="lg:w-2/3 text-center lg:text-left mb-6 lg:mb-0">
        <h2 className="text-4xl font-extrabold text-white mb-3">
          Le Control Station Central
        </h2>
        <p className="text-xl text-gray-300 max-w-xl">
          Gérez, configurez et surveillez l'intégralité de votre plateforme Meecrogate depuis une interface graphique unique.
        </p>
      </div>
      <div className="lg:w-1/3 flex justify-center lg:justify-end">
        <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 px-8 py-4 text-lg h-auto">
          Interface D'Administration
        </Button>
      </div>
    </div>
  </div>
);

export default ControlStationCard;

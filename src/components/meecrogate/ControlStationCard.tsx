
import { Monitor } from "lucide-react";

const ControlStationCard = () => (
  <div className="group hover:scale-105 transition-all duration-300 max-w-2xl mx-auto mb-12">
    <div className="bg-gradient-to-br from-brand-blue/10 via-transparent to-brand-orange/10 backdrop-blur-md rounded-2xl p-8 border border-brand-light/20 shadow-xl shadow-brand-blue/10">
      <div className="bg-gradient-to-br from-brand-blue/20 to-brand-orange/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
        <Monitor className="w-8 h-8 text-brand-light" />
      </div>
      <div className="text-2xl font-bold text-brand-light mb-3">Control Station</div>
      <div className="text-brand-light/70 text-lg text-center">
        Interface web centralisée pour configurer et administrer l'API Gateway, 
        le serveur d'identité, l'orchestrateur et le Process Executor
      </div>
    </div>
  </div>
);

export default ControlStationCard;

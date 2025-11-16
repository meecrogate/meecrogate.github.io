import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="bg-gradient-to-r from-brand-blue/20 to-brand-orange/20 backdrop-blur-sm rounded-3xl border border-gray-700 p-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Prêt à révolutionner vos APIs ?
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Découvrez comment Meecrogate peut transformer votre architecture API 
          en une plateforme moderne, sécurisée et scalable.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link to="/demo">
            <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-4 text-lg">
              <Mail className="mr-2 w-5 h-5" />
              Demander une démo
            </Button>
          </Link>
          
          <Button variant="outline" size="lg" className="border-brand-orange text-brand-orange hover:bg-brand-orange/10 px-8 py-4 text-lg">
            Essai gratuit
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CTA;

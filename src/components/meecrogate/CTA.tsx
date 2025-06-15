
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail } from "lucide-react";

const CTA = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl border border-gray-700 p-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Prêt à révolutionner vos APIs ?
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Découvrez comment Meecrogate peut transformer votre architecture API 
          en une plateforme moderne, sécurisée et scalable.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
            <Mail className="mr-2 w-5 h-5" />
            Demander une démo
          </Button>
          <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg">
            <Download className="mr-2 w-5 h-5" />
            Télécharger la documentation
          </Button>
          <Button variant="outline" size="lg" className="border-purple-600 text-purple-300 hover:bg-purple-800 px-8 py-4 text-lg">
            Essai gratuit
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CTA;

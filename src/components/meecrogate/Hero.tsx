
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Settings, Layers, Zap } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <Badge className="mb-6 bg-blue-500/10 text-blue-300 border-blue-500/20 text-lg px-4 py-2">
            🟦 Plateforme Cloud-Native Modulaire
          </Badge>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-8">
            <span className="block">Meecrogate</span>
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-4xl md:text-5xl mt-4">
              La plateforme modulaire d'APIs cloud-native
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Solution modulaire composable pour l'exposition, la sécurisation et l'orchestration d'APIs. 
            Conçue pour le cloud et les environnements traditionnels, entièrement configurable sans code.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              Découvrir la démo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg">
              Documentation
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <Shield className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-lg font-bold text-white">API Gateway</div>
                <div className="text-sm text-gray-400">Sécurisation & Routage</div>
              </div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <Settings className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-lg font-bold text-white">Serveur d'identité</div>
                <div className="text-sm text-gray-400">Gestion des accès</div>
              </div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <Layers className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <div className="text-lg font-bold text-white">Orchestrateur</div>
                <div className="text-sm text-gray-400">Synchrone & Asynchrone</div>
              </div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <Zap className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                <div className="text-lg font-bold text-white">Process Executor</div>
                <div className="text-sm text-gray-400">BPMN & Automatisation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

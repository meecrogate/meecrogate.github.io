
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Settings, Layers, Zap, Monitor } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-brand-orange/20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <Badge className="mb-6 bg-brand-blue/10 text-brand-blue border-brand-blue/20 text-lg px-4 py-2">
            🟦 Plateforme Cloud-Native Modulaire
          </Badge>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-8">
            <span className="block">Meecrogate</span>
            <span className="block bg-gradient-to-r from-brand-blue to-brand-orange bg-clip-text text-transparent text-4xl md:text-5xl mt-4">
              La plateforme modulaire d'APIs cloud-native
            </span>
          </h1>
          <p className="text-xl text-brand-light mb-12 max-w-4xl mx-auto leading-relaxed">
            Solution modulaire composable pour l'exposition, la sécurisation et l'orchestration d'APIs. 
            Conçue pour le cloud et les environnements traditionnels, entièrement configurable sans code.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-4 text-lg">
              Découvrir la démo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-brand-light text-brand-light hover:bg-brand-light/10 px-8 py-4 text-lg">
              Documentation
            </Button>
          </div>

          {/* Control Station Card */}
          <div className="mb-12">
            <div className="group hover:scale-105 transition-transform duration-300 max-w-2xl mx-auto">
              <div className="bg-gradient-to-r from-brand-blue/20 to-brand-orange/20 backdrop-blur-sm rounded-xl p-8 border border-brand-light/30">
                <Monitor className="w-12 h-12 text-brand-blue mx-auto mb-4" />
                <div className="text-2xl font-bold text-white mb-3">Control Station</div>
                <div className="text-brand-light/90 text-lg">
                  Interface web centralisée pour configurer et administrer l'API Gateway, 
                  le serveur d'identité, l'orchestrateur et le Process Executor
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="bg-brand-dark/50 backdrop-blur-sm rounded-xl p-6 border border-brand-light/20">
                <Shield className="w-8 h-8 text-brand-blue mx-auto mb-3" />
                <div className="text-lg font-bold text-white">API Gateway</div>
                <div className="text-sm text-brand-light/70">Sécurisation & Routage</div>
              </div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="bg-brand-dark/50 backdrop-blur-sm rounded-xl p-6 border border-brand-light/20">
                <Settings className="w-8 h-8 text-brand-orange mx-auto mb-3" />
                <div className="text-lg font-bold text-white">Serveur d'identité</div>
                <div className="text-sm text-brand-light/70">Gestion des accès</div>
              </div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="bg-brand-dark/50 backdrop-blur-sm rounded-xl p-6 border border-brand-light/20">
                <Layers className="w-8 h-8 text-brand-blue mx-auto mb-3" />
                <div className="text-lg font-bold text-white">Orchestrateur</div>
                <div className="text-sm text-brand-light/70">Synchrone & Asynchrone</div>
              </div>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="bg-brand-dark/50 backdrop-blur-sm rounded-xl p-6 border border-brand-light/20">
                <Zap className="w-8 h-8 text-brand-orange mx-auto mb-3" />
                <div className="text-lg font-bold text-white">Process Executor</div>
                <div className="text-sm text-brand-light/70">BPMN & Automatisation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

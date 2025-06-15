
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Settings, Layers, Zap, Monitor } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/90 via-brand-blue/30 to-brand-dark/95" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <Badge className="mb-6 bg-brand-blue/20 text-brand-blue border-brand-blue/30 backdrop-blur-sm text-lg px-4 py-2">
            🟦 Plateforme Cloud-Native Modulaire
          </Badge>
          
          <h1 className="text-6xl md:text-7xl font-bold text-brand-light mb-8">
            <span className="block">Meecrogate</span>
            <span className="block bg-gradient-to-r from-brand-blue via-brand-orange to-brand-blue bg-clip-text text-transparent text-4xl md:text-5xl mt-4">
              La plateforme modulaire d'APIs cloud-native
            </span>
          </h1>
          
          <p className="text-xl text-brand-light/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            Solution modulaire composable pour l'exposition, la sécurisation et l'orchestration d'APIs. 
            Conçue pour le cloud et les environnements traditionnels, entièrement configurable sans code.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-brand-blue to-brand-blue/80 hover:from-brand-blue/90 hover:to-brand-blue/70 text-brand-light shadow-lg shadow-brand-blue/25 px-8 py-4 text-lg border-0">
              Découvrir la démo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-brand-light/30 bg-transparent text-brand-light hover:bg-brand-light/10 hover:border-brand-light/50 backdrop-blur-sm px-8 py-4 text-lg">
              Documentation
            </Button>
          </div>

          {/* Control Station Card with modern styling */}
          <div className="mb-12">
            <div className="group hover:scale-105 transition-all duration-300 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-brand-blue/10 via-transparent to-brand-orange/10 backdrop-blur-md rounded-2xl p-8 border border-brand-light/20 shadow-xl shadow-brand-blue/10">
                <div className="bg-gradient-to-br from-brand-blue/20 to-brand-orange/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Monitor className="w-8 h-8 text-brand-light" />
                </div>
                <div className="text-2xl font-bold text-brand-light mb-3">Control Station</div>
                <div className="text-brand-light/70 text-lg">
                  Interface web centralisée pour configurer et administrer l'API Gateway, 
                  le serveur d'identité, l'orchestrateur et le Process Executor
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-brand-dark/60 to-brand-dark/40 backdrop-blur-md rounded-2xl p-6 border border-brand-light/10 hover:border-brand-blue/30 transition-colors">
                <div className="bg-gradient-to-br from-brand-blue/20 to-brand-blue/30 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-brand-light" />
                </div>
                <div className="text-lg font-bold text-brand-light mb-2">API Gateway</div>
                <div className="text-sm text-brand-light/60">Sécurisation & Routage</div>
              </div>
            </div>
            
            <div className="group hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-brand-dark/60 to-brand-dark/40 backdrop-blur-md rounded-2xl p-6 border border-brand-light/10 hover:border-brand-orange/30 transition-colors">
                <div className="bg-gradient-to-br from-brand-orange/20 to-brand-orange/30 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-6 h-6 text-brand-light" />
                </div>
                <div className="text-lg font-bold text-brand-light mb-2">Serveur d'identité</div>
                <div className="text-sm text-brand-light/60">Gestion des accès</div>
              </div>
            </div>
            
            <div className="group hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-brand-dark/60 to-brand-dark/40 backdrop-blur-md rounded-2xl p-6 border border-brand-light/10 hover:border-brand-blue/30 transition-colors">
                <div className="bg-gradient-to-br from-brand-blue/20 to-brand-blue/30 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Layers className="w-6 h-6 text-brand-light" />
                </div>
                <div className="text-lg font-bold text-brand-light mb-2">Orchestrateur</div>
                <div className="text-sm text-brand-light/60">Synchrone & Asynchrone</div>
              </div>
            </div>
            
            <div className="group hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-brand-dark/60 to-brand-dark/40 backdrop-blur-md rounded-2xl p-6 border border-brand-light/10 hover:border-brand-orange/30 transition-colors">
                <div className="bg-gradient-to-br from-brand-orange/20 to-brand-orange/30 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-brand-light" />
                </div>
                <div className="text-lg font-bold text-brand-light mb-2">Process Executor</div>
                <div className="text-sm text-brand-light/60">BPMN & Automatisation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

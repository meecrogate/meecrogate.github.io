import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Settings, Layers, Zap, Monitor, Rocket, Globe, Lock, BarChart3, Cloud } from "lucide-react";
import Arrow from "./Arrow";

// Liste des bénéfices avec une description longue.
const benefits = [
  {
    icon: Rocket,
    title: "Déploiement rapide",
    description: "Sans développeur",
    details: "Déployez de nouvelles APIs ou fonctionnalités en quelques minutes, sans dépendre d'une équipe de développement. La configuration se fait par interface graphique, sans code à écrire."
  },
  {
    icon: Cloud,
    title: "Haute disponibilité",
    description: "Scalabilité automatique",
    details: "La plateforme s'adapte automatiquement à la charge. Vous bénéficiez d'une haute disponibilité sans gestion manuelle de l'infrastructure, même lors de pics d'activité."
  },
  {
    icon: Lock,
    title: "Gouvernance intégrée",
    description: "Sécurité, accès, quotas",
    details: "Gérez simplement la sécurité, les accès utilisateurs, les rôles et quotas. Toutes les politiques de gouvernance sont centralisées, et l'audit est natif."
  },
  {
    icon: BarChart3,
    title: "Surveillance native",
    description: "Traçabilité complète",
    details: "Accédez en temps réel à toutes les métriques, logs, et traces. Visualisez facilement la santé des APIs et anticipez les incidents avec des alertes intégrées."
  },
  {
    icon: Globe,
    title: "Architectures modernes",
    description: "Microservices, serverless",
    details: "Support complet des architectures microservices, serverless ou hybrides, pour accélérer vos projets IT tout en gardant la maîtrise technologique."
  },
  {
    icon: Shield,
    title: "No vendor lock-in",
    description: "Liberté technologique",
    details: "La plateforme est compatible avec tous les clouds et peut être déployée sur site. Vos données et vos architectures restent portables, sans dépendance à un fournisseur."
  }
];

// Petit composant d'affichage détaillé du bénéfice avec effet moderne
function BenefitDetailSection({ benefit, onClose }: { benefit: typeof benefits[number], onClose: () => void }) {
  if (!benefit) return null;
  return (
    <div
      className="fixed inset-0 z-30 flex items-center justify-center bg-black/60 backdrop-blur-[2px] animate-fade-in"
      style={{}}
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-brand-dark rounded-3xl shadow-2xl p-8 max-w-md w-full relative animate-scale-in"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-brand-blue hover:text-brand-orange transition-colors text-xl font-bold">
          ×
        </button>
        <div className="flex flex-col items-center mb-4">
          <span className="mb-2 bg-gradient-to-br from-brand-blue/20 to-brand-orange/20 w-14 h-14 rounded-xl flex items-center justify-center">
            <benefit.icon className="w-8 h-8 text-brand-blue" />
          </span>
          <h3 className="text-2xl font-bold text-brand-dark dark:text-brand-light mb-1">{benefit.title}</h3>
          <div className="text-base text-brand-dark/70 dark:text-brand-light/70">{benefit.description}</div>
        </div>
        <hr className="border-brand-blue/10 dark:border-brand-blue/40 mb-4" />
        <div className="text-lg text-brand-dark/90 dark:text-brand-light/90">{benefit.details}</div>
      </div>
    </div>
  );
}

const Hero = () => {
  // On stocke l'index du bénéfice sélectionné, ou null.
  const [selectedBenefit, setSelectedBenefit] = useState<number | null>(null);

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/90 via-brand-blue/30 to-brand-dark/95 pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 to-transparent pointer-events-none -z-10" />

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
        </div>
      </div>

      {/* SECTION BÉNÉFICES CLÉS */}
      <section className="relative py-16 bg-brand-blue/10 backdrop-blur-[2px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-blue mb-8 text-center">🔷 Bénéfices clés</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <button
                key={index}
                className="group hover:scale-105 transition-all duration-300 focus:outline-none"
                style={{ animation: selectedBenefit === index ? "scale-in 0.2s" : undefined }}
                onClick={() => setSelectedBenefit(index)}
                aria-label={"Voir le détail du bénéfice : " + benefit.title}
                tabIndex={0}
              >
                <div className="bg-white/80 dark:bg-brand-dark/80 rounded-2xl p-6 border border-brand-blue/10 shadow-lg hover:border-brand-orange/60 transition-colors h-full">
                  <div className="bg-gradient-to-br from-brand-blue/20 to-brand-orange/20 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-brand-blue group-hover:text-brand-orange transition-colors" />
                  </div>
                  <div className="text-lg font-bold text-brand-dark dark:text-brand-light mb-2 text-center">{benefit.title}</div>
                  <div className="text-sm text-brand-dark/70 dark:text-brand-light/60 text-center">{benefit.description}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
        {/* Affichage de la section détaillée si sélectionné */}
        {selectedBenefit !== null && (
          <BenefitDetailSection
            benefit={benefits[selectedBenefit]}
            onClose={() => setSelectedBenefit(null)}
          />
        )}
      </section>

      {/* SECTION COMPOSANTS MEECROGATE */}
      <section className="relative py-16 bg-brand-dark/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Container for flèches, position absolute, only show on md+ */}
          <div className="relative hidden md:block" style={{height: 290}}>
            {/* Les flèches sont positionnées par rapport au container des cards */}
            {/* On positionne Control Station au centre en haut (y:0), les 4 target à la 2e ligne */}
            {/* Exemples d'ancrage en pixels, à tweaker selon le design final */}
            <Arrow from={{x: 424, y: 80}} to={{x: 85, y: 230}} />
            <Arrow from={{x: 424, y: 80}} to={{x: 325, y: 230}} />
            <Arrow from={{x: 424, y: 80}} to={{x: 556, y: 230}} />
            <Arrow from={{x: 424, y: 80}} to={{x: 790, y: 230}} />
          </div>

          {/* Control Station Card */}
          <div className="group hover:scale-105 transition-all duration-300 max-w-2xl mx-auto mb-12 relative z-10">
            <div className="bg-gradient-to-br from-brand-blue/10 via-transparent to-brand-orange/10 backdrop-blur-md rounded-2xl p-8 border border-brand-light/20 shadow-xl shadow-brand-blue/10">
              <div className="bg-gradient-to-br from-brand-blue/20 to-brand-orange/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Monitor className="w-8 h-8 text-brand-light" />
              </div>
              <div className="text-2xl font-bold text-brand-light mb-3">
                Control Station
              </div>
              <div className="text-brand-light/70 text-lg text-center">
                Interface web centralisée pour configurer et administrer l&apos;API Gateway, 
                le serveur d&apos;identité, l&apos;orchestrateur et le Process Executor
              </div>
            </div>
          </div>
          {/* Grid composants */}
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 text-center z-20">
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
                <div className="text-lg font-bold text-brand-light mb-2">Serveur d&apos;identité</div>
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
      </section>
    </div>
  );
};

export default Hero;

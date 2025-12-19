import { Layers, Settings, Rocket, Monitor, Info } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import conceptionImg from "@/assets/process/conception.jpg";
import configurationImg from "@/assets/process/configuration.jpg";
import deploiementImg from "@/assets/process/deploiement.jpg";
import surveillanceImg from "@/assets/process/surveillance.jpg";

const steps = [
  { 
    title: "Conception", 
    description: "Modélisez vos APIs et processus via l'interface sans écrire une ligne de code.", 
    icon: Layers, 
    image: conceptionImg,
    details: {
      subtitle: "Comment Meecrogate vous aide",
      benefits: [
        "Interface visuelle drag-and-drop pour concevoir vos APIs",
        "Modélisation BPMN intégrée pour vos processus métiers",
        "Génération automatique de la documentation OpenAPI",
        "Validation en temps réel de la cohérence de vos schémas",
        "Templates prédéfinis pour accélérer le démarrage"
      ]
    }
  },
  { 
    title: "Configuration", 
    description: "Définissez les règles de sécurité, les quotas et les orchestrations en quelques clics.", 
    icon: Settings, 
    image: configurationImg,
    details: {
      subtitle: "Comment Meecrogate vous aide",
      benefits: [
        "Politiques de sécurité centralisées (OAuth2, JWT, API Keys)",
        "Gestion fine des quotas et du rate limiting par client",
        "Configuration des transformations de données sans code",
        "Orchestration visuelle des appels entre services",
        "Environnements multiples (dev, staging, prod) synchronisés"
      ]
    }
  },
  { 
    title: "Déploiement", 
    description: "Déployez en production instantanément et bénéficiez de la scalabilité cloud-native.", 
    icon: Rocket, 
    image: deploiementImg,
    details: {
      subtitle: "Comment Meecrogate vous aide",
      benefits: [
        "Déploiement en un clic vers tous vos environnements",
        "Support multi-cloud (AWS, Azure, GCP, on-premise)",
        "Auto-scaling intelligent basé sur la charge",
        "Rollback instantané en cas de problème",
        "Déploiements blue-green sans interruption de service"
      ]
    }
  },
  { 
    title: "Surveillance", 
    description: "Obtenez une vue en temps réel de la performance et du comportement de vos services.", 
    icon: Monitor, 
    image: surveillanceImg,
    details: {
      subtitle: "Comment Meecrogate vous aide",
      benefits: [
        "Tableaux de bord temps réel personnalisables",
        "Alertes intelligentes basées sur des seuils configurables",
        "Traçabilité complète de chaque requête (distributed tracing)",
        "Analyse des performances et détection d'anomalies",
        "Rapports automatisés pour le pilotage métier"
      ]
    }
  }
];

const ProcessPhasesSection = () => {
  const [openDialog, setOpenDialog] = useState<number | null>(null);

  return (
    <section className="bg-gray-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-bold text-white mb-16">
          Accélérer votre roadmap
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index} 
                className="relative text-center p-6 rounded-xl overflow-hidden shadow-xl border border-gray-700 
                           bg-cover bg-center transition-transform duration-300 hover:scale-[1.03]"
                style={{ backgroundImage: `url(${step.image})` }}
              >
                <div className="absolute inset-0 bg-gray-900/80 hover:bg-gray-900/70 transition-colors duration-300"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#FFB300]/20 border-2 border-[#FFB300]/30">
                    <Icon className="w-7 h-7 text-[#FFB300]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {step.description}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setOpenDialog(index)}
                    className="border-[#FFB300]/50 text-[#FFB300] hover:bg-[#FFB300]/10 hover:text-[#FFB300]"
                  >
                    <Info className="w-4 h-4 mr-2" />
                    En savoir plus
                  </Button>
                </div>

                {index < steps.length - 1 && (
                  <div className="absolute hidden lg:block top-1/2 left-[calc(100%+6px)] w-8 h-px bg-gray-700"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Dialogs for each phase */}
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <Dialog key={index} open={openDialog === index} onOpenChange={(open) => setOpenDialog(open ? index : null)}>
            <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-lg">
              <DialogHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FFB300]/20 border-2 border-[#FFB300]/30">
                    <Icon className="w-6 h-6 text-[#FFB300]" />
                  </div>
                  <DialogTitle className="text-2xl font-bold text-white">
                    {step.title}
                  </DialogTitle>
                </div>
                <DialogDescription className="text-gray-400 text-base">
                  {step.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4">
                <h4 className="text-[#FFB300] font-semibold mb-3">{step.details.subtitle}</h4>
                <ul className="space-y-3">
                  {step.details.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-[#007AFF] flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </DialogContent>
          </Dialog>
        );
      })}
    </section>
  );
};

export default ProcessPhasesSection;


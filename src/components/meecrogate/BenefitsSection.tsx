import { useState } from "react";
import { Rocket, Cloud, Lock, BarChart3, Globe, Shield } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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

const BenefitsSection = () => {
  const [selectedBenefit, setSelectedBenefit] = useState<number | null>(null);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-center text-4xl font-bold text-white mb-12">
        Avantages Clés de Meecrogate
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-8">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <div
              key={index}
              onClick={() => setSelectedBenefit(index)}
              className="flex flex-col items-center text-center p-6 rounded-xl border border-gray-800 bg-blue-950/30 cursor-pointer 
                        hover:bg-blue-900/50 transition-all duration-300 transform"
            >
              <span className="flex-shrink-0 mb-4 w-10 h-10 rounded-lg flex items-center justify-center bg-[#FFB300]/20">
                <Icon className="w-6 h-6 text-[#FFB300]" />
              </span>
              
              <div className="w-full">
                <h3 className="text-xl font-semibold text-white mb-1">{benefit.title}</h3>
                <p className="text-sm text-gray-400">{benefit.description}</p>
              </div>
              
              <div className="mt-4 w-full text-sm font-medium text-gray-500 group-hover:text-white flex items-center justify-center">
                Détails
              </div>
            </div>
          );
        })}
      </div>

      {/* Dialogs for each benefit */}
      {benefits.map((benefit, index) => {
        const Icon = benefit.icon;
        return (
          <Dialog key={index} open={selectedBenefit === index} onOpenChange={(open) => setSelectedBenefit(open ? index : null)} modal={false}>
            <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-lg">
              <DialogHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FFB300]/20 border-2 border-[#FFB300]/30">
                    <Icon className="w-6 h-6 text-[#FFB300]" />
                  </div>
                  <DialogTitle className="text-2xl font-bold text-white">
                    {benefit.title}
                  </DialogTitle>
                </div>
                <DialogDescription className="text-gray-400 text-base">
                  {benefit.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4">
                <p className="text-gray-300 leading-relaxed">{benefit.details}</p>
              </div>
            </DialogContent>
          </Dialog>
        );
      })}
    </section>
  );
};

export default BenefitsSection;


import { useState } from "react";
import { Rocket, Cloud, Lock, BarChart3, Globe, Shield } from "lucide-react";

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

// Affichage détaillé d'un bénéfice en surimpression (fade + scale)
function BenefitDetailSection({ benefit, onClose }: { benefit: typeof benefits[number], onClose: () => void }) {
  if (!benefit) return null;
  return (
    <div
      className="fixed inset-0 z-30 flex items-center justify-center bg-black/60 backdrop-blur-[2px] animate-fade-in"
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
                        hover:bg-blue-900/50 transition-all duration-300 transform hover:shadow-2xl hover:shadow-primary/15"
            >
              <span className="flex-shrink-0 mb-4 w-10 h-10 rounded-lg flex items-center justify-center bg-primary/10">
                <Icon className="w-6 h-6 text-primary" />
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
      {selectedBenefit !== null && (
        <BenefitDetailSection
          benefit={benefits[selectedBenefit]}
          onClose={() => setSelectedBenefit(null)}
        />
      )}
    </section>
  );
};

export default BenefitsSection;

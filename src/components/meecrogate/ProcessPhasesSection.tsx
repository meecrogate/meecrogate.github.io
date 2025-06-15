
import { Pencil, Shield, Upload } from "lucide-react";

const phases = [
  {
    title: "Design",
    description: "Créez votre API rapidement et graphiquement, sans écrire de code.",
    icon: Pencil,
    image: "/photo-1461749280684-dccba630e2f6.jpg",
    alt: "Écran de conception (code, design)"
  },
  {
    title: "Secure",
    description: "Ajoutez la sécurité, la gouvernance, et la gestion des accès simplement.",
    icon: Shield,
    image: "/photo-1518770660439-4636190af475.jpg",
    alt: "Sécurisation API (circuit board, sécurité)"
  },
  {
    title: "Deploy",
    description: "Déployez et exécutez votre API sur le cloud en un clic, avec scalabilité automatique.",
    icon: Upload,
    image: "/photo-1487887235947-a955ef187fcc.jpg",
    alt: "Déploiement cloud (drone décolle)"
  },
];

const ProcessPhasesSection = () => (
  <section className="relative py-16 bg-gradient-to-b from-brand-blue/10 to-brand-dark/0">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-brand-blue mb-10 text-center">
        🚀 3 phases pour une API prête à l'emploi
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {phases.map((phase, idx) => (
          <div key={idx} className="group flex flex-col items-center bg-white/70 dark:bg-brand-dark/70 rounded-2xl shadow-lg hover:shadow-xl backdrop-blur-md border border-brand-blue/10 px-6 py-8 transition-all duration-300 hover:scale-105">
            <div className="relative w-full h-48 mb-6">
              {/* Illustration de la phase */}
              <img
                src={phase.image}
                alt={phase.alt}
                className="absolute inset-0 w-full h-full object-cover rounded-xl shadow group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 z-10 bg-gradient-to-br from-brand-blue/20 to-brand-orange/40 w-14 h-14 rounded-xl flex items-center justify-center shadow-lg border border-white/30 dark:border-brand-dark/40">
                <phase.icon className="w-8 h-8 text-brand-blue group-hover:text-brand-orange transition-colors" />
              </span>
            </div>
            <div className="text-2xl font-bold text-brand-dark dark:text-brand-light mb-2">{phase.title}</div>
            <div className="text-base text-brand-dark/70 dark:text-brand-light/70 text-center">
              {phase.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessPhasesSection;


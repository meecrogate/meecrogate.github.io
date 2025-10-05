import { Layers, Settings, Rocket, Monitor } from "lucide-react";

const steps = [
  { 
    title: "Conception", 
    description: "Modélisez vos APIs et processus via l'interface sans écrire une ligne de code.", 
    icon: Layers, 
    image_url: "https://placehold.co/400x200/294D8A/E6E6FA?text=Blueprint+Model&font=roboto"
  },
  { 
    title: "Configuration", 
    description: "Définissez les règles de sécurité, les quotas et les orchestrations en quelques clics.", 
    icon: Settings, 
    image_url: "https://placehold.co/400x200/182A4D/ADD8E6?text=Config+Panel+CLI&font=roboto"
  },
  { 
    title: "Déploiement", 
    description: "Déployez en production instantanément et bénéficiez de la scalabilité cloud-native.", 
    icon: Rocket, 
    image_url: "https://placehold.co/400x200/0C3A6E/F0F8FF?text=API+Deployment+Flow&font=roboto"
  },
  { 
    title: "Surveillance", 
    description: "Obtenez une vue en temps réel de la performance et du comportement de vos services.", 
    icon: Monitor, 
    image_url: "https://placehold.co/400x200/0A2540/D3D3D3?text=Live+Monitoring+Charts&font=roboto"
  }
];

const ProcessPhasesSection = () => (
  <section className="bg-gray-950 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-4xl font-bold text-white mb-16">
        Cycle de Vie d'un Processus
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div 
              key={index} 
              className="relative text-center p-6 rounded-xl overflow-hidden shadow-xl border border-gray-700 
                         bg-cover bg-center transition-transform duration-300 hover:scale-[1.03]"
              style={{ backgroundImage: `url(${step.image_url})` }}
            >
              <div className="absolute inset-0 bg-gray-900/80 hover:bg-gray-900/70 transition-colors duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary/10 border-2 border-primary/20">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {index + 1}. {step.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="absolute hidden lg:block top-1/2 left-[calc(100%+6px)] w-8 h-px bg-gray-700"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ProcessPhasesSection;


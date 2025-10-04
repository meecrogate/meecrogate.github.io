import { Check, Zap, Globe, Shield, Activity, Lock } from "lucide-react";

const Benefits = () => {
  const benefits = [
    { 
      text: "Déploiement rapide et accompagné sans développeur",
      icon: Zap, 
      color: "blue" 
    },
    { 
      text: "Haute disponibilité et scalabilité automatique", 
      icon: Activity, 
      color: "fuchsia" 
    },
    { 
      text: "Gouvernance des APIs intégrée (sécurité, accès, quotas)", 
      icon: Shield, 
      color: "orange" 
    },
    { 
      text: "Surveillance et traçabilité natives", 
      icon: Globe, 
      color: "cyan" 
    },
    { 
      text: "Adapté aux architectures Cloud et On premise modernes: microservices, event-driven, api-first", 
      icon: Check, 
      color: "green" 
    },
    { 
      text: (
        <>
          No cloud vendor locking
          <br />
          <span className="font-semibold">Compatible et Composable</span>
        </>
      ),
      icon: Lock, 
      color: "yellow" 
    }
  ];

  const getColorClasses = (color) => {
    switch (color) {
      case 'blue': return { bg: 'bg-blue-500/20', text: 'text-blue-400' };
      case 'fuchsia': return { bg: 'bg-fuchsia-500/20', text: 'text-fuchsia-400' };
      case 'orange': return { bg: 'bg-orange-500/20', text: 'text-orange-400' };
      case 'cyan': return { bg: 'bg-cyan-500/20', text: 'text-cyan-400' };
      case 'yellow': return { bg: 'bg-yellow-500/20', text: 'text-yellow-400' };
      default: return { bg: 'bg-green-500/20', text: 'text-green-400' };
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animations de fond décorative */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-20 -right-40 w-80 h-80 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-4 tracking-tighter">
            <span className="text-[#ffb300] pb-2 border-b-4 border-[#ffb300]/50 inline-flex items-center">
              Bénéfices Clés
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-200 max-w-4xl mx-auto mt-6">
            Une plateforme qui s'adapte à vos besoins, pas l'inverse.
          </p>
        </div>

        <div className="bg-gray-900/30 backdrop-blur-lg rounded-3xl border border-gray-700/70 p-8 md:p-12 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              const classes = getColorClasses(benefit.color);

              return (
                <div 
                  key={index}
                  className="flex items-start space-x-6 group transition-all duration-500 transform bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 shadow-xl hover:scale-[1.03] hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.3),0_4px_6px_-2px_rgba(0,0,0,0.2),0_0_40px_-5px_rgba(255,179,0,0.6)] hover:border-[#ffb300] hover:from-gray-800/70 hover:to-gray-900/70"
                >
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 ${classes.bg} rounded-xl flex items-center justify-center border border-gray-700/50`}>
                      <Icon className={`w-6 h-6 ${classes.text}`} />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xl font-medium text-white group-hover:text-[#ffb300] transition-colors duration-300">
                      {benefit.text}
                    </p>
                    {typeof benefit.text === 'string' && benefit.text.includes("Cloud et On premise") && (
                      <p className="text-sm text-gray-400 mt-1">
                        Support complet pour toutes vos intégrations asynchrones et synchrones.
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

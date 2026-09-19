import { useTranslation } from "react-i18next";
import { Check, Zap, Globe, Shield, Activity, Lock } from "lucide-react";

const Benefits = () => {
  const { t } = useTranslation("benefits");

  const benefits = [
    { id: "fastDeployment", icon: Zap, color: "blue" },
    { id: "highAvailability", icon: Activity, color: "fuchsia" },
    { id: "governance", icon: Shield, color: "orange" },
    { id: "monitoring", icon: Globe, color: "cyan" },
    { id: "modernArchitectures", icon: Check, color: "green" },
    { id: "noLockIn", icon: Lock, color: "yellow" },
  ];

  const getColorClasses = (color: string) => {
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
              {t("title")}
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-200 max-w-4xl mx-auto mt-6">
            {t("subtitle")}
          </p>
        </div>

        <div className="bg-gray-900/30 backdrop-blur-lg rounded-3xl border border-gray-700/70 p-8 md:p-12 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              const classes = getColorClasses(benefit.color);

              return (
                <div 
                  key={benefit.id}
                  className="flex items-start space-x-6 group transition-all duration-500 transform bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 shadow-xl hover:scale-[1.03] hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.3),0_4px_6px_-2px_rgba(0,0,0,0.2),0_0_40px_-5px_rgba(255,179,0,0.6)] hover:border-[#ffb300] hover:from-gray-800/70 hover:to-gray-900/70"
                >
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 ${classes.bg} rounded-xl flex items-center justify-center border border-gray-700/50`}>
                      <Icon className={`w-6 h-6 ${classes.text}`} />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xl font-medium text-white group-hover:text-[#ffb300] transition-colors duration-300">
                      {benefit.id === "noLockIn" ? (
                        <>
                          {t("items.noLockIn.text")}
                          <br />
                          <span className="font-semibold">{t("items.noLockIn.highlight")}</span>
                        </>
                      ) : benefit.id === "modernArchitectures" ? (
                        t("items.modernArchitectures.text")
                      ) : (
                        t(`items.${benefit.id}`)
                      )}
                    </p>
                    {benefit.id === "modernArchitectures" && (
                      <p className="text-sm text-gray-400 mt-1">
                        {t("items.modernArchitectures.note")}
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

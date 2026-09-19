import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Rocket, Cloud, Lock, BarChart3, Globe, Shield } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Icons stay in code, the wording lives in the `home` namespace.
const benefits = [
  { id: "fastDeployment", icon: Rocket },
  { id: "highAvailability", icon: Cloud },
  { id: "governance", icon: Lock },
  { id: "monitoring", icon: BarChart3 },
  { id: "modernArchitectures", icon: Globe },
  { id: "noLockIn", icon: Shield },
];

const BenefitsSection = () => {
  const [selectedBenefit, setSelectedBenefit] = useState<number | null>(null);
  const { t } = useTranslation("home");

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-center text-4xl font-bold text-white mb-12">
        {t("benefits.title")}
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
                <h3 className="text-xl font-semibold text-white mb-1">{t(`benefits.items.${benefit.id}.title`)}</h3>
                <p className="text-sm text-gray-400">{t(`benefits.items.${benefit.id}.description`)}</p>
              </div>
              
              <div className="mt-4 w-full text-sm font-medium text-gray-500 group-hover:text-white flex items-center justify-center">
                {t("benefits.details")}
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
                    {t(`benefits.items.${benefit.id}.title`)}
                  </DialogTitle>
                </div>
                <DialogDescription className="text-gray-400 text-base">
                  {t(`benefits.items.${benefit.id}.description`)}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4">
                <p className="text-gray-300 leading-relaxed">{t(`benefits.items.${benefit.id}.details`)}</p>
              </div>
            </DialogContent>
          </Dialog>
        );
      })}
    </section>
  );
};

export default BenefitsSection;

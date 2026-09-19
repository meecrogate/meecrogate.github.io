import { Layers, Settings, Rocket, Monitor, Info } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
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

// Icons and illustrations stay in code, the wording lives in the `home` namespace.
const steps = [
  { id: "design", icon: Layers, image: conceptionImg },
  { id: "configuration", icon: Settings, image: configurationImg },
  { id: "deployment", icon: Rocket, image: deploiementImg },
  { id: "monitoring", icon: Monitor, image: surveillanceImg },
];

const ProcessPhasesSection = () => {
  const [openDialog, setOpenDialog] = useState<number | null>(null);
  const { t } = useTranslation("home");

  return (
    <section className="bg-gray-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-bold text-white mb-16">
          {t("process.title")}
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
                    {index + 1}. {t(`process.steps.${step.id}.title`)}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {t(`process.steps.${step.id}.description`)}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setOpenDialog(index)}
                    className="bg-transparent border-[#FFB300]/50 text-[#FFB300] hover:bg-[#FFB300]/10 hover:text-[#FFB300]"
                  >
                    <Info className="w-4 h-4 mr-2" />
                    {t("process.learnMore")}
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
          <Dialog key={index} open={openDialog === index} onOpenChange={(open) => setOpenDialog(open ? index : null)} modal={false}>
            <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-lg">
              <DialogHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FFB300]/20 border-2 border-[#FFB300]/30">
                    <Icon className="w-6 h-6 text-[#FFB300]" />
                  </div>
                  <DialogTitle className="text-2xl font-bold text-white">
                    {t(`process.steps.${step.id}.title`)}
                  </DialogTitle>
                </div>
                <DialogDescription className="text-gray-400 text-base">
                  {t(`process.steps.${step.id}.description`)}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4">
                <h4 className="text-[#FFB300] font-semibold mb-3">{t("process.howItHelps")}</h4>
                <ul className="space-y-3">
                  {(t(`process.steps.${step.id}.benefits`, { returnObjects: true }) as string[]).map((benefit, i) => (
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


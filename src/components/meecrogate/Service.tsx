import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { useMatomo } from "@jonkoops/matomo-tracker-react";
import { Loader2 } from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "081aaa9f-94c9-4b5b-8688-df70b9f15bb6";

const emptyForm = {
  nom: "",
  email: "",
  entreprise: "",
  telephone: "",
  message: ""
};

const Service = () => {
  const [formData, setFormData] = useState(emptyForm);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useTranslation(["service", "forms"]);
  const { trackEvent } = useMatomo();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: t("dialog.mailSubject", { name: formData.nom, company: formData.entreprise }),
          from_name: formData.nom,
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        // Counted as a goal in Matomo: category "Lead", action "Integration request".
        trackEvent({ category: "Lead", action: "Integration request" });
        toast({
          title: t("toast.title"),
          description: t("toast.description"),
        });
        setFormData(emptyForm);
        setIsContactDialogOpen(false);
      } else {
        toast({ title: t("forms:contact.errors.send"), variant: "destructive" });
      }
    } catch (error) {
      toast({ title: t("forms:contact.errors.network"), variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-slate-900 min-h-screen">
      {/* Header moderne avec ligne d'accent */}
      <div className="text-center mb-16">
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-5xl sm:text-6xl font-extrabold text-white mb-3 tracking-tight">
            {t("title")}
          </h2>
          <div className="w-16 h-1 bg-indigo-500 rounded-sm"></div>
        </div>
        <p className="text-xl text-brand-orange font-extrabold max-w-3xl mx-auto">
          {t("subtitle")}
        </p>
      </div>

      {/* Contenu principal */}
      <div className="max-w-3xl mx-auto">
        <div className="bg-slate-800/70 border border-slate-700/30 rounded-xl p-8 text-left text-slate-200 backdrop-blur-sm">
          <ul className="space-y-6 list-inside list-disc">
            {["diagnostic", "targetArchitecture", "deployment", "training", "support"].map((step) => (
              <li key={step}>
                <span className="font-semibold text-white">{t(`steps.${step}.title`)}</span>{" "}
                {t(`steps.${step}.description`)}
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <Button 
              size="lg" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 text-lg font-semibold"
              onClick={() => setIsContactDialogOpen(true)}
            >
              {t("cta")}
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Dialog */}
      <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen} modal={false}>
        <DialogContent className="sm:max-w-[500px] bg-slate-800 border-slate-700">
          <DialogHeader>
            <DialogTitle className="text-white text-xl font-bold">
              {t("dialog.title")}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nom" className="text-slate-300">
                  {t("forms:fields.name.label")}
                </Label>
                <Input
                  id="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleInputChange}
                  required
                  className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  placeholder={t("forms:fields.name.placeholder")}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="entreprise" className="text-slate-300">
                  {t("forms:fields.company.label")}
                </Label>
                <Input
                  id="entreprise"
                  name="entreprise"
                  value={formData.entreprise}
                  onChange={handleInputChange}
                  required
                  className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  placeholder={t("forms:fields.company.placeholder")}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-300">
                {t("forms:fields.email.label")}
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                placeholder={t("forms:fields.email.placeholder")}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="telephone" className="text-slate-300">
                {t("forms:fields.phone.label")}
              </Label>
              <Input
                id="telephone"
                name="telephone"
                type="tel"
                value={formData.telephone}
                onChange={handleInputChange}
                className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                placeholder={t("forms:fields.phone.placeholder")}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message" className="text-slate-300">
                {t("forms:fields.message.label")}
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                placeholder={t("forms:fields.message.placeholder")}
              />
            </div>
            
            <div className="flex gap-3 pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    {t("forms:contact.submitting")}
                  </>
                ) : (
                  t("dialog.submit")
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Service;

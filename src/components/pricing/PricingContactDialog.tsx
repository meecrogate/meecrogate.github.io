import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMatomo } from "@jonkoops/matomo-tracker-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Send } from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "081aaa9f-94c9-4b5b-8688-df70b9f15bb6";

const emptyForm = {
  nom: "",
  email: "",
  entreprise: "",
  telephone: "",
  sujet: "",
  message: "",
};

/**
 * Quote request form. `plan` is the edition or the call-to-action the visitor
 * clicked; it prefills the subject and travels with the message.
 */
const PricingContactDialog = ({
  open,
  onOpenChange,
  plan,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  plan: string;
}) => {
  const { t } = useTranslation("pricing");
  const { toast } = useToast();
  const { trackEvent } = useMatomo();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState(emptyForm);

  // The subject follows whichever card opened the dialog.
  useEffect(() => {
    if (!open || !plan) return;
    setFormData((prev) => ({ ...prev, sujet: t("dialog.defaultSubject", { plan }) }));
  }, [open, plan, t]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
          subject: t("dialog.mailSubject", { plan, name: formData.nom }),
          from_name: formData.nom,
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        // Counted as a goal in Matomo: category "Lead", action "Quote request", name = edition.
        trackEvent({ category: "Lead", action: "Quote request", name: plan || undefined });
        toast({
          title: t("toast.successTitle"),
          description: t("toast.successDescription"),
        });
        onOpenChange(false);
        setFormData(emptyForm);
      } else {
        toast({
          title: t("toast.errorTitle"),
          description: t("toast.errorDescription"),
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: t("toast.networkTitle"),
        description: t("toast.networkDescription"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange} modal={false}>
      <DialogContent className="bg-brand-dark border-brand-light/15 text-brand-light max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-brand-light">{t("dialog.title")}</DialogTitle>
          <DialogDescription className="text-brand-light/70">
            {plan && t("dialog.descriptionWithPlan", { plan })}
            {t("dialog.description")}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nom" className="text-brand-light/80">
                {t("forms:contact.fullName.label")}
              </Label>
              <Input
                id="nom"
                name="nom"
                value={formData.nom}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className="bg-slate-800 border-brand-light/15 text-white placeholder:text-brand-light/40"
                placeholder={t("forms:contact.fullName.placeholder")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="entreprise" className="text-brand-light/80">
                {t("forms:contact.company.label")}
              </Label>
              <Input
                id="entreprise"
                name="entreprise"
                value={formData.entreprise}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className="bg-slate-800 border-brand-light/15 text-white placeholder:text-brand-light/40"
                placeholder={t("forms:contact.company.placeholder")}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-brand-light/80">
                {t("forms:fields.email.label")}
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className="bg-slate-800 border-brand-light/15 text-white placeholder:text-brand-light/40"
                placeholder={t("forms:fields.email.placeholder")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="telephone" className="text-brand-light/80">
                {t("forms:fields.phone.label")}
              </Label>
              <Input
                id="telephone"
                name="telephone"
                type="tel"
                value={formData.telephone}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="bg-slate-800 border-brand-light/15 text-white placeholder:text-brand-light/40"
                placeholder={t("forms:fields.phone.placeholder")}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="sujet" className="text-brand-light/80">
              {t("forms:contact.subject.label")}
            </Label>
            <Input
              id="sujet"
              name="sujet"
              value={formData.sujet}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
              className="bg-slate-800 border-brand-light/15 text-white placeholder:text-brand-light/40"
              placeholder={t("forms:contact.subject.placeholder")}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-brand-light/80">
              {t("forms:contact.message.label")}
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
              rows={5}
              className="bg-slate-800 border-brand-light/15 text-white placeholder:text-brand-light/40"
              placeholder={t("forms:fields.message.placeholder")}
            />
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full bg-brand-orange text-gray-900 hover:bg-brand-orange/90 font-semibold border-0"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 w-5 h-5 animate-spin" /> {t("dialog.submitting")}
              </>
            ) : (
              <>
                <Send className="mr-2 w-5 h-5" /> {t("dialog.submit")}
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PricingContactDialog;

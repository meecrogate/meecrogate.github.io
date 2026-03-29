import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Loader2 } from "lucide-react";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    entreprise: "",
    telephone: "",
    sujet: "",
    message: ""
  });

  // ⚠️ Remplacez par votre vraie URL générée par Google Apps Script
  const GOOGLE_SCRIPT_URL = "https://script.google.com/a/macros/yupiik.com/s/AKfycbxdoxQ-ExatbykLTNvKVoRwixMUvz_fnUPhH5bCjOEFFzf_h6ZAga1nyZf1_3-k81ZP/exec";
  

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
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        // On envoie directement notre objet formData complet
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.status === "success") {
        toast.success("Votre message a bien été envoyé ! Nous vous recontacterons très vite.");
        // On vide le formulaire après succès
        setFormData({
          nom: "",
          email: "",
          entreprise: "",
          telephone: "",
          sujet: "",
          message: ""
        });
      } else {
        toast.error("Erreur lors de l'envoi du message.");
      }
    } catch (error) {
      toast.error("Impossible de joindre le serveur. Veuillez réessayer plus tard.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Contactez-nous
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Vous avez des questions sur Meecrogate ? Notre équipe d'experts est là pour vous accompagner 
          dans votre transformation digitale.
        </p>
      </div>

      {/* Formulaire de contact */}
      <div className="bg-gradient-to-br from-brand-dark/90 to-brand-blue/20 backdrop-blur-sm rounded-3xl border border-gray-700 p-8 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8">Envoyez-nous un message</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nom" className="text-gray-300">
                Nom complet *
              </Label>
              <Input
                id="nom"
                name="nom"
                value={formData.nom}
                onChange={handleInputChange}
                required
                className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                placeholder="Votre nom complet"
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="entreprise" className="text-gray-300">
                Entreprise *
              </Label>
              <Input
                id="entreprise"
                name="entreprise"
                value={formData.entreprise}
                onChange={handleInputChange}
                required
                className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                placeholder="Nom de votre entreprise"
                disabled={isSubmitting}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-300">
                Email *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                placeholder="votre.email@entreprise.com"
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="telephone" className="text-gray-300">
                Téléphone
              </Label>
              <Input
                id="telephone"
                name="telephone"
                type="tel"
                value={formData.telephone}
                onChange={handleInputChange}
                className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                placeholder="+33 1 23 45 67 89"
                disabled={isSubmitting}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="sujet" className="text-gray-300">
              Sujet *
            </Label>
            <Input
              id="sujet"
              name="sujet"
              value={formData.sujet}
              onChange={handleInputChange}
              required
              className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
              placeholder="Objet de votre demande"
              disabled={isSubmitting}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message" className="text-gray-300">
              Message *
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={6}
              className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
              placeholder="Décrivez votre projet, vos besoins ou vos questions en détail..."
              disabled={isSubmitting}
            />
          </div>
          
          <Button
            type="submit"
            size="lg"
            className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                Envoi en cours...
              </>
            ) : (
              <>
                <Send className="mr-2 w-5 h-5" />
                Envoyer le message
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
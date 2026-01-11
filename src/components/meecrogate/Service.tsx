import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const Service = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    entreprise: "",
    telephone: "",
    message: ""
  });
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulaire soumis:", formData);
    toast({
      title: "Demande envoyée",
      description: "Nous vous contacterons rapidement pour discuter de votre projet d'intégration.",
    });
    setFormData({
      nom: "",
      email: "",
      entreprise: "",
      telephone: "",
      message: ""
    });
    setIsContactDialogOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-slate-900 min-h-screen">
      {/* Header moderne avec ligne d'accent */}
      <div className="text-center mb-16">
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-5xl sm:text-6xl font-extrabold text-white mb-3 tracking-tight">
            Service d'intégration
          </h2>
          <div className="w-16 h-1 bg-indigo-500 rounded-sm"></div>
        </div>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Notre équipe accompagne l'intégration de la solution Meecrogate dans votre contexte spécifique, pour un déploiement optimal sur votre infrastructure.
        </p>
      </div>

      {/* Contenu principal */}
      <div className="max-w-3xl mx-auto">
        <div className="bg-slate-800/70 border border-slate-700/30 rounded-xl p-8 text-left text-slate-200 backdrop-blur-sm">
          <ul className="space-y-6 list-inside list-disc">
            <li>
              <span className="font-semibold text-white">Diagnostic de l'existant :</span> Analyse de votre environnement technique, architecture, flux d'API et contraintes d'intégration.
            </li>
            <li>
              <span className="font-semibold text-white">Proposition d'architecture cible :</span> Définition d'une architecture adaptée à votre système d'information permettant une adoption progressive et sécurisée de Meecrogate.
            </li>
            <li>
              <span className="font-semibold text-white">Déploiement sur mesure :</span> Accompagnement à l'installation sur vos environnements (cloud, on-premise ou hybride) avec adaptation des configurations et orchestrations selon vos besoins.
            </li>
            <li>
              <span className="font-semibold text-white">Transfert de compétences :</span> Formations et meilleures pratiques pour une prise en main rapide par vos équipes.
            </li>
            <li>
              <span className="font-semibold text-white">Support renforcé :</span> Accès à un support dédié tout au long du projet de migration et d'intégration.
            </li>
          </ul>
          <div className="mt-10 text-center">
            <Button 
              size="lg" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 text-lg font-semibold"
              onClick={() => setIsContactDialogOpen(true)}
            >
              Discuter de mon projet d'intégration
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Dialog */}
      <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen} modal={false}>
        <DialogContent className="sm:max-w-[500px] bg-slate-800 border-slate-700">
          <DialogHeader>
            <DialogTitle className="text-white text-xl font-bold">
              Demande d'intégration
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nom" className="text-slate-300">
                  Nom *
                </Label>
                <Input
                  id="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleInputChange}
                  required
                  className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  placeholder="Votre nom"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="entreprise" className="text-slate-300">
                  Entreprise *
                </Label>
                <Input
                  id="entreprise"
                  name="entreprise"
                  value={formData.entreprise}
                  onChange={handleInputChange}
                  required
                  className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                  placeholder="Nom de l'entreprise"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-300">
                Email *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                placeholder="votre.email@entreprise.com"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="telephone" className="text-slate-300">
                Téléphone
              </Label>
              <Input
                id="telephone"
                name="telephone"
                type="tel"
                value={formData.telephone}
                onChange={handleInputChange}
                className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                placeholder="+33 1 23 45 67 89"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message" className="text-slate-300">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                placeholder="Décrivez vos besoins ou questions..."
              />
            </div>
            
            <div className="flex gap-3 pt-4">
              <Button
                type="submit"
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                Envoyer la demande
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Service;

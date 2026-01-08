import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";

const Service = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    entreprise: "",
    telephone: "",
    message: ""
  });

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
  };

  return (
    <div className="bg-slate-900 min-h-screen flex flex-col overflow-x-hidden">
      <Navigation />
      <main className="flex-1">
        <section className="max-w-3xl mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Service d'intégration sur-mesure
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Notre équipe accompagne l'intégration de la solution Meecrogate dans votre contexte spécifique, pour un déploiement optimal sur votre infrastructure.
          </p>
          <div className="bg-gray-800/70 border border-gray-700 rounded-xl p-8 text-left text-gray-200">
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
              <Dialog modal={false}>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-3 text-lg font-semibold">
                    Discuter de mon projet d'intégration
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px] bg-brand-dark border-gray-700">
                  <DialogHeader>
                    <DialogTitle className="text-white text-xl font-bold">
                      Demande d'intégration
                    </DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nom" className="text-gray-300">
                          Nom *
                        </Label>
                        <Input
                          id="nom"
                          name="nom"
                          value={formData.nom}
                          onChange={handleInputChange}
                          required
                          className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                          placeholder="Votre nom"
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
                          placeholder="Nom de l'entreprise"
                        />
                      </div>
                    </div>
                    
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
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-300">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                        placeholder="Décrivez vos besoins ou questions..."
                      />
                    </div>
                    
                    <div className="flex gap-3 pt-4">
                      <Button
                        type="submit"
                        className="flex-1 bg-brand-blue hover:bg-brand-blue/90 text-white"
                      >
                        Envoyer la demande
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Service;

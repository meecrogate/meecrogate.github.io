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
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", formData);
    toast({
      title: "Demande envoyée",
      description: "Nous vous contacterons rapidement pour discuter de votre projet d'intégration.",
    });
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  return (
    <div className="bg-slate-900 min-h-screen flex flex-col">
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
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 text-lg">
                    Discuter de mon projet d'intégration
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px] bg-background border-border">
                  <DialogHeader>
                    <DialogTitle className="text-foreground">Demande d'intégration</DialogTitle>
                    <DialogDescription className="text-muted-foreground">
                      Parlez-nous de votre projet et nous vous contacterons rapidement.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div>
                      <Label htmlFor="name" className="text-foreground">Nom *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1 bg-background border-border text-foreground"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company" className="text-foreground">Entreprise *</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        className="mt-1 bg-background border-border text-foreground"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-foreground">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1 bg-background border-border text-foreground"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-foreground">Téléphone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1 bg-background border-border text-foreground"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-foreground">Décrivez votre projet *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="mt-1 bg-background border-border text-foreground"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Envoyer la demande
                    </Button>
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

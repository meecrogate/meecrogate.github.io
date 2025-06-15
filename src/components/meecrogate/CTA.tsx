
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const CTA = () => {
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
    // Ici on pourrait envoyer les données vers un backend
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="bg-gradient-to-r from-brand-blue/20 to-brand-orange/20 backdrop-blur-sm rounded-3xl border border-gray-700 p-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Prêt à révolutionner vos APIs ?
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Découvrez comment Meecrogate peut transformer votre architecture API 
          en une plateforme moderne, sécurisée et scalable.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-4 text-lg">
                <Mail className="mr-2 w-5 h-5" />
                Demander une démo
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] bg-brand-dark border-gray-700">
              <DialogHeader>
                <DialogTitle className="text-white text-xl font-bold">
                  Demander une démo
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
          
          <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg">
            <Download className="mr-2 w-5 h-5" />
            Télécharger la documentation
          </Button>
          <Button variant="outline" size="lg" className="border-brand-orange text-brand-orange hover:bg-brand-orange/10 px-8 py-4 text-lg">
            Essai gratuit
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CTA;

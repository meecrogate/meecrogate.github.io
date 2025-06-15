
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    entreprise: "",
    telephone: "",
    sujet: "",
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
    console.log("Formulaire de contact soumis:", formData);
    // Ici on pourrait envoyer les données vers un backend
    alert("Merci pour votre message ! Nous vous recontacterons bientôt.");
    // Reset form
    setFormData({
      nom: "",
      email: "",
      entreprise: "",
      telephone: "",
      sujet: "",
      message: ""
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Contactez-nous
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Vous avez des questions sur Meecrogate ? Notre équipe d'experts est là pour vous accompagner 
          dans votre transformation digitale.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Informations de contact */}
        <div className="bg-gradient-to-br from-custom-blue/20 to-custom-orange/20 backdrop-blur-sm rounded-3xl border border-gray-700 p-8">
          <h2 className="text-2xl font-bold text-white mb-8">Nos coordonnées</h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-custom-blue/20 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-custom-blue" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Email</h3>
                <p className="text-gray-300">contact@meecrogate.com</p>
                <p className="text-gray-300">support@meecrogate.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-custom-orange/20 p-3 rounded-lg">
                <Phone className="w-6 h-6 text-custom-orange" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Téléphone</h3>
                <p className="text-gray-300">+33 1 23 45 67 89</p>
                <p className="text-sm text-gray-400">Lun - Ven, 9h - 18h</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-custom-blue/20 p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-custom-blue" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Adresse</h3>
                <p className="text-gray-300">123 Avenue des Champs-Élysées</p>
                <p className="text-gray-300">75008 Paris, France</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-custom-dark/50 rounded-lg border border-gray-700">
            <h3 className="text-white font-semibold mb-2">Horaires d'ouverture</h3>
            <div className="text-sm text-gray-300 space-y-1">
              <div className="flex justify-between">
                <span>Lundi - Vendredi</span>
                <span>9h00 - 18h00</span>
              </div>
              <div className="flex justify-between">
                <span>Samedi</span>
                <span>10h00 - 16h00</span>
              </div>
              <div className="flex justify-between">
                <span>Dimanche</span>
                <span>Fermé</span>
              </div>
            </div>
          </div>
        </div>

        {/* Formulaire de contact */}
        <div className="bg-gradient-to-br from-custom-dark/90 to-custom-blue/20 backdrop-blur-sm rounded-3xl border border-gray-700 p-8">
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
              />
            </div>
            
            <Button
              type="submit"
              size="lg"
              className="w-full bg-custom-blue hover:bg-custom-blue/90 text-white"
            >
              <Send className="mr-2 w-5 h-5" />
              Envoyer le message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

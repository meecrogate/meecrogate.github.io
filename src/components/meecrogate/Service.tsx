import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Users, Target, Rocket, GraduationCap, HeadphonesIcon, CheckCircle2, ArrowRight } from "lucide-react";

// Composant pour une carte de service avec effet hover et dialog
const ServiceCard = ({ service }: { service: typeof servicePoints[0] }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <Card 
        className="bg-slate-800/70 border-slate-700/30 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:bg-slate-800/90 hover:scale-[1.01] hover:shadow-lg hover:shadow-indigo-500/20 cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsDialogOpen(true)}
      >
        <div className="relative h-48 overflow-hidden">
          <img 
            src={service.image} 
            alt={service.title}
            className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-105' : ''}`}
            onError={(e) => { 
              const target = e.target as HTMLImageElement;
              target.onerror = null; 
              target.src = "https://placehold.co/400x300/1f2937/d1d5db?text=Image"; 
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
          <div className="absolute top-4 left-4 z-10">
            {service.icon}
          </div>
        </div>
        <CardHeader className="pb-4">
          <CardTitle className="text-lg text-white">{service.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-slate-300">
            {service.description}
          </CardDescription>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen} modal={false}>
        <DialogContent className="bg-slate-800 border-slate-700 text-slate-200 max-w-lg">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              {service.icon}
              <DialogTitle className="text-xl text-white">{service.title}</DialogTitle>
            </div>
            <DialogDescription className="text-slate-300 text-base">
              {service.description}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 space-y-4">
            <h4 className="text-indigo-400 font-semibold">Ce que nous faisons</h4>
            <ul className="space-y-3">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

// Composant pour le processus d'intégration
const IntegrationProcess = () => {
  const phases = [
    {
      title: "DIAGNOSTIC",
      subtitle: "Analyse technique",
      icon: <Target size={24} className="text-white" />,
      colorClass: "bg-indigo-600",
    },
    {
      title: "ARCHITECTURE",
      subtitle: "Conception cible",
      icon: <Rocket size={24} className="text-white" />,
      colorClass: "bg-slate-800 border-2 border-amber-500",
    },
    {
      title: "DÉPLOIEMENT",
      subtitle: "Installation & Config",
      icon: <Users size={24} className="text-white" />,
      colorClass: "bg-amber-500",
    },
    {
      title: "ACCOMPAGNEMENT",
      subtitle: "Formation & Support",
      icon: <GraduationCap size={24} className="text-white" />,
      colorClass: "bg-indigo-600",
    },
  ];

  return (
    <div className="mt-8 p-6 bg-slate-800/50 rounded-xl">
      <h5 className="text-indigo-400 font-bold mb-6 text-center text-lg">
        Notre processus d'intégration
      </h5>
      
      {/* Layout responsive: vertical sur mobile, horizontal sur desktop */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 max-w-4xl mx-auto">
        {phases.map((phase, index) => (
          <div key={index} className="flex items-center gap-4 sm:gap-6">
            {/* Phase Block */}
            <div className={`${phase.colorClass} p-4 rounded-lg min-w-[110px] shadow-lg flex flex-col items-center`}>
              {phase.icon}
              <div className="text-white font-bold text-sm mt-2 uppercase text-center leading-tight">
                {phase.title}
              </div>
              <div className="text-slate-200 text-xs mt-1 text-center">
                {phase.subtitle}
              </div>
            </div>

            {/* Arrow Separator */}
            {index < phases.length - 1 && (
              <div className="sm:block">
                <ArrowRight size={32} className="text-slate-400 rotate-90 sm:rotate-0" />
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="text-indigo-400 text-sm mt-6 text-center">
        Un accompagnement sur-mesure pour une intégration réussie dans votre environnement.
      </div>
    </div>
  );
};

const servicePoints = [
  {
    icon: <Target className="w-6 h-6 text-indigo-500" />,
    title: "Diagnostic de l'existant",
    description: "Analyse de votre environnement technique, architecture, flux d'API et contraintes d'intégration",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&crop=center",
    benefits: [
      "Audit complet de votre infrastructure existante et des flux de données",
      "Identification des points d'intégration critiques et des dépendances",
      "Analyse des contraintes de sécurité et de conformité",
      "Cartographie des APIs et services à interconnecter"
    ]
  },
  {
    icon: <Rocket className="w-6 h-6 text-amber-500" />,
    title: "Architecture cible",
    description: "Définition d'une architecture adaptée à votre système d'information",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center",
    benefits: [
      "Conception d'une architecture évolutive et résiliente",
      "Plan de migration progressif et sécurisé",
      "Recommandations sur les patterns d'intégration optimaux",
      "Documentation technique détaillée de la solution cible"
    ]
  },
  {
    icon: <Users className="w-6 h-6 text-indigo-500" />,
    title: "Déploiement sur mesure",
    description: "Accompagnement à l'installation sur vos environnements cloud, on-premise ou hybride",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&crop=center",
    benefits: [
      "Installation et configuration adaptées à votre infrastructure",
      "Mise en place des orchestrations et automatisations",
      "Intégration avec vos outils DevOps existants",
      "Tests de validation et de performance"
    ]
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-amber-500" />,
    title: "Transfert de compétences",
    description: "Formations et meilleures pratiques pour une prise en main rapide par vos équipes",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop&crop=center",
    benefits: [
      "Sessions de formation adaptées aux différents profils (dev, ops, métier)",
      "Ateliers pratiques sur les cas d'usage de votre contexte",
      "Documentation personnalisée et guides de bonnes pratiques",
      "Certification des équipes sur les fonctionnalités clés"
    ]
  },
  {
    icon: <HeadphonesIcon className="w-6 h-6 text-indigo-500" />,
    title: "Support renforcé",
    description: "Accès à un support dédié tout au long du projet de migration et d'intégration",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop&crop=center",
    benefits: [
      "Équipe support dédiée avec temps de réponse garantis",
      "Accompagnement proactif lors des phases critiques",
      "Résolution rapide des incidents et problèmes",
      "Revues régulières et recommandations d'optimisation"
    ]
  }
];

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
          Notre équipe accompagne l'intégration de Meecrogate dans votre contexte spécifique, pour un déploiement optimal sur votre infrastructure
        </p>
      </div>

      {/* Service Points Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {servicePoints.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>

      {/* Integration Process Card */}
      <Card className="bg-slate-800/70 border-slate-700/30 backdrop-blur-sm max-w-4xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-white mb-4">
            Accompagnement sur mesure
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="flex flex-col sm:flex-row justify-around gap-8 text-slate-300 mb-6">
            <div className="flex flex-col items-center gap-1">
              <h4 className="font-semibold text-indigo-400 mb-2">Cloud</h4>
              <p className="text-sm">AWS, Azure, GCP</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <h4 className="font-semibold text-amber-400 mb-2">Hybride</h4>
              <p className="text-sm">Cloud + On-premise</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <h4 className="font-semibold text-indigo-400 mb-2">On-Premise</h4>
              <p className="text-sm">Infrastructure interne</p>
            </div>
          </div>
          
          <IntegrationProcess />

          {/* Contact CTA */}
          <div className="mt-8">
            <Button 
              size="lg" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 text-lg font-semibold"
              onClick={() => setIsContactDialogOpen(true)}
            >
              Discuter de mon projet d'intégration
            </Button>
          </div>
        </CardContent>
      </Card>

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

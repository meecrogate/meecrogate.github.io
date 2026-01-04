import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Cloud, Database, Settings, Monitor, GitBranch, Server, Workflow, Repeat2, ArrowRight, CheckCircle2 } from "lucide-react";

// Composant pour une carte d'architecture avec effet hover et dialog
const ArchitectureCard = ({ point }: { point: typeof architecturePoints[0] }) => {
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
            src={point.image} 
            alt={point.title}
            className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-105' : ''}`}
            onError={(e) => { 
              const target = e.target as HTMLImageElement;
              target.onerror = null; 
              target.src = "https://placehold.co/400x300/1f2937/d1d5db?text=Image"; 
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
          <div className="absolute top-4 left-4 z-10">
            {point.icon}
          </div>
        </div>
        <CardHeader className="pb-4">
          <CardTitle className="text-lg text-white">{point.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-slate-300">
            {point.description}
          </CardDescription>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen} modal={false}>
        <DialogContent className="bg-slate-800 border-slate-700 text-slate-200 max-w-lg">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              {point.icon}
              <DialogTitle className="text-xl text-white">{point.title}</DialogTitle>
            </div>
            <DialogDescription className="text-slate-300 text-base">
              {point.description}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 space-y-4">
            <h4 className="text-indigo-400 font-semibold">Avantages clés</h4>
            <ul className="space-y-3">
              {point.benefits.map((benefit, index) => (
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

// Composant pour le cycle GitOps
const GitOpsMeecrogateCycle = () => {
  const phases = [
    {
      title: "CONFIGURATION JSON",
      subtitle: "Fichiers de Déclaration",
      icon: <GitBranch size={24} className="text-white" />,
      colorClass: "bg-indigo-600",
    },
    {
      title: "GIT REPOSITORY",
      subtitle: "Source de Vérité",
      icon: <Workflow size={24} className="text-white" />,
      colorClass: "bg-slate-800 border-2 border-amber-500",
    },
    {
      title: "GITOPS SYNC",
      subtitle: "Pull & Apply (Argo/Flux)",
      icon: <Repeat2 size={24} className="text-white" />,
      colorClass: "bg-amber-500",
    },
    {
      title: "MEECROGATE RUNTIME",
      subtitle: "Composants Conteneurisés",
      icon: <Server size={24} className="text-white" />,
      colorClass: "bg-indigo-600",
    },
  ];

  return (
    <div className="mt-8 p-6 bg-slate-800/50 rounded-xl">
      <h5 className="text-indigo-400 font-bold mb-6 text-center text-lg">
        Processus d'Industrialisation GitOps
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
        L'infrastructure et l'application sont déclarées, versionnées et auto-déployées.
      </div>
    </div>
  );
};

// Image abstraite partagée
const SHARED_ABSTRACT_IMAGE = "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&h=300&fit=crop&crop=center";

const architecturePoints = [
  {
    icon: <Cloud className="w-6 h-6 text-indigo-500" />,
    title: "100% Stateless",
    description: "Aucun stockage local, scalabilité horizontale native",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=center",
    benefits: [
      "Scalabilité illimitée : ajoutez ou retirez des instances à la volée selon la charge",
      "Haute disponibilité : aucune perte de données en cas de redémarrage d'une instance",
      "Déploiement simplifié : chaque instance est identique et interchangeable",
      "Coûts optimisés : ne payez que pour les ressources réellement utilisées"
    ]
  },
  {
    icon: <Settings className="w-6 h-6 text-amber-500" />,
    title: "Configuration-driven",
    description: "Logique métier via fichiers JSON ou interface graphique",
    image: SHARED_ABSTRACT_IMAGE,
    benefits: [
      "Zéro code : modifiez le comportement sans recompilation ni redéploiement",
      "Versioning complet : historique des configurations via Git",
      "Rollback instantané : revenez à une configuration précédente en secondes",
      "Collaboration facilitée : les équipes métier peuvent participer à la configuration"
    ]
  },
  {
    icon: <Database className="w-6 h-6 text-indigo-500" />,
    title: "Interopérabilité native",
    description: "REST, WebSocket, Kafka, JDBC",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop&crop=center",
    benefits: [
      "Connectivité universelle : intégrez tous vos systèmes existants sans middleware additionnel",
      "Temps réel : support natif des WebSockets pour les communications bidirectionnelles",
      "Event-driven : consommez et produisez des événements Kafka nativement",
      "Bases de données : connectez-vous directement via JDBC sans passer par des APIs"
    ]
  },
  {
    icon: <Monitor className="w-6 h-6 text-amber-500" />,
    title: "Monitoring centralisé",
    description: "Logs, métriques et traces intégrés",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop&crop=center",
    benefits: [
      "Visibilité complète : suivez chaque requête de bout en bout",
      "Alertes proactives : soyez notifié avant que les problèmes n'impactent vos utilisateurs",
      "Debugging facilité : traces distribuées pour identifier rapidement les goulots d'étranglement",
      "Conformité : logs d'audit pour répondre aux exigences réglementaires"
    ]
  }
];

const Architecture = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-slate-900 min-h-screen">
      {/* Header moderne avec ligne d'accent */}
      <div className="text-center mb-16">
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-5xl sm:text-6xl font-extrabold text-white mb-3 tracking-tight">
            Architecture technique
          </h2>
          <div className="w-16 h-1 bg-indigo-500 rounded-sm"></div>
        </div>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          Cloud-native par design, compatible Kubernetes et VM traditionnelles
        </p>
      </div>

      {/* Architecture Points Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {architecturePoints.map((point, index) => (
          <ArchitectureCard key={index} point={point} />
        ))}
      </div>

      {/* Deployment Card */}
      <Card className="bg-slate-800/70 border-slate-700/30 backdrop-blur-sm max-w-4xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-white mb-4">
            Déploiement flexible
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="flex flex-col sm:flex-row justify-around gap-8 text-slate-300 mb-6">
            <div className="flex flex-col items-center gap-1">
              <h4 className="font-semibold text-indigo-400 mb-2">Cloud-Native</h4>
              <p className="text-sm">Kubernetes, containers, auto-scaling</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <h4 className="font-semibold text-amber-400 mb-2">Hybride</h4>
              <p className="text-sm">Cloud public + datacenter interne</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <h4 className="font-semibold text-indigo-400 mb-2">On-Premise</h4>
              <p className="text-sm">Machines virtuelles traditionnelles</p>
            </div>
          </div>
          
          <GitOpsMeecrogateCycle />
        </CardContent>
      </Card>
    </div>
  );
};

export default Architecture;

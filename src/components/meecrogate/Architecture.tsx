import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Cloud, Database, Settings, Monitor, GitBranch, Server, Workflow, Repeat2, ArrowRight, CheckCircle2, Terminal, Shield, Network, FileJson, Fingerprint, Info } from "lucide-react";

// Composant pour une carte d'architecture avec effet hover et dialog
const ArchitectureCard = ({ point }: { point: typeof architecturePoints[0] }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <Card 
        className="bg-slate-800/70 border-slate-900 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:bg-slate-800/90 hover:scale-[1.01] hover:shadow-lg hover:shadow-indigo-500/20 cursor-pointer"
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

// L'ancien composant pour le cycle GitOps (conservé)
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
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 max-w-4xl mx-auto">
        {phases.map((phase, index) => (
          <div key={index} className="flex items-center gap-4 sm:gap-6">
            <div className={`${phase.colorClass} p-4 rounded-lg min-w-[110px] shadow-lg flex flex-col items-center`}>
              {phase.icon}
              <div className="text-white font-bold text-sm mt-2 uppercase text-center leading-tight">
                {phase.title}
              </div>
              <div className="text-slate-200 text-xs mt-1 text-center">
                {phase.subtitle}
              </div>
            </div>

            {index < phases.length - 1 && (
              <div className="sm:block">
                <ArrowRight size={32} className="text-slate-400 rotate-90 sm:rotate-0" />
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="text-indigo-400 text-sm mt-6 text-center mb-8">
        L'infrastructure et l'application sont déclarées, versionnées et auto-déployées.
      </div>

      {/* Titre ajouté ici */}
      <h5 className="text-white font-bold mb-4 text-center text-lg uppercase tracking-wider">
        Exemple de déploiement Cloud Native
      </h5>

      <InteractiveGitOpsCycle />
    </div>
  );
};

// Le nouveau composant Interactif pour le cycle GitOps (Version Fluide)
const InteractiveGitOpsCycle = () => {
  const [selectedId, setSelectedId] = useState('station');
  const [dashOffset, setDashOffset] = useState(0);
  const animationRef = useRef<number>();

  useEffect(() => {
    let lastTime = performance.now();
    const speed = 0.05;

    const animate = (time: number) => {
      const deltaTime = time - lastTime;
      lastTime = time;
      setDashOffset((prev) => (prev - speed * deltaTime) % 24);
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current!);
  }, []);

  const components = [
    { 
      id: 'station', label: 'Control Station', icon: <Monitor size={24} />, x: 80, y: 200, color: '#3b82f6', 
      desc: "L'interface d'administration (UI) où les opérateurs définissent les configurations globales de manière visuelle (Low-Code). Les changements sont générés en JSON et poussés vers un dépôt Git.", phase: "Configuration Source" 
    },
    { 
      id: 'git', label: 'Git Repository', icon: <GitBranch size={24} />, x: 250, y: 200, color: '#22c55e', 
      desc: "La source de vérité unique (Single Source of Truth). Chaque modification est versionnée ici, offrant une traçabilité complète (audit trail) et des capacités de rollback instantanées.", phase: "Version Control" 
    },
    { 
      id: 'operator', label: 'Meecrogate Operator', icon: <Repeat2 size={24} />, x: 440, y: 200, color: '#eab308', 
      desc: "Un contrôleur Kubernetes autonome. Il surveille le dépôt Git, détecte les différences (drift) avec l'état du cluster, et télécharge les nouvelles configurations de manière sécurisée (Zero Trust).", phase: "Sync & Reconcile" 
    },
    { 
      id: 'config', label: 'ConfigMap', icon: <FileJson size={24} />, x: 600, y: 200, color: '#a855f7', 
      desc: "L'objet Kubernetes natif (ConfigMap). Il stocke les paramètres synchronisés dans un format dynamique virtuellement monté à l'intérieur des conteneurs.", phase: "In-Cluster Config" 
    },
    { 
      id: 'pod1', label: 'Gateway', icon: <Shield size={24} />, x: 750, y: 100, color: '#8b5cf6', 
      desc: "La passerelle API. Elle détecte la mise à jour du ConfigMap et recharge sa logique de routage en mémoire (Hot Reload) avec Zéro Seconde de coupure.", phase: "Runtime Deployment" 
    },
    { 
      id: 'pod2', label: 'ID Server', icon: <Fingerprint size={24} />, x: 750, y: 200, color: '#8b5cf6', 
      desc: "Le serveur d'identité. Il gère les jetons d'authentification et met à jour ses politiques de sécurité en temps réel grâce au flux GitOps.", phase: "Runtime Deployment" 
    },
    { 
      id: 'pod3', label: 'Orchestrator', icon: <Network size={24} />, x: 750, y: 300, color: '#8b5cf6', 
      desc: "L'orchestrateur de services. Il coordonne les microservices internes selon la dernière topologie définie, le tout mis à jour à chaud.", phase: "Runtime Deployment" 
    }
  ];

  const links = [
    { id: 'l1', path: 'M80,200 L250,200' },
    { id: 'l2', path: 'M250,200 L440,200' },
    { id: 'l3', path: 'M440,200 L600,200' },
    { id: 'l4', path: 'M600,200 L600,100 L750,100' },
    { id: 'l5', path: 'M600,200 L750,200' },
    { id: 'l6', path: 'M600,200 L600,300 L750,300' }
  ];

  const selected = components.find(c => c.id === selectedId) || components[0];

  return (
    <div className="flex flex-col border border-slate-700/50 rounded-xl overflow-hidden bg-slate-900/50 shadow-2xl">
      <div className="relative p-2 sm:p-6 overflow-x-auto">
        <svg viewBox="0 0 850 400" className="min-w-[700px] w-full h-auto drop-shadow-lg">
          <g>
            <rect x="360" y="40" width="460" height="320" rx="16" fill="rgba(30, 41, 59, 0.4)" stroke="#475569" strokeWidth="2" strokeDasharray="6,6" />
            <text x="590" y="70" textAnchor="middle" fill="#94a3b8" className="text-sm font-bold tracking-wider font-sans">
              KUBERNETES CLUSTER
            </text>
          </g>
          <g>
            {links.map(link => (
              <g key={link.id}>
                <path d={link.path} stroke="#475569" strokeWidth="3" fill="none" />
                <path d={link.path} stroke="#60a5fa" strokeWidth="3" fill="none" strokeDasharray="6, 18" strokeDashoffset={dashOffset} strokeLinecap="round" />
              </g>
            ))}
          </g>
          <g>
            {components.map(node => {
              const isSelected = selectedId === node.id;
              return (
                <g key={node.id} transform={`translate(${node.x}, ${node.y})`} className="cursor-pointer group" onClick={() => setSelectedId(node.id)}>
                  <circle r={32} fill="#1e293b" stroke={isSelected ? node.color : "#475569"} strokeWidth={isSelected ? 4 : 2} className="transition-all duration-300 group-hover:stroke-slate-300" />
                  <foreignObject x="-12" y="-12" width="24" height="24" className="pointer-events-none">
                    <div style={{ color: isSelected ? '#ffffff' : '#94a3b8' }} className="transition-colors duration-300 flex items-center justify-center h-full">
                      {node.icon}
                    </div>
                  </foreignObject>
                  <text y="48" textAnchor="middle" fill={isSelected ? '#ffffff' : '#cbd5e1'} className="text-[13px] font-medium font-sans pointer-events-none transition-colors duration-300">
                    {node.label}
                  </text>
                </g>
              );
            })}
          </g>
        </svg>
      </div>

      {/* Note interactive ajoutée ici */}
      <div className="flex items-center justify-center gap-2 py-3 bg-slate-800/40 border-t border-slate-700/30 text-slate-400 text-xs sm:text-sm italic">
        <Info size={14} className="text-indigo-400" />
        Cliquer sur un des composants pour en savoir plus.
      </div>

      <div className="bg-slate-800/80 p-6 sm:p-8 border-t border-slate-700 backdrop-blur-md transition-all duration-300 text-left">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
          <div className="p-3 rounded-lg flex items-center justify-center shadow-inner shrink-0 w-fit" style={{ backgroundColor: `${selected.color}20`, color: selected.color }}>
            {selected.icon}
          </div>
          <h3 className="text-2xl text-white font-semibold m-0 text-left">{selected.label}</h3>
          <span className="sm:ml-auto w-fit text-xs font-bold px-3 py-1.5 bg-slate-900 rounded-full text-indigo-300 uppercase tracking-wider border border-indigo-500/30 shadow-sm">
            {selected.phase}
          </span>
        </div>
        <p className="text-slate-300 leading-relaxed text-base sm:text-lg text-left m-0">
          {selected.desc}
        </p>
      </div>
    </div>
  );
};

// Architecture Points et Composant Architecture
const SHARED_ABSTRACT_IMAGE = "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&h=300&fit=crop&crop=center";

const architecturePoints = [
  {
    icon: <Cloud className="w-6 h-6 text-indigo-500" />,
    title: "100% Stateless",
    description: "Aucun stockage local, scalabilité horizontale native",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=center",
    benefits: ["Scalabilité illimitée", "Haute disponibilité", "Déploiement simplifié", "Coûts optimisés"]
  },
  {
    icon: <Settings className="w-6 h-6 text-amber-500" />,
    title: "Configuration-driven",
    description: "Logique métier via fichiers JSON ou interface graphique",
    image: SHARED_ABSTRACT_IMAGE,
    benefits: ["Zéro code", "Versioning complet via Git", "Rollback instantané", "Collaboration facilitée"]
  },
  {
    icon: <Database className="w-6 h-6 text-indigo-500" />,
    title: "Interopérabilité native",
    description: "REST, WebSocket, Kafka, JDBC",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop&crop=center",
    benefits: ["Connectivité universelle", "Temps réel", "Event-driven", "Accès direct DB"]
  },
  {
    icon: <Monitor className="w-6 h-6 text-amber-500" />,
    title: "Monitoring centralisé",
    description: "Logs, métriques et traces intégrés",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop&crop=center",
    benefits: ["Visibilité complète", "Alertes proactives", "Debugging facilité", "Conformité d'audit"]
  }
];

const Architecture = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-slate-900 min-h-screen">
      <div className="text-center mb-16">
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-5xl sm:text-6xl font-extrabold text-white mb-3 tracking-tight">Architecture technique</h2>
          <div className="w-16 h-1 bg-indigo-500 rounded-sm"></div>
        </div>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">Cloud-native par design, compatible Kubernetes et VM traditionnelles</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {architecturePoints.map((point, index) => <ArchitectureCard key={index} point={point} />)}
      </div>

      <Card className="bg-slate-800/70 border-slate-700/30 backdrop-blur-sm max-w-5xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-white mb-4">Déploiement flexible</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="flex flex-col sm:flex-row justify-around gap-8 text-slate-300 mb-6">
            <div className="flex flex-col items-center gap-1"><h4 className="font-semibold text-indigo-400 mb-2">Cloud-Native</h4><p className="text-sm">Kubernetes, containers, auto-scaling</p></div>
            <div className="flex flex-col items-center gap-1"><h4 className="font-semibold text-amber-400 mb-2">Hybride</h4><p className="text-sm">Cloud public + datacenter interne</p></div>
            <div className="flex flex-col items-center gap-1"><h4 className="font-semibold text-indigo-400 mb-2">On-Premise</h4><p className="text-sm">Machines virtuelles traditionnelles</p></div>
          </div>
          <GitOpsMeecrogateCycle />
        </CardContent>
      </Card>
    </div>
  );
};

export default Architecture;
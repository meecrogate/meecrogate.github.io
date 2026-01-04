import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  FileJson, 
  Shield, 
  Fingerprint, 
  Layers, 
  Zap, 
  Settings, 
  BarChart3, 
  Users, 
  Lock
} from "lucide-react";
import controlStationHero from "@/assets/control-station-hero.jpg";

const ControlStation = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Catalogue d'APIs",
      description: "Centralisez et documentez l'ensemble de vos APIs dans un catalogue unique et consultable.",
      details: ["Documentation automatique", "Versioning intégré", "Recherche avancée", "Tags et catégories"]
    },
    {
      icon: BarChart3,
      title: "Monitoring en temps réel",
      description: "Supervisez les performances et la santé de vos APIs avec des tableaux de bord dynamiques.",
      details: ["Métriques de latence", "Taux d'erreurs", "Volume de requêtes", "Alertes configurables"]
    },
    {
      icon: Users,
      title: "Gestion des accès",
      description: "Contrôlez finement qui peut accéder à quelles APIs avec un système de rôles avancé.",
      details: ["Rôles personnalisés", "Quotas par utilisateur", "Tokens API", "Audit des accès"]
    },
    {
      icon: Lock,
      title: "Politiques de sécurité",
      description: "Définissez et appliquez des règles de sécurité cohérentes sur l'ensemble de vos APIs.",
      details: ["Rate limiting", "IP whitelisting", "OAuth2/OIDC", "Validation des entrées"]
    }
  ];

  const templates = [
    {
      icon: Shield,
      title: "API Gateway",
      description: "Générez des configurations JSON pour exposer, sécuriser et monitorer vos APIs.",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      href: "/components/api-gateway"
    },
    {
      icon: Fingerprint,
      title: "Serveur d'Identité",
      description: "Créez des configurations pour l'authentification OAuth2, OIDC et la gestion des tokens.",
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/30",
      href: "/components/identity-server"
    },
    {
      icon: Layers,
      title: "Orchestrateur",
      description: "Configurez des workflows d'orchestration pour chaîner vos services de manière intelligente.",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      href: "/components/orchestrator"
    },
    {
      icon: Zap,
      title: "Process Executor",
      description: "Générez des configurations BPMN pour automatiser vos processus métiers.",
      color: "text-amber-400",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/30",
      href: "/components/process-executor"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={controlStationHero} 
              alt="Control Station Dashboard"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/80 to-slate-900" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-[#FFB300]/10 border border-[#FFB300]/30 rounded-full px-4 py-2 mb-6">
                <Settings className="w-5 h-5 text-[#FFB300]" />
                <span className="text-[#FFB300] font-medium">Interface d'Administration</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Le Control Station Central
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Gérez, configurez et surveillez l'intégralité de votre plateforme Meecrogate 
                depuis une interface graphique unique et intuitive.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/demo">
                  <Button size="lg" className="bg-[#FFB300] text-gray-900 hover:bg-[#FFB300]/90 font-semibold px-8">
                    Demander une démo
                  </Button>
                </Link>
                <Link to="/architecture">
                  <Button size="lg" className="bg-[#007AFF] text-white hover:bg-[#007AFF]/90">
                    Voir l'architecture
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Fonctionnalités de gestion
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Un ensemble complet d'outils pour administrer votre écosystème d'APIs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all">
                    <CardHeader>
                      <div className="w-12 h-12 bg-[#007AFF]/10 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-[#007AFF]" />
                      </div>
                      <CardTitle className="text-white text-lg">{feature.title}</CardTitle>
                      <CardDescription className="text-gray-400">{feature.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {feature.details.map((detail, i) => (
                          <li key={i} className="text-sm text-gray-500 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#FFB300] rounded-full" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* JSON Templates Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gray-800 rounded-full px-4 py-2 mb-6">
                <FileJson className="w-5 h-5 text-[#007AFF]" />
                <span className="text-gray-300 font-medium">Générateur de configurations</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Templates JSON pour vos composants
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Générez automatiquement les configurations JSON pour chaque composant Meecrogate 
                grâce à des templates prédéfinis et personnalisables.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {templates.map((template, index) => {
                const Icon = template.icon;
                return (
                  <Link to={template.href} key={index}>
                    <Card 
                      className={`${template.bgColor} ${template.borderColor} border-2 hover:scale-[1.02] transition-all cursor-pointer h-full`}
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-4">
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gray-900/50`}>
                              <Icon className={`w-7 h-7 ${template.color}`} />
                            </div>
                            <div>
                              <CardTitle className="text-white text-xl">{template.title}</CardTitle>
                              <CardDescription className="text-gray-400 mt-1">
                                {template.description}
                              </CardDescription>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Prêt à centraliser la gestion de vos APIs ?
              </h2>
              <p className="text-gray-400 mb-8">
                Découvrez comment le Control Station peut transformer votre gouvernance API 
                avec une démonstration personnalisée.
              </p>
              <Link to="/demo">
                <Button size="lg" className="bg-[#FFB300] text-gray-900 hover:bg-[#FFB300]/90 font-semibold px-8">
                  Planifier une démo
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ControlStation;

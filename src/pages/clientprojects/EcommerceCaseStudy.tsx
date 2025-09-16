import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, CheckCircle, TrendingUp, Zap, Package, BarChart3 } from "lucide-react";

const EcommerceCaseStudy = () => {
  const metrics = [
    {
      icon: TrendingUp,
      title: "45% d'amélioration",
      subtitle: "Efficacité opérationnelle",
      description: "Optimisation drastique des processus de gestion des commandes et du stock"
    },
    {
      icon: Package,
      title: "2M commandes/mois",
      subtitle: "Capacité de traitement",
      description: "Gestion fluide d'un volume élevé de commandes en période de pointe"
    },
    {
      icon: Zap,
      title: "Synchronisation real-time",
      subtitle: "Gestion du stock",
      description: "Mise à jour instantanée des niveaux de stock sur tous les canaux"
    }
  ];

  const challenges = [
    "Gestion des commandes dispersée sur plusieurs systèmes",
    "Synchronisation stock complexe entre canaux",
    "Manque de visibilité sur les processus métier",
    "Délais de traitement des commandes trop élevés"
  ];

  const solutions = [
    "Unification des systèmes de gestion des commandes",
    "Synchronisation temps réel du stock multicanal",
    "Dashboard centralisé de pilotage opérationnel",
    "Automatisation des workflows de traitement"
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <ShoppingCart className="w-16 h-16 text-green-400 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Plateforme e-commerce unifiée
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Comment RetailTech Solutions a révolutionné sa gestion des commandes et synchronisation stock 
                avec Meecrogate, augmentant l'efficacité opérationnelle de 45%.
              </p>
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 max-w-2xl mx-auto">
                <p className="text-lg text-gray-200 italic">
                  "L'implémentation de Meecrogate a révolutionné notre gestion des commandes et synchronisation stock, 
                  augmentant notre efficacité opérationnelle de 45%."
                </p>
                <p className="text-[#FFB300] font-semibold mt-4">
                  CTO, RetailTech Solutions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Impact business</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {metrics.map((metric, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700/50 text-center">
                  <CardHeader>
                    <metric.icon className="w-12 h-12 text-green-400 mx-auto mb-4" />
                    <CardTitle className="text-2xl text-white">{metric.title}</CardTitle>
                    <CardDescription className="text-[#FFB300] font-semibold">
                      {metric.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{metric.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Challenge & Solution Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Challenges */}
              <Card className="bg-slate-800/30 border-slate-700/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Problématiques initiales</CardTitle>
                  <CardDescription className="text-gray-300">
                    Les défis du commerce électronique moderne
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-300">{challenge}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Solutions */}
              <Card className="bg-slate-800/30 border-slate-700/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Solutions Meecrogate</CardTitle>
                  <CardDescription className="text-gray-300">
                    Transformation de l'écosystème e-commerce
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {solutions.map((solution, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">{solution}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Technical Implementation */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-3xl text-white">Architecture technique</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Hub d'orchestration central</h3>
                  <p className="text-gray-300 mb-4">
                    Meecrogate centralise les flux entre le site web, l'application mobile, 
                    les marketplaces et les systèmes back-office pour une vue unifiée.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Synchronisation temps réel</h3>
                  <p className="text-gray-300 mb-4">
                    Mise en place d'événements temps réel pour la synchronisation instantanée 
                    des stocks, prix et promotions sur tous les canaux de vente.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Workflows automatisés</h3>
                  <p className="text-gray-300">
                    Automatisation complète du parcours commande : de la validation du paiement 
                    à la génération des étiquettes d'expédition et suivi client.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default EcommerceCaseStudy;
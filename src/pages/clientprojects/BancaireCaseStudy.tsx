import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, CheckCircle, TrendingUp, Shield, Clock, Users } from "lucide-react";

const BancaireCaseStudy = () => {
  const metrics = [
    {
      icon: TrendingUp,
      title: "60% de réduction",
      subtitle: "Temps de traitement",
      description: "Les transactions sont désormais traitées 60% plus rapidement grâce à l'optimisation des APIs"
    },
    {
      icon: Shield,
      title: "99.9% de disponibilité",
      subtitle: "Uptime garantie", 
      description: "Architecture robuste assurant une disponibilité maximale pour les services critiques"
    },
    {
      icon: Clock,
      title: "500k transactions/jour",
      subtitle: "Capacité de traitement",
      description: "Gestion en temps réel d'un volume élevé de transactions bancaires"
    }
  ];

  const challenges = [
    "Architecture API legacy fragmentée",
    "Temps de traitement des transactions élevés",
    "Défis de sécurité et de conformité bancaire",
    "Besoin de haute disponibilité 24/7"
  ];

  const solutions = [
    "Modernisation complète de l'architecture API",
    "Optimisation des flux de données",
    "Implémentation de protocoles de sécurité renforcés",
    "Architecture haute disponibilité avec failover automatique"
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Building2 className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Solutions d'intégration bancaire
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Découvrez comment Meecrogate a transformé l'architecture API d'une banque centrale, 
                réduisant les temps de traitement de 60% tout en améliorant la sécurité.
              </p>
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 max-w-2xl mx-auto">
                <p className="text-lg text-gray-200 italic">
                  "Meecrogate a permis la modernisation complète de notre architecture API, 
                  réduisant les temps de traitement de 60% et améliorant la sécurité des transactions."
                </p>
                <p className="text-[#FFB300] font-semibold mt-4">
                  Directeur IT, Banque Centrale
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Résultats obtenus</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {metrics.map((metric, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700/50 text-center">
                  <CardHeader>
                    <metric.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
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
                  <CardTitle className="text-2xl text-white">Défis rencontrés</CardTitle>
                  <CardDescription className="text-gray-300">
                    Les problématiques initiales du projet
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
                  <CardTitle className="text-2xl text-white">Solutions apportées</CardTitle>
                  <CardDescription className="text-gray-300">
                    Comment Meecrogate a résolu ces défis
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

        {/* Implementation Details */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-3xl text-white">Détails de l'implémentation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Architecture modernisée</h3>
                  <p className="text-gray-300 mb-4">
                    Remplacement de l'architecture legacy par une approche API-first basée sur Meecrogate, 
                    permettant une meilleure scalabilité et maintenabilité.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Sécurité renforcée</h3>
                  <p className="text-gray-300 mb-4">
                    Implémentation de protocoles de sécurité bancaire stricts avec authentification multi-facteurs, 
                    chiffrement end-to-end et audit trail complet.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Performance optimisée</h3>
                  <p className="text-gray-300">
                    Optimisation des flux de données et mise en place de cache intelligent pour réduire 
                    significativement les temps de traitement des transactions.
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

export default BancaireCaseStudy;
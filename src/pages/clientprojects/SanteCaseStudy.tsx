import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, CheckCircle, Clock, Shield, Users, Activity } from "lucide-react";

const SanteCaseStudy = () => {
  const metrics = [
    {
      icon: Users,
      title: "Dossier patient unifié",
      subtitle: "Vision 360°",
      description: "Consolidation de toutes les données patient en un point d'accès unique et sécurisé"
    },
    {
      icon: Clock,
      title: "30% de réduction",
      subtitle: "Délais de traitement",
      description: "Amélioration significative des délais de prise en charge et de coordination des soins"
    },
    {
      icon: Activity,
      title: "Télémédecine 24/7",
      subtitle: "Disponibilité continue",
      description: "Plateforme de télémédecine intégrée pour un accès aux soins permanent"
    }
  ];

  const challenges = [
    "Systèmes d'information cloisonnés entre services",
    "Dossiers patients fragmentés sur multiple plateformes",
    "Coordination complexe entre équipes médicales",
    "Délais de traitement et attente trop élevés"
  ];

  const solutions = [
    "Interopérabilité complète des systèmes de santé",
    "Dossier patient numérique unifié et sécurisé",
    "Workflows de coordination des soins optimisés",
    "Télémédecine intégrée avec suivi patient"
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Heart className="w-16 h-16 text-red-400 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Système de santé connecté
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Découvrez comment l'Hôpital Universitaire a créé un écosystème de santé numérique intégré 
                avec Meecrogate, améliorant la coordination des soins et l'expérience patient.
              </p>
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 max-w-2xl mx-auto">
                <p className="text-lg text-gray-200 italic">
                  "Meecrogate nous a aidés à créer un écosystème de santé numérique intégré, 
                  améliorant la coordination des soins et l'expérience patient."
                </p>
                <p className="text-[#FFB300] font-semibold mt-4">
                  Directeur Innovation, Hôpital Universitaire
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Bénéfices patients</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {metrics.map((metric, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700/50 text-center">
                  <CardHeader>
                    <metric.icon className="w-12 h-12 text-red-400 mx-auto mb-4" />
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
                  <CardTitle className="text-2xl text-white">Défis du système de santé</CardTitle>
                  <CardDescription className="text-gray-300">
                    Les enjeux de la transformation numérique en santé
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
                  <CardTitle className="text-2xl text-white">Transformation digitale</CardTitle>
                  <CardDescription className="text-gray-300">
                    Solutions Meecrogate pour la santé connectée
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
                <CardTitle className="text-3xl text-white">Innovation en santé numérique</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Interopérabilité des données</h3>
                  <p className="text-gray-300 mb-4">
                    Connexion sécurisée de tous les systèmes : imagerie médicale, laboratoires, 
                    dossiers électroniques et équipements connectés pour une vue patient complète.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Sécurité et conformité RGPD</h3>
                  <p className="text-gray-300 mb-4">
                    Architecture sécurisée respectant les normes de confidentialité médicale 
                    avec chiffrement end-to-end et traçabilité complète des accès.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Parcours patient digitalisé</h3>
                  <p className="text-gray-300">
                    De la prise de rendez-vous à la télésurveillance post-hospitalisation, 
                    chaque étape du parcours patient est optimisée et connectée.
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

export default SanteCaseStudy;
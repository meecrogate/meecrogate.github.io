import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Building2, ShoppingCart, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const ClientProjects = () => {
  const projects = [
    {
      id: "bancaire",
      title: "Secteur bancaire",
      description: "Solutions d'intégration pour les services financiers",
      icon: <Building2 className="w-12 h-12 text-blue-400" />,
      cases: ["API Banking", "Paiements instantanés", "Conformité réglementaire"],
      link: "/projets-clients/bancaire"
    },
    {
      id: "ecommerce",
      title: "E-commerce",
      description: "Plateformes de commerce électronique intégrées",
      icon: <ShoppingCart className="w-12 h-12 text-green-400" />,
      cases: ["Gestion commandes", "Synchronisation stock", "Passerelles paiement"],
      link: "/projets-clients/ecommerce"
    },
    {
      id: "sante",
      title: "Santé",
      description: "Systèmes d'information hospitaliers connectés",
      icon: <Heart className="w-12 h-12 text-red-400" />,
      cases: ["Dossier patient unifié", "Télémédecine", "Dispositifs IoT"],
      link: "/projets-clients/sante"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Projets <span className="text-[#FFB300]">clients</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Découvrez comment nos clients utilisent Meecrogate pour transformer 
              leur architecture d'APIs et optimiser leurs processus métier.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card key={project.id} className="bg-slate-800 border-slate-700 hover:border-blue-500 transition-all duration-300 group">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      {project.icon}
                    </div>
                    <CardTitle className="text-white text-2xl mb-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.cases.map((useCase, index) => (
                        <Badge key={index} variant="outline" className="text-gray-300 border-gray-600">
                          {useCase}
                        </Badge>
                      ))}
                    </div>
                    <Link 
                      to={project.link}
                      className="flex items-center text-blue-400 hover:text-blue-300 transition-colors group-hover:translate-x-1 transform duration-300"
                    >
                      Voir les détails
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-[#FFB300] mb-2">50+</div>
                <div className="text-gray-300">Projets réalisés</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#FFB300] mb-2">95%</div>
                <div className="text-gray-300">Taux de satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#FFB300] mb-2">6 mois</div>
                <div className="text-gray-300">Délai moyen de déploiement</div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ClientProjects;
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Building2, ShoppingCart, Heart, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const ClientProjects = () => {
  const [visibleProjects, setVisibleProjects] = useState(new Set<number>([0])); // Show first project by default
  
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleProjects(prev => new Set([...Array.from(prev), index]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -5% 0px'
      }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const setProjectRef = (element: HTMLDivElement | null, index: number) => {
    if (element && observerRef.current) {
      element.setAttribute('data-index', index.toString());
      observerRef.current.observe(element);
    }
  };

  const projects = [
    {
      id: "bancaire",
      title: "Solutions d'intégration bancaire",
      description: "Meecrogate a permis la modernisation complète de notre architecture API, réduisant les temps de traitement de 60% et améliorant la sécurité des transactions.",
      author: "Directeur IT",
      company: "Banque Centrale",
      icon: <Building2 className="w-14 h-14 text-blue-400" />,
      metrics: [
        { value: "60%", label: "Réduction temps de traitement" },
        { value: "99.9%", label: "Disponibilité" },
        { value: "500k", label: "Transactions/jour" }
      ],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=610&h=375",
      link: "/projets-clients/bancaire"
    },
    {
      id: "ecommerce",
      title: "Plateforme e-commerce unifiée",
      description: "L'implémentation de Meecrogate a révolutionné notre gestion des commandes et synchronisation stock, augmentant notre efficacité opérationnelle de 45%.",
      author: "CTO",
      company: "RetailTech Solutions",
      icon: <ShoppingCart className="w-14 h-14 text-green-400" />,
      metrics: [
        { value: "45%", label: "Amélioration efficacité" },
        { value: "2M", label: "Commandes traitées/mois" },
        { value: "Real-time", label: "Synchronisation stock" }
      ],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=610&h=375",
      link: "/projets-clients/ecommerce"
    },
    {
      id: "sante",
      title: "Système de santé connecté",
      description: "Meecrogate nous a aidés à créer un écosystème de santé numérique intégré, améliorant la coordination des soins et l'expérience patient.",
      author: "Directeur Innovation",
      company: "Hôpital Universitaire",
      icon: <Heart className="w-14 h-14 text-red-400" />,
      metrics: [
        { value: "Unifié", label: "Dossier patient" },
        { value: "30%", label: "Réduction délais" },
        { value: "24/7", label: "Télémédecine" }
      ],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=610&h=375",
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
            <div className="space-y-8">
              {projects.map((project, index) => (
                <div 
                  key={project.id}
                  ref={(el) => setProjectRef(el, index)}
                  className={`transition-all duration-700 ease-out ${
                    visibleProjects.has(index) 
                      ? 'animate-fade-in opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                >
                  <Link 
                    to={project.link}
                    className="block group"
                  >
                    <div className="bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 border border-slate-700/50 hover:border-slate-600 rounded-lg overflow-hidden">
                      <div className="p-0 flex flex-col lg:flex-row justify-between">
                        <div className="flex items-center lg:flex-1">
                          <div className="p-8 lg:p-12">
                            <div className="mb-6">
                              {project.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                              {project.title}
                            </h3>
                            <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                              "{project.description}"
                            </p>
                            <p className="text-[#FFB300] font-semibold mb-6">
                              {project.author}, {project.company}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                              {project.metrics.map((metric, idx) => (
                                <div key={idx} className="flex items-center space-x-3">
                                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                  <div>
                                    <h5 className="text-white font-bold text-lg">{metric.value}</h5>
                                    <p className="text-gray-400 text-sm">{metric.label}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                            <span className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group-hover:translate-x-1 transform duration-300">
                              Lire l'étude de cas
                              <ArrowRight size={16} className="ml-2" />
                            </span>
                          </div>
                        </div>
                        <img 
                          width="610" 
                          height="375" 
                          src={project.image}
                          alt={`${project.title} image`} 
                          className="w-full lg:w-[610px] h-64 lg:h-[375px] object-cover"
                        />
                      </div>
                    </div>
                  </Link>
                </div>
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
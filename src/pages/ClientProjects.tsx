import { useTranslation } from "react-i18next";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { ArrowRight, Building2, ShoppingCart, Heart, CheckCircle, MapPin } from "lucide-react";
import { Link } from "@/i18n/Link";
import { useEffect, useRef, useState } from "react";

const ClientProjects = () => {
  const { t } = useTranslation("clientprojects");
  const [visibleProjects, setVisibleProjects] = useState(new Set<number>());
  
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

  // Illustrations and links live here; the wording is in the `clientprojects` namespace.
  const projects = [
    {
      id: "banking",
      icon: <Building2 className="w-14 h-14 text-blue-400" />,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=610&h=375",
      link: "/projets-clients/bancaire",
    },
    {
      id: "ecommerce",
      icon: <ShoppingCart className="w-14 h-14 text-green-400" />,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=610&h=375",
      link: "/projets-clients/ecommerce",
    },
    {
      id: "health",
      icon: <Heart className="w-14 h-14 text-red-400" />,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=610&h=375",
      link: "/projets-clients/sante",
    },
    {
      id: "paris",
      icon: <MapPin className="w-14 h-14 text-purple-400" />,
      image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&auto=format&fit=crop&w=610&h=375",
      link: "/projets-clients/paris",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Seo title={t("seo.title")} description={t("seo.description")} />
      <Navigation />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-3">
              {t("index.titlePrefix")} <span className="text-[#FFB300]">{t("index.titleHighlight")}</span>
            </h1>
            <div className="w-16 h-1 bg-indigo-500 rounded-sm mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              {t("index.subtitle")}
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
                        : 'opacity-100 translate-y-0'
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
                              {t(`projects.${project.id}.title`)}
                            </h3>
                            <p className="text-gray-300 mb-4 text-lg leading-relaxed">
                              &ldquo;{t(`projects.${project.id}.quote`)}&rdquo;
                            </p>
                            <p className="text-[#FFB300] font-semibold mb-6">
                              {t(`projects.${project.id}.author`)}, {t(`projects.${project.id}.company`)}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                              {(t(`projects.${project.id}.cardMetrics`, { returnObjects: true }) as { value: string; label: string }[]).map((metric, idx) => (
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
                              {t("index.readCaseStudy")}
                              <ArrowRight size={16} className="ml-2" />
                            </span>
                          </div>
                        </div>
                        <img 
                          width="610" 
                          height="375" 
                          src={project.image}
                          alt={t(`projects.${project.id}.title`)} 
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
              {(t("index.stats", { returnObjects: true }) as { value: string; label: string }[]).map((stat) => (
                <div key={stat.label}>
                  <div className="text-4xl font-bold text-[#FFB300] mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ClientProjects;
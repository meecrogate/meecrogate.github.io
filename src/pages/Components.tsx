import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Network, ShieldCheck, Fingerprint, Workflow, Zap, Shield, Component } from "lucide-react";
import componentsHero from "@/assets/components-hero.png";

const ComponentsPage = () => {
  const components = [
    {
      icon: ShieldCheck,
      iconColor: "text-brand-blue",
      title: "API Gateway",
      subtitle: "Sécurisation & Routage",
      description: "Point d'entrée unique pour toutes vos APIs, assurant la sécurité, le routage intelligent et la gestion du trafic.",
      features: [
        "Authentification et autorisation centralisées",
        "Limitation de débit (Rate Limiting)",
        "Transformation des requêtes et réponses",
        "Cache intelligent pour optimiser les performances",
        "Monitoring et analytics en temps réel",
        "Load balancing automatique"
      ],
      benefits: [
        "Sécurité renforcée avec point de contrôle unique",
        "Réduction de la complexité côté client",
        "Amélioration des performances avec mise en cache",
        "Observabilité complète du trafic API"
      ],
      gradient: "from-brand-blue/20 to-brand-blue/30",
      border: "border-brand-blue/30"
    },
    {
      icon: Fingerprint,
      iconColor: "text-brand-orange",
      title: "Serveur d'identité",
      subtitle: "Gestion des accès",
      description: "Solution complète de gestion d'identité et d'accès (IAM) pour sécuriser vos applications et services.",
      features: [
        "Single Sign-On (SSO) multi-applications",
        "Gestion des rôles et permissions (RBAC)",
        "Authentification multi-facteurs (MFA)",
        "Intégration LDAP/Active Directory",
        "Protocoles OAuth 2.0, OIDC, SAML",
        "Gestion du cycle de vie des utilisateurs"
      ],
      benefits: [
        "Expérience utilisateur simplifiée avec SSO",
        "Sécurité renforcée avec MFA",
        "Conformité aux réglementations (RGPD, etc.)",
        "Réduction des coûts de gestion des identités"
      ],
      gradient: "from-brand-orange/20 to-brand-orange/30",
      border: "border-brand-orange/30"
    },
    {
      icon: Network,
      iconColor: "text-gray-400",
      title: "Orchestrateur",
      subtitle: "Synchrone & Asynchrone",
      description: "Moteur d'orchestration intelligent pour coordonner vos services et processus métier complexes.",
      features: [
        "Orchestration de services synchrones et asynchrones",
        "Gestion des patterns Saga pour transactions distribuées",
        "Retry automatique et gestion d'erreurs",
        "Routage conditionnel et parallélisation",
        "Intégration avec message brokers (RabbitMQ, Kafka)",
        "Dashboard de monitoring des flux"
      ],
      benefits: [
        "Simplification des architectures microservices",
        "Résilience accrue avec gestion d'erreurs automatique",
        "Visibilité complète sur les flux de données",
        "Scalabilité horizontale native"
      ],
      gradient: "from-gray-500/20 to-gray-500/30",
      border: "border-gray-500/30"
    },
    {
      icon: Zap,
      iconColor: "text-gray-300",
      title: "Process Executor",
      subtitle: "Process Automatisation",
      description: "Moteur d'exécution de processus pour automatiser vos workflows.",
      features: [
        "Tasks automatiques et humaines",
        "Gestion des deadlines et escalations",
        "Intégration avec systèmes externes",
        "Historisation complète des exécutions"
      ],
      benefits: [
        "Automatisation des processus métier complexes",
        "Réduction des erreurs humaines",
        "Amélioration de la traçabilité",
        "Optimisation continue des workflows"
      ],
      gradient: "from-gray-800/50 to-gray-800/60",
      border: "border-gray-600"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-brand-blue">
              Composants Meecrogate
            </h1>
            <p className="text-xl text-brand-light/80 max-w-3xl mx-auto mb-12">
              Découvrez en détail chaque composant de notre plateforme d'intégration et leurs fonctionnalités avancées
            </p>

            {/* Image with arrows to components */}
            <div className="relative max-w-4xl mx-auto">
              {/* Central image */}
              <div className="max-w-2xl mx-auto relative z-10">
                <img
                  src={componentsHero}
                  alt="Plateforme Meecrogate - API Management et déploiement hybride"
                  className="w-full h-auto rounded-2xl shadow-2xl border border-brand-light/10"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </div>

              {/* Component icons with arrows */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
                {/* API Gateway - Blue arrow */}
                <div className="flex flex-col items-center">
                  <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" fill="none">
                    <path
                      d="M32 0 L32 40 M24 32 L32 40 L40 32"
                      stroke="#007AFF"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="bg-brand-blue/20 w-16 h-16 rounded-2xl flex items-center justify-center">
                    <ShieldCheck className="w-8 h-8 text-brand-blue" />
                  </div>
                  <span className="text-brand-light mt-2 text-sm font-medium">API Gateway</span>
                </div>

                {/* Identity Server - Yellow arrow */}
                <div className="flex flex-col items-center">
                  <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" fill="none">
                    <path
                      d="M32 0 L32 40 M24 32 L32 40 L40 32"
                      stroke="#FFB300"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="bg-brand-orange/20 w-16 h-16 rounded-2xl flex items-center justify-center">
                    <Fingerprint className="w-8 h-8 text-brand-orange" />
                  </div>
                  <span className="text-brand-light mt-2 text-sm font-medium">Serveur d'identité</span>
                </div>

                {/* Orchestrator - Gray arrow */}
                <div className="flex flex-col items-center">
                  <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" fill="none">
                    <path
                      d="M32 0 L32 40 M24 32 L32 40 L40 32"
                      stroke="#6B7280"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="bg-gray-500/20 w-16 h-16 rounded-2xl flex items-center justify-center border border-gray-500/30">
                    <Network className="w-8 h-8 text-gray-400" />
                  </div>
                  <span className="text-brand-light mt-2 text-sm font-medium">Orchestrateur</span>
                </div>
                {/* Process Executor - Black arrow */}
                <div className="flex flex-col items-center">
                  <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" fill="none">
                    <path
                      d="M32 0 L32 40 M24 32 L32 40 L40 32"
                      stroke="#1F2937"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="bg-gray-800/50 w-16 h-16 rounded-2xl flex items-center justify-center border border-gray-600">
                    <Zap className="w-8 h-8 text-gray-300" />
                  </div>
                  <span className="text-brand-light mt-2 text-sm font-medium">Process Executor</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Components Details */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="space-y-20">
              {components.map((component, index) => (
                <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className={`bg-gradient-to-br ${component.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mb-6`}>
                      <component.icon className={`w-10 h-10 ${component.iconColor}`} />
                    </div>
                    <h2 className="text-3xl font-bold text-brand-light mb-2">
                      {component.title}
                    </h2>
                    <p className="text-brand-orange text-lg mb-6">
                      {component.subtitle}
                    </p>
                    <p className="text-brand-light/80 text-lg leading-relaxed">
                      {component.description}
                    </p>
                  </div>

                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="bg-gradient-to-br from-brand-dark/60 to-brand-dark/40 backdrop-blur-md rounded-2xl p-8 border border-brand-light/10">
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-brand-light mb-4 flex items-center">
                          <Workflow className="w-5 h-5 mr-2 text-brand-blue" />
                          Fonctionnalités clés
                        </h3>
                        <ul className="space-y-3">
                          {component.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-2 h-2 bg-brand-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-brand-light/80">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-brand-light mb-4 flex items-center">
                          <Shield className="w-5 h-5 mr-2 text-brand-orange" />
                          Bénéfices métier
                        </h3>
                        <ul className="space-y-3">
                          {component.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-2 h-2 bg-brand-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-brand-light/80">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 border-t border-brand-light/10">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-brand-light mb-6">
              Prêt à découvrir Meecrogate en action ?
            </h2>
            <p className="text-brand-light/80 text-lg mb-8">
              Demandez une démonstration personnalisée pour voir comment ces composants peuvent transformer votre architecture
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/demo"
                className="bg-brand-orange text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Demander une démo
              </Link>
              <Link
                to="/architecture"
                className="border border-brand-light/20 text-brand-light px-8 py-4 rounded-lg font-semibold hover:bg-brand-light/5 transition-all duration-300"
              >
                Voir l'architecture
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ComponentsPage;
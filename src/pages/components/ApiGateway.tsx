import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Shield, Zap, BarChart3, Settings, Lock, Globe } from "lucide-react";
import apiGatewayIcon from "@/assets/api-gateway-icon.png";

const ApiGatewayPage = () => {
  return (
    <div className="min-h-screen bg-brand-dark">
      <Navigation />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-gradient-to-br from-brand-blue/20 to-brand-blue/30 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                  <img 
                    src={apiGatewayIcon} 
                    alt="API Gateway" 
                    className="w-12 h-12 bg-white/10 rounded-lg p-2" 
                  />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-brand-blue to-brand-orange bg-clip-text text-transparent">
                    API Gateway
                  </span>
                </h1>
                <p className="text-brand-orange text-xl mb-6">
                  Sécurisation & Routage Intelligent
                </p>
                <p className="text-brand-light/80 text-lg leading-relaxed mb-8">
                  Point d'entrée unique et sécurisé pour toutes vos APIs. Notre API Gateway offre une gestion centralisée 
                  du trafic, une sécurité renforcée et des performances optimisées pour vos architectures microservices.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/demo"
                    className="bg-gradient-to-r from-brand-blue to-brand-orange text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Demander une démo
                  </a>
                  <a
                    href="/components"
                    className="border border-brand-light/20 text-brand-light px-8 py-4 rounded-lg font-semibold hover:bg-brand-light/5 transition-all duration-300"
                  >
                    Tous les composants
                  </a>
                </div>
              </div>
              <div className="bg-gradient-to-br from-brand-dark/60 to-brand-dark/40 backdrop-blur-md rounded-2xl p-8 border border-brand-light/10">
                <h2 className="text-2xl font-bold text-brand-light mb-6">Avantages clés</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 text-brand-blue mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-brand-light">Sécurité renforcée</h3>
                      <p className="text-brand-light/70 text-sm">Point de contrôle unique pour authentification et autorisation</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Zap className="w-6 h-6 text-brand-orange mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-brand-light">Performances optimales</h3>
                      <p className="text-brand-light/70 text-sm">Cache intelligent et load balancing automatique</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <BarChart3 className="w-6 h-6 text-brand-blue mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-brand-light">Observabilité complète</h3>
                      <p className="text-brand-light/70 text-sm">Monitoring et analytics en temps réel</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 border-t border-brand-light/10">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-brand-light text-center mb-16">
              Fonctionnalités avancées
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-brand-dark/60 to-brand-dark/40 backdrop-blur-md rounded-2xl p-6 border border-brand-light/10">
                <Lock className="w-8 h-8 text-brand-blue mb-4" />
                <h3 className="text-xl font-bold text-brand-light mb-3">Authentification centralisée</h3>
                <p className="text-brand-light/80">
                  Gestion unifiée de l'authentification avec support OAuth 2.0, JWT et intégration SSO.
                </p>
              </div>
              <div className="bg-gradient-to-br from-brand-dark/60 to-brand-dark/40 backdrop-blur-md rounded-2xl p-6 border border-brand-light/10">
                <Settings className="w-8 h-8 text-brand-orange mb-4" />
                <h3 className="text-xl font-bold text-brand-light mb-3">Rate Limiting</h3>
                <p className="text-brand-light/80">
                  Protection contre les abus avec limitation de débit configurable par client ou endpoint.
                </p>
              </div>
              <div className="bg-gradient-to-br from-brand-dark/60 to-brand-dark/40 backdrop-blur-md rounded-2xl p-6 border border-brand-light/10">
                <Globe className="w-8 h-8 text-brand-blue mb-4" />
                <h3 className="text-xl font-bold text-brand-light mb-3">Routage intelligent</h3>
                <p className="text-brand-light/80">
                  Routage basé sur le contenu, la géolocalisation ou les règles métier personnalisées.
                </p>
              </div>
              <div className="bg-gradient-to-br from-brand-dark/60 to-brand-dark/40 backdrop-blur-md rounded-2xl p-6 border border-brand-light/10">
                <Zap className="w-8 h-8 text-brand-orange mb-4" />
                <h3 className="text-xl font-bold text-brand-light mb-3">Transformation de données</h3>
                <p className="text-brand-light/80">
                  Modification des requêtes et réponses à la volée pour adapter les formats de données.
                </p>
              </div>
              <div className="bg-gradient-to-br from-brand-dark/60 to-brand-dark/40 backdrop-blur-md rounded-2xl p-6 border border-brand-light/10">
                <BarChart3 className="w-8 h-8 text-brand-blue mb-4" />
                <h3 className="text-xl font-bold text-brand-light mb-3">Analytics avancées</h3>
                <p className="text-brand-light/80">
                  Tableaux de bord détaillés avec métriques de performance et d'utilisation.
                </p>
              </div>
              <div className="bg-gradient-to-br from-brand-dark/60 to-brand-dark/40 backdrop-blur-md rounded-2xl p-6 border border-brand-light/10">
                <Shield className="w-8 h-8 text-brand-orange mb-4" />
                <h3 className="text-xl font-bold text-brand-light mb-3">Cache multi-niveaux</h3>
                <p className="text-brand-light/80">
                  Système de cache intelligent pour optimiser les performances et réduire la latence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-6 border-t border-brand-light/10">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-brand-light text-center mb-16">
              Cas d'usage typiques
            </h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-brand-dark/60 to-brand-dark/40 backdrop-blur-md rounded-2xl p-6 border border-brand-light/10">
                  <h3 className="text-xl font-bold text-brand-light mb-3">Architecture microservices</h3>
                  <p className="text-brand-light/80">
                    Simplifiez l'accès aux microservices avec un point d'entrée unique et une gestion centralisée de la sécurité.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-brand-dark/60 to-brand-dark/40 backdrop-blur-md rounded-2xl p-6 border border-brand-light/10">
                  <h3 className="text-xl font-bold text-brand-light mb-3">APIs partenaires</h3>
                  <p className="text-brand-light/80">
                    Exposez vos APIs à des partenaires externes avec contrôle d'accès granulaire et facturation.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-brand-dark/60 to-brand-dark/40 backdrop-blur-md rounded-2xl p-6 border border-brand-light/10">
                  <h3 className="text-xl font-bold text-brand-light mb-3">Applications mobiles</h3>
                  <p className="text-brand-light/80">
                    Optimisez les échanges mobile-backend avec compression, cache et adaptation des formats.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-brand-dark/60 to-brand-dark/40 backdrop-blur-md rounded-2xl p-6 border border-brand-light/10">
                  <h3 className="text-xl font-bold text-brand-light mb-3">Intégration legacy</h3>
                  <p className="text-brand-light/80">
                    Modernisez l'accès aux systèmes legacy en exposant des APIs REST modernes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ApiGatewayPage;
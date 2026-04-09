import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Layers, Workflow, RefreshCw, GitBranch, MessageSquare, Activity } from "lucide-react";

const OrchestratorPage = () => {
  return (
    <div className="min-h-screen bg-slate-900 overflow-x-hidden">
      <Navigation />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-brand-blue/20 w-24 h-24 rounded-2xl flex items-center justify-center mb-6">
                  <Workflow className="w-14 h-14 text-brand-blue" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="text-brand-blue">
                    Orchestrateur
                  </span>
                </h1>
                <p className="text-brand-orange text-xl mb-6">
                  Synchrone & Asynchrone
                </p>
                <p className="text-brand-light/80 text-lg leading-relaxed mb-8">
                  Moteur d'orchestration intelligent qui coordonne vos services et processus métier complexes.
                  Gérez les flux synchrones et asynchrones avec une résilience et une observabilité maximales.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/demo"
                    className="bg-brand-orange text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Demander une démo
                  </Link>
                  <Link
                    to="/components"
                    className="border border-brand-light/20 text-brand-light px-8 py-4 rounded-lg font-semibold hover:bg-brand-light/5 transition-all duration-300"
                  >
                    Tous les composants
                  </Link>
                </div>
              </div>
              <div className="bg-brand-dark/50 backdrop-blur-md rounded-2xl p-8 border border-brand-light/10">
                <h2 className="text-2xl font-bold text-brand-light mb-6">Capacités principales</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Workflow className="w-6 h-6 text-brand-blue mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-brand-light">Orchestration intelligente</h3>
                      <p className="text-brand-light/70 text-sm">Coordination automatique des microservices complexes</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <RefreshCw className="w-6 h-6 text-brand-orange mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-brand-light">Résilience native</h3>
                      <p className="text-brand-light/70 text-sm">Gestion automatique des erreurs et retry intelligents</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Activity className="w-6 h-6 text-brand-blue mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-brand-light">Observabilité totale</h3>
                      <p className="text-brand-light/70 text-sm">Traçabilité complète des flux de données</p>
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
              <div className="bg-brand-dark/50 backdrop-blur-md rounded-2xl p-6 border border-brand-light/10">
                <Workflow className="w-8 h-8 text-brand-blue mb-4" />
                <h3 className="text-xl font-bold text-brand-light mb-3">Patterns Saga</h3>
                <p className="text-brand-light/80">
                  Gestion des transactions distribuées avec compensation automatique en cas d'échec.
                </p>
              </div>
              <div className="bg-brand-dark/50 backdrop-blur-md rounded-2xl p-6 border border-brand-light/10">
                <GitBranch className="w-8 h-8 text-brand-orange mb-4" />
                <h3 className="text-xl font-bold text-brand-light mb-3">Routage conditionnel</h3>
                <p className="text-brand-light/80">
                  Logique de routage sophistiquée basée sur le contenu et les règles métier.
                </p>
              </div>
              <div className="bg-brand-dark/50 backdrop-blur-md rounded-2xl p-6 border border-brand-light/10">
                <RefreshCw className="w-8 h-8 text-brand-blue mb-4" />
                <h3 className="text-xl font-bold text-brand-light mb-3">Retry intelligent</h3>
                <p className="text-brand-light/80">
                  Stratégies de retry configurables avec backoff exponentiel et circuit breaker.
                </p>
              </div>
              <div className="bg-brand-dark/50 backdrop-blur-md rounded-2xl p-6 border border-brand-light/10">
                <MessageSquare className="w-8 h-8 text-brand-orange mb-4" />
                <h3 className="text-xl font-bold text-brand-light mb-3">Message Brokers</h3>
                <p className="text-brand-light/80">
                  Intégration native avec RabbitMQ, Apache Kafka et Azure Service Bus.
                </p>
              </div>
              <div className="bg-brand-dark/50 backdrop-blur-md rounded-2xl p-6 border border-brand-light/10">
                <Activity className="w-8 h-8 text-brand-blue mb-4" />
                <h3 className="text-xl font-bold text-brand-light mb-3">Monitoring temps réel</h3>
                <p className="text-brand-light/80">
                  Dashboard en temps réel avec métriques de performance et alertes configurables.
                </p>
              </div>
              <div className="bg-brand-dark/50 backdrop-blur-md rounded-2xl p-6 border border-brand-light/10">
                <Layers className="w-8 h-8 text-brand-orange mb-4" />
                <h3 className="text-xl font-bold text-brand-light mb-3">Parallélisation</h3>
                <p className="text-brand-light/80">
                  Exécution parallèle des tâches avec synchronisation et agrégation des résultats.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture Patterns Section */}
        <section className="py-20 px-6 border-t border-brand-light/10">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-brand-light text-center mb-16">
              Patterns d'architecture supportés
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-brand-blue/15 rounded-xl p-8 border border-brand-blue/20">
                <h3 className="text-2xl font-bold text-brand-light mb-4">Orchestration synchrone</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-brand-blue rounded-full mr-3"></div>
                    <span className="text-brand-light/80">Request-Response patterns</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-brand-blue rounded-full mr-3"></div>
                    <span className="text-brand-light/80">Chaining de services</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-brand-blue rounded-full mr-3"></div>
                    <span className="text-brand-light/80">Agrégation de données</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-brand-blue rounded-full mr-3"></div>
                    <span className="text-brand-light/80">Transformation ETL</span>
                  </div>
                </div>
              </div>
              <div className="bg-brand-orange/15 rounded-xl p-8 border border-brand-orange/20">
                <h3 className="text-2xl font-bold text-brand-light mb-4">Orchestration asynchrone</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-brand-orange rounded-full mr-3"></div>
                    <span className="text-brand-light/80">Event-driven workflows</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-brand-orange rounded-full mr-3"></div>
                    <span className="text-brand-light/80">Publish-Subscribe patterns</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-brand-orange rounded-full mr-3"></div>
                    <span className="text-brand-light/80">Long-running processes</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-brand-orange rounded-full mr-3"></div>
                    <span className="text-brand-light/80">Batch processing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-6 border-t border-brand-light/10">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-brand-light text-center mb-16">
              Cas d'usage métier
            </h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="bg-brand-dark/50 backdrop-blur-md rounded-2xl p-6 border border-brand-light/10">
                  <h3 className="text-xl font-bold text-brand-light mb-3">E-commerce</h3>
                  <p className="text-brand-light/80">
                    Orchestration complète du parcours client : validation commande, paiement, stock, livraison et facturation.
                  </p>
                </div>
                <div className="bg-brand-dark/50 backdrop-blur-md rounded-2xl p-6 border border-brand-light/10">
                  <h3 className="text-xl font-bold text-brand-light mb-3">Services financiers</h3>
                  <p className="text-brand-light/80">
                    Gestion des transactions complexes avec validation, enrichissement et notification multi-canaux.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-brand-dark/50 backdrop-blur-md rounded-2xl p-6 border border-brand-light/10">
                  <h3 className="text-xl font-bold text-brand-light mb-3">Intégration ERP</h3>
                  <p className="text-brand-light/80">
                    Synchronisation des données métier entre systèmes hétérogènes avec transformation et validation.
                  </p>
                </div>
                <div className="bg-brand-dark/50 backdrop-blur-md rounded-2xl p-6 border border-brand-light/10">
                  <h3 className="text-xl font-bold text-brand-light mb-3">IoT & Télémétrie</h3>
                  <p className="text-brand-light/80">
                    Traitement en temps réel des flux IoT avec agrégation, analyse et déclenchement d'actions.
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

export default OrchestratorPage;
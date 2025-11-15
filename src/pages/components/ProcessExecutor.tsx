import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Zap, Workflow, Clock, Users, Settings, BarChart3 } from "lucide-react";

const ProcessExecutorPage = () => {
  return (
    <div className="min-h-screen bg-brand-dark">
      <Navigation />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-brand-orange/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-12 h-12 text-brand-light" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="text-brand-orange">
                    Process Executor
                  </span>
                </h1>
                <p className="text-brand-orange text-xl mb-6">
                  BPMN & Automatisation
                </p>
                <p className="text-brand-light/80 text-lg leading-relaxed mb-8">
                  Moteur d'exécution de processus métier basé sur les standards BPMN 2.0. 
                  Automatisez vos workflows complexes avec une interface graphique intuitive et une traçabilité complète.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/demo"
                    className="bg-brand-orange text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
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
              <div className="bg-brand-dark/50 backdrop-blur-md rounded-2xl p-8 border border-brand-light/10">
                <h2 className="text-2xl font-bold text-brand-light mb-6">Avantages métier</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Workflow className="w-6 h-6 text-brand-orange mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-brand-light">Automatisation complète</h3>
                      <p className="text-brand-light/70 text-sm">Réduction drastique des interventions manuelles</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <BarChart3 className="w-6 h-6 text-brand-blue mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-brand-light">Traçabilité totale</h3>
                      <p className="text-brand-light/70 text-sm">Historisation complète des exécutions et décisions</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-brand-orange mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-brand-light">Optimisation continue</h3>
                      <p className="text-brand-light/70 text-sm">Analytics pour améliorer les performances</p>
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
              Fonctionnalités BPMN complètes
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-brand-dark/50 backdrop-blur-md rounded-2xl p-6 border border-brand-light/10">
                <Workflow className="w-8 h-8 text-brand-orange mb-4" />
                <h3 className="text-xl font-bold text-brand-light mb-3">Designer graphique</h3>
                <p className="text-brand-light/80">
                  Interface drag & drop intuitive pour créer et modifier vos processus métier visuellement.
                </p>
              </div>
              <div className="bg-brand-dark/50 backdrop-blur-md rounded-2xl p-6 border border-brand-light/10">
                <Users className="w-8 h-8 text-brand-blue mb-4" />
                <h3 className="text-xl font-bold text-brand-light mb-3">Tâches humaines</h3>
                <p className="text-brand-light/80">
                  Gestion des tâches utilisateur avec formulaires dynamiques et notifications automatiques.
                </p>
              </div>
              <div className="bg-brand-dark/50 backdrop-blur-md rounded-2xl p-6 border border-brand-light/10">
                <Settings className="w-8 h-8 text-brand-orange mb-4" />
                <h3 className="text-xl font-bold text-brand-light mb-3">Tâches automatiques</h3>
                <p className="text-brand-light/80">
                  Exécution de scripts, appels d'APIs et intégrations avec systèmes externes.
                </p>
              </div>
              <div className="bg-brand-dark/50 backdrop-blur-md rounded-2xl p-6 border border-brand-light/10">
                <Clock className="w-8 h-8 text-brand-blue mb-4" />
                <h3 className="text-xl font-bold text-brand-light mb-3">Gestion du temps</h3>
                <p className="text-brand-light/80">
                  Timers, deadlines et escalations automatiques avec notifications configurables.
                </p>
              </div>
              <div className="bg-brand-dark/50 backdrop-blur-md rounded-2xl p-6 border border-brand-light/10">
                <BarChart3 className="w-8 h-8 text-brand-orange mb-4" />
                <h3 className="text-xl font-bold text-brand-light mb-3">Analytics avancées</h3>
                <p className="text-brand-light/80">
                  Métriques de performance, goulots d'étranglement et optimisations suggérées.
                </p>
              </div>
              <div className="bg-brand-dark/50 backdrop-blur-md rounded-2xl p-6 border border-brand-light/10">
                <Zap className="w-8 h-8 text-brand-blue mb-4" />
                <h3 className="text-xl font-bold text-brand-light mb-3">Événements complexes</h3>
                <p className="text-brand-light/80">
                  Gestion d'événements start, intermediate et end avec conditions multiples.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BPMN Elements Section */}
        <section className="py-20 px-6 border-t border-brand-light/10">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-brand-light text-center mb-16">
              Éléments BPMN 2.0 supportés
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-brand-orange/15 rounded-xl p-6 text-center border border-brand-orange/20">
                <div className="w-12 h-12 bg-brand-orange/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <div className="w-6 h-6 bg-brand-orange rounded-full"></div>
                </div>
                <h3 className="text-lg font-bold text-brand-light mb-2">Événements</h3>
                <p className="text-brand-light/70 text-sm">Start, End, Intermediate, Timer, Message</p>
              </div>
              <div className="bg-brand-blue/15 rounded-xl p-6 text-center border border-brand-blue/20">
                <div className="w-12 h-12 bg-brand-blue/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <div className="w-6 h-6 bg-brand-blue rounded"></div>
                </div>
                <h3 className="text-lg font-bold text-brand-light mb-2">Activités</h3>
                <p className="text-brand-light/70 text-sm">User Task, Service Task, Script Task</p>
              </div>
              <div className="bg-brand-orange/15 rounded-xl p-6 text-center border border-brand-orange/20">
                <div className="w-12 h-12 bg-brand-orange/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <div className="w-6 h-6 bg-brand-orange transform rotate-45"></div>
                </div>
                <h3 className="text-lg font-bold text-brand-light mb-2">Gateways</h3>
                <p className="text-brand-light/70 text-sm">Exclusive, Parallel, Inclusive, Event-based</p>
              </div>
              <div className="bg-brand-blue/15 rounded-xl p-6 text-center border border-brand-blue/20">
                <div className="w-12 h-12 bg-brand-blue/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <div className="w-6 h-1 bg-brand-blue"></div>
                </div>
                <h3 className="text-lg font-bold text-brand-light mb-2">Flux</h3>
                <p className="text-brand-light/70 text-sm">Sequence Flow, Message Flow, Association</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-6 border-t border-brand-light/10">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-brand-light text-center mb-16">
              Processus métier types
            </h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="bg-brand-dark/50 backdrop-blur-md rounded-2xl p-6 border border-brand-light/10">
                  <h3 className="text-xl font-bold text-brand-light mb-3">Processus RH</h3>
                  <p className="text-brand-light/80">
                    Recrutement, onboarding, congés, évaluations avec workflows d'approbation multi-niveaux.
                  </p>
                </div>
                <div className="bg-brand-dark/50 backdrop-blur-md rounded-2xl p-6 border border-brand-light/10">
                  <h3 className="text-xl font-bold text-brand-light mb-3">Processus financiers</h3>
                  <p className="text-brand-light/80">
                    Validation de factures, approbations budgétaires, remboursements avec contrôles automatiques.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-brand-dark/50 backdrop-blur-md rounded-2xl p-6 border border-brand-light/10">
                  <h3 className="text-xl font-bold text-brand-light mb-3">Gestion de contrats</h3>
                  <p className="text-brand-light/80">
                    Cycle de vie complet des contrats : création, négociation, validation, signature et renouvellement.
                  </p>
                </div>
                <div className="bg-brand-dark/50 backdrop-blur-md rounded-2xl p-6 border border-brand-light/10">
                  <h3 className="text-xl font-bold text-brand-light mb-3">Support client</h3>
                  <p className="text-brand-light/80">
                    Escalation automatique des tickets, SLA monitoring et satisfaction client avec KPIs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-20 px-6 border-t border-brand-light/10">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-bold text-brand-light mb-8">
              Intégrations natives
            </h2>
            <p className="text-brand-light/80 text-lg mb-12 max-w-3xl mx-auto">
              Le Process Executor s'intègre seamlessly avec vos systèmes existants et les autres composants Meecrogate
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-brand-orange/15 rounded-xl p-6 border border-brand-orange/20">
                <h3 className="text-xl font-bold text-brand-light mb-3">Systèmes externes</h3>
                <p className="text-brand-light/80 text-sm">
                  ERP, CRM, bases de données via APIs REST, SOAP et connecteurs spécialisés
                </p>
              </div>
              <div className="bg-brand-blue/15 rounded-xl p-6 border border-brand-blue/20">
                <h3 className="text-xl font-bold text-brand-light mb-3">Orchestrateur</h3>
                <p className="text-brand-light/80 text-sm">
                  Collaboration native pour orchestrer des processus complexes multi-systèmes
                </p>
              </div>
              <div className="bg-brand-orange/15 rounded-xl p-6 border border-brand-orange/20">
                <h3 className="text-xl font-bold text-brand-light mb-3">Serveur d'identité</h3>
                <p className="text-brand-light/80 text-sm">
                  Intégration SSO pour les tâches humaines avec gestion des rôles et permissions
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ProcessExecutorPage;
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, CheckCircle, MapPin, Users, Shield, Zap, Globe, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const ParisCaseStudy = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <div className="pt-16">
        {/* Header */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900/20 to-slate-800/50">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/projets-clients" 
              className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Retour aux projets clients
            </Link>
            <div className="flex items-center mb-6">
              <MapPin className="w-16 h-16 text-purple-400 mr-4" />
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  Portail Citoyen IA - Ville de Paris
                </h1>
                <p className="text-xl text-gray-300">
                  Accélérer l'innovation numérique au service des Franciliens
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vue d'ensemble */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">40%</h3>
                <p className="text-gray-300">Temps gagné sur l'intégration des services</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">RGPD</h3>
                <p className="text-gray-300">Conformité et sécurité renforcées</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">Quelques semaines</h3>
                <p className="text-gray-300">Délai de mise en service</p>
              </div>
            </div>

            <div className="bg-slate-800/30 p-8 rounded-lg border border-slate-700/50 mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Le Contexte</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                La Ville de Paris souhaitait enrichir son portail citoyen en intégrant des services d'intelligence artificielle 
                avancés : chatbot conversationnel, traduction en temps réel, système de recommandations personnalisées et 
                outils d'analyse prédictive. L'objectif était d'améliorer significativement l'expérience des Franciliens 
                tout en respectant les enjeux de rapidité de déploiement, de sécurité des données et de souveraineté numérique.
              </p>
              <blockquote className="border-l-4 border-purple-400 pl-4 italic text-gray-200">
                "Notre vision était de faire de Paris la première capitale européenne à démontrer l'intégration 
                rapide et sécurisée de services IA dans l'administration publique."
                <span className="block mt-2 text-purple-400 font-semibold">
                  - Directeur Innovation Numérique, Ville de Paris
                </span>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Défis */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Les Défis Relevés</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50">
                <Shield className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Complexité d'intégration</h3>
                <p className="text-gray-300">
                  Chaque service IA nécessitait un développement spécifique avec des délais de plusieurs mois 
                  et des risques de fragmentation technologique.
                </p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50">
                <Globe className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Souveraineté numérique</h3>
                <p className="text-gray-300">
                  Nécessité de maîtriser les données citoyens avec un hébergement en France et une 
                  conformité RGPD absolue.
                </p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50">
                <Zap className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Agilité requise</h3>
                <p className="text-gray-300">
                  Besoin de pouvoir brancher/débrancher une API en quelques clics et d'automatiser 
                  les processus de sécurité et monitoring.
                </p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50">
                <Users className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Dépendance fournisseurs</h3>
                <p className="text-gray-300">
                  Risque de lock-in technologique et de non-conformité réglementaire avec 
                  les solutions existantes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">La Solution Meecrogate</h2>
            <div className="bg-gradient-to-br from-purple-900/20 to-slate-800/30 p-8 rounded-lg border border-purple-500/30 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Un API Management souverain et modulaire</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Intégration plug-and-play</h4>
                    <p className="text-gray-300">
                      Architecture stateless permettant l'intégration rapide de nouveaux services IA 
                      sans modification du système existant.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Automatisation complète</h4>
                    <p className="text-gray-300">
                      Catalogage automatique, gestion de la sécurité et monitoring en temps réel 
                      de toutes les APIs intégrées.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Souveraineté garantie</h4>
                    <p className="text-gray-300">
                      Données maîtrisées et hébergement en France avec conformité RGPD native 
                      et certification sécurité.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Déploiement express</h4>
                    <p className="text-gray-300">
                      Mise en place complète en quelques semaines seulement contre plusieurs mois 
                      avec les solutions traditionnelles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Résultats */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Résultats et Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50">
                <TrendingUp className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Performance opérationnelle</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    40% de temps gagné sur l'intégration des services
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    Sécurité et conformité RGPD renforcées
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    Agilité IT : gestion API en quelques clics
                  </li>
                </ul>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50">
                <Users className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Expérience citoyenne</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    Chatbot intelligent multilingue
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    Traduction instantanée des services
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    Recommandations personnalisées
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-slate-800/50 p-8 rounded-lg border border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">Impact Stratégique</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Paris devient la première capitale européenne à démontrer l'intégration rapide et sécurisée 
                de services IA dans l'administration publique, créant un modèle reproductible pour d'autres 
                grandes villes européennes.
              </p>
              <p className="text-purple-400 font-semibold">
                Positionnement : innovation citoyenne + souveraineté numérique
              </p>
            </div>
          </div>
        </section>

        {/* Perspectives */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Perspectives d'Avenir</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 text-center">
                <Globe className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-3">Extension services</h3>
                <p className="text-gray-300 text-sm">
                  Mobilité, énergie, environnement
                </p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 text-center">
                <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-3">API Marketplace</h3>
                <p className="text-gray-300 text-sm">
                  Création d'une marketplace interne
                </p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 text-center">
                <Shield className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-3">Standardisation</h3>
                <p className="text-gray-300 text-sm">
                  Écosystème numérique parisien unifié
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900/20 to-slate-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Prêt à transformer votre administration ?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Découvrez comment Meecrogate peut accélérer votre innovation numérique
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/demo"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Demander une démo
              </Link>
              <Link 
                to="/projets-clients"
                className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Voir d'autres projets
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ParisCaseStudy;
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Settings, Shield, Users, Key, Lock, Smartphone, ShieldCheck } from "lucide-react";

const IdentityServerPage = () => {
  return (
    <div className="min-h-screen bg-slate-900 overflow-x-hidden">
      <Navigation />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-brand-orange/20 w-24 h-24 rounded-2xl flex items-center justify-center mb-6">
                  <ShieldCheck className="w-14 h-14 text-brand-orange" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="text-brand-orange">
                    Serveur d'identité
                  </span>
                </h1>
                <p className="text-brand-orange text-xl mb-6">
                  Gestion des accès & Single Sign-On
                </p>
                <p className="text-brand-light/80 text-lg leading-relaxed mb-8">
                  Solution complète de gestion d'identité et d'accès (IAM) offrant une sécurité renforcée,
                  une expérience utilisateur optimisée et une conformité réglementaire pour toutes vos applications.
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
                <h2 className="text-2xl font-bold text-brand-light mb-6">Bénéfices immédiats</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 text-brand-orange mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-brand-light">Sécurité multicouche</h3>
                      <p className="text-brand-light/70 text-sm">MFA, détection d'anomalies et conformité RGPD</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="w-6 h-6 text-brand-blue mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-brand-light">Expérience utilisateur fluide</h3>
                      <p className="text-brand-light/70 text-sm">SSO transparent sur toutes les applications</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Key className="w-6 h-6 text-brand-orange mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-brand-light">Gestion centralisée</h3>
                      <p className="text-brand-light/70 text-sm">Contrôle unifié des identités et permissions</p>
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
              Fonctionnalités complètes
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-brand-dark/50 backdrop-blur-md rounded-2xl p-6 border border-brand-light/10">
                <Users className="w-8 h-8 text-brand-orange mb-4" />
                <h3 className="text-xl font-bold text-brand-light mb-3">Single Sign-On (SSO)</h3>
                <p className="text-brand-light/80">
                  Authentification unique pour accéder à toutes les applications de l'écosystème.
                </p>
              </div>
              <div className="bg-brand-dark/50 backdrop-blur-md rounded-2xl p-6 border border-brand-light/10">
                <Shield className="w-8 h-8 text-brand-blue mb-4" />
                <h3 className="text-xl font-bold text-brand-light mb-3">Gestion RBAC</h3>
                <p className="text-brand-light/80">
                  Contrôle d'accès basé sur les rôles avec permissions granulaires et héritages.
                </p>
              </div>
              <div className="bg-brand-dark/50 backdrop-blur-md rounded-2xl p-6 border border-brand-light/10">
                <Smartphone className="w-8 h-8 text-brand-orange mb-4" />
                <h3 className="text-xl font-bold text-brand-light mb-3">Authentification MFA</h3>
                <p className="text-brand-light/80">
                  Sécurité renforcée avec authentification multi-facteurs (SMS, TOTP, biométrie).
                </p>
              </div>
              <div className="bg-brand-dark/50 backdrop-blur-md rounded-2xl p-6 border border-brand-light/10">
                <Settings className="w-8 h-8 text-brand-blue mb-4" />
                <h3 className="text-xl font-bold text-brand-light mb-3">Intégration LDAP/AD</h3>
                <p className="text-brand-light/80">
                  Connexion transparente avec vos annuaires d'entreprise existants.
                </p>
              </div>
              <div className="bg-brand-dark/50 backdrop-blur-md rounded-2xl p-6 border border-brand-light/10">
                <Lock className="w-8 h-8 text-brand-orange mb-4" />
                <h3 className="text-xl font-bold text-brand-light mb-3">Standards ouverts</h3>
                <p className="text-brand-light/80">
                  Support complet OAuth 2.0, OpenID Connect, SAML 2.0 et JWT.
                </p>
              </div>
              <div className="bg-brand-dark/50 backdrop-blur-md rounded-2xl p-6 border border-brand-light/10">
                <Key className="w-8 h-8 text-brand-blue mb-4" />
                <h3 className="text-xl font-bold text-brand-light mb-3">Cycle de vie utilisateur</h3>
                <p className="text-brand-light/80">
                  Provisioning et déprovisioning automatiques avec workflows d'approbation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Standards Section */}
        <section className="py-20 px-6 border-t border-brand-light/10">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-brand-light text-center mb-16">
              Protocoles et standards supportés
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-brand-orange/15 rounded-xl p-6 text-center border border-brand-orange/20">
                <h3 className="text-xl font-bold text-brand-light mb-2">OAuth 2.0</h3>
                <p className="text-brand-light/70 text-sm">Autorisation sécurisée pour APIs</p>
              </div>
              <div className="bg-brand-blue/15 rounded-xl p-6 text-center border border-brand-blue/20">
                <h3 className="text-xl font-bold text-brand-light mb-2">OpenID Connect</h3>
                <p className="text-brand-light/70 text-sm">Couche d'identité sur OAuth 2.0</p>
              </div>
              <div className="bg-brand-orange/15 rounded-xl p-6 text-center border border-brand-orange/20">
                <h3 className="text-xl font-bold text-brand-light mb-2">SAML 2.0</h3>
                <p className="text-brand-light/70 text-sm">Fédération d'identités enterprise</p>
              </div>
              <div className="bg-brand-blue/15 rounded-xl p-6 text-center border border-brand-blue/20">
                <h3 className="text-xl font-bold text-brand-light mb-2">JWT/JWS/JWE</h3>
                <p className="text-brand-light/70 text-sm">Tokens sécurisés et signés</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-6 border-t border-brand-light/10">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-brand-light text-center mb-16">
              Scénarios d'implémentation
            </h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="bg-brand-dark/50 backdrop-blur-md rounded-2xl p-6 border border-brand-light/10">
                  <h3 className="text-xl font-bold text-brand-light mb-3">Portail collaborateur</h3>
                  <p className="text-brand-light/80">
                    Accès unifié aux applications RH, outils collaboratifs et systèmes métier avec SSO complet.
                  </p>
                </div>
                <div className="bg-brand-dark/50 backdrop-blur-md rounded-2xl p-6 border border-brand-light/10">
                  <h3 className="text-xl font-bold text-brand-light mb-3">Portail client/partenaire</h3>
                  <p className="text-brand-light/80">
                    Gestion sécurisée des accès externes avec séparation des domaines et audit complet.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-brand-dark/50 backdrop-blur-md rounded-2xl p-6 border border-brand-light/10">
                  <h3 className="text-xl font-bold text-brand-light mb-3">Applications B2C</h3>
                  <p className="text-brand-light/80">
                    Inscription et connexion simplifiées avec réseaux sociaux et self-service complet.
                  </p>
                </div>
                <div className="bg-brand-dark/50 backdrop-blur-md rounded-2xl p-6 border border-brand-light/10">
                  <h3 className="text-xl font-bold text-brand-light mb-3">Migration cloud</h3>
                  <p className="text-brand-light/80">
                    Modernisation des systèmes d'authentification legacy vers des standards cloud-native.
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

export default IdentityServerPage;
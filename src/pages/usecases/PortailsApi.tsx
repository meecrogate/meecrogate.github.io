
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, BarChart3, Lock } from "lucide-react";

const PortailsApiPage = () => {
  const features = [
    {
      icon: Shield,
      title: "Authentification robuste",
      description: "OAuth2, JWT, API Keys avec gestion des permissions granulaires"
    },
    {
      icon: Users,
      title: "Gestion des partenaires",
      description: "Interface dédiée pour l'onboarding et la gestion des accès"
    },
    {
      icon: BarChart3,
      title: "Quotas et monitoring",
      description: "Surveillance en temps réel avec alertes et limitations automatiques"
    },
    {
      icon: Lock,
      title: "Sécurité avancée",
      description: "Chiffrement, audit trail et conformité réglementaire"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              🔐 Portails API sécurisés
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Exposez vos APIs à vos partenaires et clients externes avec un contrôle total sur l'accès, les quotas et la sécurité.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <feature.icon className="h-8 w-8 text-blue-400" />
                    <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gray-800/30 border-gray-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Cas d'usage typiques</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-gray-300">
                <h3 className="text-lg font-semibold text-white mb-2">Partenaires commerciaux</h3>
                <p>Donnez accès à vos données produits, commandes ou inventaire via des APIs sécurisées avec authentification et quotas personnalisés.</p>
              </div>
              <div className="text-gray-300">
                <h3 className="text-lg font-semibold text-white mb-2">Clients entreprise</h3>
                <p>Permettez à vos clients d'intégrer vos services dans leurs systèmes avec des APIs documentées et des tableaux de bord de monitoring.</p>
              </div>
              <div className="text-gray-300">
                <h3 className="text-lg font-semibold text-white mb-2">Écosystème de développeurs</h3>
                <p>Créez une marketplace d'APIs pour encourager les intégrations tierces avec gestion des versions et support développeur.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PortailsApiPage;

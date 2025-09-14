
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileCheck, Users, BarChart, Settings } from "lucide-react";

const StandardisationPage = () => {
  const features = [
    {
      icon: FileCheck,
      title: "Politiques centralisées",
      description: "Définissez et appliquez des standards cohérents sur toutes vos APIs"
    },
    {
      icon: Users,
      title: "Gouvernance unifiée",
      description: "Gestion centralisée des utilisateurs, rôles et permissions"
    },
    {
      icon: BarChart,
      title: "Observabilité globale",
      description: "Vue d'ensemble de toutes vos APIs avec métriques unifiées"
    },
    {
      icon: Settings,
      title: "Configuration centralisée",
      description: "Gestion des environnements et configurations depuis un point unique"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              📋 Standardisation d'API
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Imposez une gouvernance cohérente et des standards uniformes sur l'ensemble de votre écosystème API.
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
              <CardTitle className="text-2xl text-white">Bénéfices de la standardisation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-gray-300">
                <h3 className="text-lg font-semibold text-white mb-2">Réduction des coûts</h3>
                <p>Éliminez les redondances, standardisez les pratiques et réduisez la complexité de maintenance de 40%.</p>
              </div>
              <div className="text-gray-300">
                <h3 className="text-lg font-semibold text-white mb-2">Time-to-market accéléré</h3>
                <p>Templates et patterns réutilisables permettent de déployer de nouvelles APIs 60% plus rapidement.</p>
              </div>
              <div className="text-gray-300">
                <h3 className="text-lg font-semibold text-white mb-2">Conformité assurée</h3>
                <p>Respect automatique des standards de sécurité, RGPD et autres réglementations sectorielles.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StandardisationPage;

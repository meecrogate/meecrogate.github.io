
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Database, Code, Workflow } from "lucide-react";

const IntegrationRapidePage = () => {
  const features = [
    {
      icon: Zap,
      title: "Configuration JSON",
      description: "Définissez vos intégrations en quelques lignes de configuration"
    },
    {
      icon: Database,
      title: "Connecteurs préconçus",
      description: "Plus de 100 connecteurs pour les systèmes les plus courants"
    },
    {
      icon: Code,
      title: "Sans développement",
      description: "Aucun code nécessaire, juste de la configuration"
    },
    {
      icon: Workflow,
      title: "Transformation automatique",
      description: "Mapping et transformation des données en temps réel"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Intégration rapide
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connectez vos systèmes existants en quelques minutes sans écrire une seule ligne de code.
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
              <CardTitle className="text-2xl text-white">Exemples d'intégration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-gray-300">
                <h3 className="text-lg font-semibold text-white mb-2">ERP → CRM</h3>
                <p>Synchronisez automatiquement vos données clients entre votre ERP SAP et votre CRM Salesforce.</p>
              </div>
              <div className="text-gray-300">
                <h3 className="text-lg font-semibold text-white mb-2">Legacy → Cloud</h3>
                <p>Exposez vos applications mainframe via des APIs REST modernes pour les nouvelles applications web.</p>
              </div>
              <div className="text-gray-300">
                <h3 className="text-lg font-semibold text-white mb-2">Multi-base de données</h3>
                <p>Agrégez des données provenant de multiples sources (Oracle, PostgreSQL, MongoDB) en une seule API.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default IntegrationRapidePage;

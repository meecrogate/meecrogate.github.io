
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GitBranch, Play, CheckCircle, Clock } from "lucide-react";

const ProcessusMetiersPage = () => {
  const features = [
    {
      icon: GitBranch,
      title: "Workflows BPMN",
      description: "Transformez vos processus métiers en services web accessibles"
    },
    {
      icon: Play,
      title: "Déclenchement API",
      description: "Lancez vos processus via des appels REST simples"
    },
    {
      icon: CheckCircle,
      title: "Suivi d'état",
      description: "Monitoring en temps réel de l'avancement de vos processus"
    },
    {
      icon: Clock,
      title: "Historique complet",
      description: "Audit trail détaillé de tous les processus exécutés"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Processus métiers comme APIs
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transformez vos workflows BPMN complexes en services web REST simples à utiliser.
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
              <CardTitle className="text-2xl text-white">Processus typiques</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-gray-300">
                <h3 className="text-lg font-semibold text-white mb-2">Validation de commandes</h3>
                <p>Processus complexe impliquant vérification de stock, validation de crédit, et approbation hiérarchique, accessible via une simple API REST.</p>
              </div>
              <div className="text-gray-300">
                <h3 className="text-lg font-semibold text-white mb-2">Onboarding client</h3>
                <p>Workflow d'intégration de nouveaux clients avec vérifications KYC, ouverture de comptes et activation de services.</p>
              </div>
              <div className="text-gray-300">
                <h3 className="text-lg font-semibold text-white mb-2">Gestion des incidents</h3>
                <p>Processus ITIL de gestion d'incidents avec escalade automatique, notifications et résolution collaborative.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProcessusMetiersPage;


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const PricingFAQ = () => {
  const faqs = [
    {
      question: "Qu'est-ce qui rend votre solution de gestion d'API différente ?",
      answer: "Notre solution est uniquement low-code, utilisant seulement des fichiers de configuration JSON. Pas de configuration complexe, pas de langages propriétaires - juste des configs JSON simples qui alimentent une stack complète de gestion d'API avec Gateway, Orchestrateur, Serveur d'accès et Process Executor."
    },
    {
      question: "Comment fonctionne la configuration JSON ?",
      answer: "Tout est configuré via des fichiers JSON intuitifs. Définissez vos routes d'API, règles d'authentification, workflows d'orchestration et processus métier, tout en JSON. Les changements sont appliqués en temps réel sans redémarrage ni temps d'arrêt."
    },
    {
      question: "Puis-je migrer depuis d'autres plateformes de gestion d'API ?",
      answer: "Absolument ! Nos outils de migration peuvent vous aider à convertir les configurations existantes vers notre format JSON. Nous offrons une assistance gratuite à la migration pour les clients du forfait Business et avons une documentation détaillée pour la migration en libre-service."
    },
    {
      question: "Qu'est-ce qui est inclus dans le forfait Developer gratuit ?",
      answer: "Le forfait Developer inclut les quatre composants principaux (API Gateway, Orchestrateur, Serveur d'accès, Process Executor) avec jusqu'à 10 000 appels d'API par mois, 2 fichiers de configuration JSON et le support communautaire. Parfait pour les tests et petits projets."
    },
    {
      question: "Comment gérez-vous la montée en charge et les performances ?",
      answer: "Notre plateforme s'adapte automatiquement selon la demande. Le forfait Business inclut l'auto-scaling, la répartition de charge et l'optimisation des performances. Nous garantissons un SLA de 99,9% de disponibilité pour les clients Business."
    },
    {
      question: "Y a-t-il une exigence de contrat à long terme ?",
      answer: "Aucun contrat à long terme requis. Tous les forfaits payants sont mois par mois. Vous pouvez upgrader, downgrader ou annuler à tout moment. Nous croyons qu'il faut mériter votre entreprise chaque mois avec un excellent service."
    },
    {
      question: "Quel type de support fournissez-vous ?",
      answer: "Le forfait Developer bénéficie du support communautaire, le forfait Startup inclut le support par email avec un temps de réponse de 24h, et le forfait Business obtient un support prioritaire avec gestion de compte dédiée et support téléphonique."
    },
    {
      question: "Puis-je utiliser ceci pour une architecture de microservices ?",
      answer: "Oui ! Notre solution est parfaite pour les microservices. L'API Gateway gère la découverte et le routage des services, l'Orchestrateur gère la communication entre services, et le Process Executor gère les workflows distribués - tout configuré via JSON."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">
          Questions fréquemment posées
        </h2>
        <p className="text-xl text-gray-300">
          Tout ce que vous devez savoir sur notre plateforme de gestion d'API
        </p>
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="bg-gray-800/50 border-gray-700 rounded-lg px-6 backdrop-blur-sm"
          >
            <AccordionTrigger className="text-white hover:text-blue-400 text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-300 pb-4">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default PricingFAQ;

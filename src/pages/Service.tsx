
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Service = () => {
  return (
    <div className="bg-slate-900 min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="max-w-3xl mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Service d’intégration sur-mesure
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Notre équipe accompagne l’intégration de la solution Meecrogate dans votre contexte spécifique, pour un déploiement optimal sur votre infrastructure.
          </p>
          <div className="bg-gray-800/70 border border-gray-700 rounded-xl p-8 text-left text-gray-200">
            <ul className="space-y-6 list-inside list-disc">
              <li>
                <span className="font-semibold text-white">Diagnostic de l’existant :</span> Analyse de votre environnement technique, architecture, flux d’API et contraintes d’intégration.
              </li>
              <li>
                <span className="font-semibold text-white">Proposition d’architecture cible :</span> Définition d’une architecture adaptée à votre système d’information permettant une adoption progressive et sécurisée de Meecrogate.
              </li>
              <li>
                <span className="font-semibold text-white">Déploiement sur mesure :</span> Accompagnement à l’installation sur vos environnements (cloud, on-premise ou hybride) avec adaptation des configurations et orchestrations selon vos besoins.
              </li>
              <li>
                <span className="font-semibold text-white">Transfert de compétences :</span> Formations et meilleures pratiques pour une prise en main rapide par vos équipes.
              </li>
              <li>
                <span className="font-semibold text-white">Support renforcé :</span> Accès à un support dédié tout au long du projet de migration et d’intégration.
              </li>
            </ul>
            <div className="mt-10 text-center">
              <a
                href="mailto:contact@meecrogate.com"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-md transition-colors text-lg"
              >
                Discuter de mon projet d’intégration
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Service;

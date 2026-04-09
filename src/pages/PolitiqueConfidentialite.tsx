import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PolitiqueConfidentialite = () => {
  return (
    <div className="min-h-screen bg-slate-900 overflow-x-hidden">
      <Navigation />
      
      <div className="pt-16">
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl font-bold mb-8 text-white">Politique de Confidentialité</h1>
          
          <div className="space-y-8 text-slate-300">
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">1. Introduction</h2>
              <p>
                Meecrogate SAS s'engage à protéger la vie privée des utilisateurs de son site web. 
                Cette politique de confidentialité explique comment nous collectons, utilisons, 
                stockons et protégeons vos données personnelles conformément au Règlement Général 
                sur la Protection des Données (RGPD).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">2. Responsable du traitement</h2>
              <p>
                Le responsable du traitement des données personnelles est :<br />
                <strong className="text-white">Meecrogate SAS</strong><br />
                2 RUE DE LA REPUBLIQUE 34160 SAINT-DREZERY<br />
                Email : dpo@meecrogate.com
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">3. Données collectées</h2>
              <p>Nous pouvons collecter les données suivantes :</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Données d'identification : nom, prénom, adresse email, numéro de téléphone</li>
                <li>Données professionnelles : entreprise, fonction</li>
                <li>Données de connexion : adresse IP, logs de connexion</li>
                <li>Données de navigation : cookies, pages visitées</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">4. Finalités du traitement</h2>
              <p>Vos données personnelles sont collectées pour les finalités suivantes :</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Répondre à vos demandes de contact et de démonstration</li>
                <li>Vous fournir nos services et support technique</li>
                <li>Améliorer notre site web et nos services</li>
                <li>Vous envoyer des communications commerciales (avec votre consentement)</li>
                <li>Respecter nos obligations légales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">5. Base légale du traitement</h2>
              <p>Le traitement de vos données personnelles est fondé sur :</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Votre consentement explicite</li>
                <li>L'exécution d'un contrat ou de mesures précontractuelles</li>
                <li>Notre intérêt légitime à développer notre activité</li>
                <li>Le respect de nos obligations légales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">6. Durée de conservation</h2>
              <p>
                Vos données personnelles sont conservées pendant la durée nécessaire à l'accomplissement 
                des finalités pour lesquelles elles ont été collectées, et au maximum :
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>3 ans après le dernier contact pour les prospects</li>
                <li>Durée de la relation contractuelle + 5 ans pour les clients</li>
                <li>13 mois pour les cookies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">7. Destinataires des données</h2>
              <p>
                Vos données personnelles peuvent être transmises à nos sous-traitants techniques 
                (hébergement, emailing) dans le cadre strict de leurs missions. Nous ne vendons 
                jamais vos données à des tiers.
              </p>
              <p className="mt-4">
                Conformément à notre engagement de souveraineté européenne, vos données sont 
                hébergées au sein de l'Union Européenne.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">8. Vos droits</h2>
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><strong className="text-white">Droit d'accès :</strong> obtenir la confirmation que vos données sont traitées et en obtenir une copie</li>
                <li><strong className="text-white">Droit de rectification :</strong> demander la correction de données inexactes</li>
                <li><strong className="text-white">Droit à l'effacement :</strong> demander la suppression de vos données</li>
                <li><strong className="text-white">Droit à la limitation :</strong> demander la limitation du traitement</li>
                <li><strong className="text-white">Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
                <li><strong className="text-white">Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
              </ul>
              <p className="mt-4">
                Pour exercer ces droits, contactez-nous à : dpo@meecrogate.com
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">9. Cookies</h2>
              <p>
                Notre site utilise des cookies pour améliorer votre expérience de navigation. 
                Vous pouvez configurer votre navigateur pour refuser les cookies ou être alerté 
                lorsqu'un cookie est envoyé.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">10. Sécurité</h2>
              <p>
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées 
                pour protéger vos données personnelles contre tout accès non autorisé, modification, 
                divulgation ou destruction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">11. Réclamation</h2>
              <p>
                Si vous estimez que le traitement de vos données personnelles constitue une violation 
                du RGPD, vous avez le droit d'introduire une réclamation auprès de la CNIL :<br />
                <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                  www.cnil.fr
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">12. Mise à jour</h2>
              <p>
                Cette politique de confidentialité peut être mise à jour périodiquement. 
                La date de dernière mise à jour est indiquée ci-dessous.
              </p>
              <p className="mt-4 text-slate-400">
                Dernière mise à jour : Décembre 2024
              </p>
            </section>
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default PolitiqueConfidentialite;
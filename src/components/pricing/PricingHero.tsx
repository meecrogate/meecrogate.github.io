
import { Button } from "@/components/ui/button";

const PricingHero = () => {
  return (
    <section 
      id="pricing" 
      aria-labelledby="pricing-title" 
      className="bg-slate-50 text-slate-900 py-12 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-7">
          <h1 
            id="pricing-title" 
            className="text-3xl font-bold mb-2 leading-tight"
          >
            Tarifs — Passez du prototype à la production
          </h1>
          <p className="text-slate-600 text-base">
            Des offres simples, adaptées à la France. Prix HT / mois — intégration incluse selon l'offre. 
            <strong> Contactez-nous</strong> pour une démo ou un devis Enterprise.
          </p>
        </header>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-5">
          {/* Starter */}
          <article 
            aria-labelledby="starter-title" 
            className="bg-white rounded-lg p-5 shadow-lg border border-slate-200"
          >
            <h2 id="starter-title" className="text-lg font-semibold mb-1.5">🚀 Starter</h2>
            <p className="text-slate-600 mb-3.5">Pour prototyper et tester en production légère</p>
            <div className="flex items-baseline gap-2 mb-3.5">
              <span className="text-2xl font-bold">490 €</span>
              <span className="text-slate-500 text-sm">HT / mois</span>
            </div>
            <ul className="mb-4 ml-4 text-slate-700 space-y-1">
              <li>Jusqu'à <strong>5 APIs</strong></li>
              <li>Jusqu'à <strong>200 souscriptions</strong></li>
              <li>Portail développeurs & monitoring de base</li>
              <li>SLA standard (support heures ouvrées)</li>
              <li><strong>½ journée d'intégration</strong> incluse (ou option 300 €)</li>
            </ul>
            <div className="flex gap-2">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-3.5 py-2.5 text-sm font-semibold">
                Demander une démo
              </Button>
              <Button 
                variant="outline" 
                className="border-slate-300 text-blue-600 hover:bg-slate-50 px-3.5 py-2.5 text-sm font-semibold"
              >
                Contact commercial
              </Button>
            </div>
          </article>

          {/* Pro */}
          <article 
            aria-labelledby="pro-title" 
            className="bg-gradient-to-b from-white to-blue-50 rounded-lg p-5.5 shadow-xl border border-blue-200"
          >
            <h2 id="pro-title" className="text-lg font-semibold mb-1.5">💼 Pro (recommandé)</h2>
            <p className="text-slate-600 mb-3.5">Pour PME/ETI qui passent en production</p>
            <div className="flex items-baseline gap-2 mb-3.5">
              <span className="text-2xl font-bold">1 900 €</span>
              <span className="text-slate-500 text-sm">HT / mois</span>
            </div>
            <ul className="mb-4 ml-4 text-slate-700 space-y-1">
              <li>Jusqu'à <strong>20 APIs</strong></li>
              <li><strong>Souscriptions illimitées</strong></li>
              <li>Sécurité avancée, quotas, analytics détaillés</li>
              <li>Portail développeurs personnalisable</li>
              <li><strong>2 jours d'intégration & formation</strong> inclus</li>
              <li>SLA renforcé & support prioritaire</li>
            </ul>
            <div className="flex gap-2">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-3.5 py-2.5 text-sm font-semibold">
                Tester la démo Pro
              </Button>
              <Button 
                variant="outline" 
                className="border-slate-300 text-blue-600 hover:bg-slate-50 px-3.5 py-2.5 text-sm font-semibold"
              >
                Comparer les offres
              </Button>
            </div>
          </article>

          {/* Entreprise */}
          <article 
            aria-labelledby="enterprise-title" 
            className="bg-white rounded-lg p-5 shadow-lg border border-slate-200"
          >
            <h2 id="enterprise-title" className="text-lg font-semibold mb-1.5">🏢 Entreprise</h2>
            <p className="text-slate-600 mb-3.5">Grandes infrastructures / conformité / forte échelle</p>
            <div className="flex items-baseline gap-2 mb-3.5">
              <span className="text-2xl font-bold">À partir de 5 000 €</span>
              <span className="text-slate-500 text-sm">HT / mois (sur devis)</span>
            </div>
            <ul className="mb-4 ml-4 text-slate-700 space-y-1">
              <li>APIs <strong>illimitées</strong> (selon besoin)</li>
              <li>Souscriptions illimitées, trafic élevé</li>
              <li>Observabilité, conformité & sécurité renforcées</li>
              <li>Déploiement cloud / hybride / on-premise</li>
              <li>SLA premium (support 24/7) + équipe dédiée</li>
              <li>Accompagnement projet complet : migration, audit, formation</li>
            </ul>
            <div className="flex gap-2">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-3.5 py-2.5 text-sm font-semibold">
                Demander un devis
              </Button>
              <Button 
                variant="outline" 
                className="border-slate-300 text-blue-600 hover:bg-slate-50 px-3.5 py-2.5 text-sm font-semibold"
              >
                Nous contacter
              </Button>
            </div>
          </article>
        </div>

        {/* Table comparative */}
        <div id="pricing-table" className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Tableau comparatif</h3>
          <div className="overflow-auto rounded-lg bg-white border border-blue-100 shadow-sm">
            <table className="w-full border-collapse min-w-[720px]">
              <thead className="bg-blue-50 text-slate-900 text-left">
                <tr>
                  <th className="py-3.5 px-4 font-semibold">Fonctionnalité</th>
                  <th className="py-3.5 px-4 font-semibold">Starter</th>
                  <th className="py-3.5 px-4 font-semibold">Pro</th>
                  <th className="py-3.5 px-4 font-semibold">Entreprise</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr>
                  <td className="py-3 px-4 border-t border-blue-50">APIs incluses</td>
                  <td className="py-3 px-4 border-t border-blue-50">5</td>
                  <td className="py-3 px-4 border-t border-blue-50">20</td>
                  <td className="py-3 px-4 border-t border-blue-50">Illimité</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-t border-blue-50">Souscriptions (dev/users)</td>
                  <td className="py-3 px-4 border-t border-blue-50">200 max</td>
                  <td className="py-3 px-4 border-t border-blue-50">Illimité</td>
                  <td className="py-3 px-4 border-t border-blue-50">Illimité</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-t border-blue-50">Sécurité & quotas</td>
                  <td className="py-3 px-4 border-t border-blue-50">Basique</td>
                  <td className="py-3 px-4 border-t border-blue-50">Avancé</td>
                  <td className="py-3 px-4 border-t border-blue-50">Avancé + conformité</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-t border-blue-50">Analytics</td>
                  <td className="py-3 px-4 border-t border-blue-50">Standard</td>
                  <td className="py-3 px-4 border-t border-blue-50">Détaillé</td>
                  <td className="py-3 px-4 border-t border-blue-50">Temps réel / observabilité</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-t border-blue-50">SLA & support</td>
                  <td className="py-3 px-4 border-t border-blue-50">Standard (Hch)</td>
                  <td className="py-3 px-4 border-t border-blue-50">Prioritaire</td>
                  <td className="py-3 px-4 border-t border-blue-50">Premium 24/7</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-t border-blue-50">Intégration incluse</td>
                  <td className="py-3 px-4 border-t border-blue-50">½ jour</td>
                  <td className="py-3 px-4 border-t border-blue-50">2 jours</td>
                  <td className="py-3 px-4 border-t border-blue-50">Sur mesure</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-t border-blue-50">Prix (HT / mois)</td>
                  <td className="py-3 px-4 border-t border-blue-50">490 €</td>
                  <td className="py-3 px-4 border-t border-blue-50">1 900 €</td>
                  <td className="py-3 px-4 border-t border-blue-50">À partir de 5 000 € (sur devis)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Microcopy & FAQ */}
        <div className="space-y-3.5">
          <div className="text-slate-700">
            <p className="mb-2 text-sm">
              <strong>Remarques :</strong> Les prix sont exprimés en <strong>EUR HT / mois</strong>. TVA en sus. 
              Engagement mensuel ou annuel (remise de 10% pour engagement 12 mois).
            </p>
            <p className="text-sm">
              Dépassements (ex. requêtes, bande passante, APIs supplémentaires) facturés par paliers transparents — 
              affichés dans le contrat et le simulateur de prix.
            </p>
          </div>

          <div 
            aria-labelledby="faq-title" 
            className="bg-white rounded-lg p-4 border border-blue-100"
          >
            <h3 id="faq-title" className="text-base font-semibold mb-2">Questions fréquentes</h3>
            <dl className="text-slate-700">
              <dt className="font-bold mt-2.5">Que comprend l'intégration ?</dt>
              <dd className="mt-1.5">
                Paramétrage initial, connexion aux backends, tests, et formation des équipes 
                (durée selon l'offre : ½ j → 2 j → projet sur mesure).
              </dd>

              <dt className="font-bold mt-2.5">Peut-on monter d'un plan à l'autre sans coupure ?</dt>
              <dd className="mt-1.5">
                Oui — montée en charge fluide, migration et hook d'intégration planifiés avec notre équipe 
                pour éviter toute interruption.
              </dd>

              <dt className="font-bold mt-2.5">Y a-t-il une offre POC ?</dt>
              <dd className="mt-1.5">
                Oui : pack POC disponible (forfait remboursable à la signature d'un contrat Pro/Entreprise). 
                Contactez ventes pour les conditions.
              </dd>
            </dl>
          </div>
        </div>

        {/* Contact strip */}
        <footer 
          id="contact" 
          className="mt-6 bg-blue-600 text-white p-4 rounded-lg flex flex-col gap-2.5"
        >
          <div className="flex flex-col gap-1.5">
            <div className="font-bold text-base">Besoin d'un accompagnement sur-mesure ?</div>
            <div className="text-blue-100 text-sm">
              Équipe dédiée, migration, conformité RGPD, ou déploiement on-premise : parlons-en.
            </div>
          </div>
          <div className="flex gap-2.5 flex-wrap">
            <Button className="bg-white text-blue-600 hover:bg-blue-50 px-3.5 py-2.5 font-bold">
              Contact commercial
            </Button>
            <Button 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10 px-3.5 py-2.5 font-bold"
            >
              Appeler +33 1 23 45 67 89
            </Button>
          </div>
          <small className="opacity-90">Nous répondons habituellement sous 24h ouvrées.</small>
        </footer>
      </div>
    </section>
  );
};

export default PricingHero;

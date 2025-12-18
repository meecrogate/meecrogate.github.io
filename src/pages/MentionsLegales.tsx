import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-8">Mentions Légales</h1>
          
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">1. Éditeur du site</h2>
              <p>
                Le site Meecrogate est édité par :<br />
                <strong>Meecrogate SAS</strong><br />
                Société par Actions Simplifiée au capital de [montant] euros<br />
                Siège social : [Adresse complète]<br />
                RCS : [Ville] [Numéro RCS]<br />
                SIRET : [Numéro SIRET]<br />
                TVA Intracommunautaire : [Numéro TVA]
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">2. Directeur de la publication</h2>
              <p>
                Le directeur de la publication est [Nom du directeur], en qualité de [Fonction].
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">3. Hébergement</h2>
              <p>
                Ce site est hébergé par :<br />
                [Nom de l'hébergeur]<br />
                [Adresse de l'hébergeur]<br />
                [Téléphone de l'hébergeur]
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">4. Propriété intellectuelle</h2>
              <p>
                L'ensemble du contenu de ce site (textes, images, vidéos, logos, icônes, sons, logiciels, etc.) 
                est la propriété exclusive de Meecrogate SAS ou de ses partenaires et est protégé par les lois 
                françaises et internationales relatives à la propriété intellectuelle.
              </p>
              <p className="mt-4">
                Toute reproduction, représentation, modification, publication, transmission, dénaturation, 
                totale ou partielle du site ou de son contenu, par quelque procédé que ce soit, et sur 
                quelque support que ce soit est interdite sans l'autorisation écrite préalable de Meecrogate SAS.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">5. Limitation de responsabilité</h2>
              <p>
                Meecrogate SAS s'efforce d'assurer au mieux l'exactitude et la mise à jour des informations 
                diffusées sur ce site. Cependant, Meecrogate SAS ne peut garantir l'exactitude, la précision 
                ou l'exhaustivité des informations mises à disposition sur ce site.
              </p>
              <p className="mt-4">
                En conséquence, Meecrogate SAS décline toute responsabilité pour toute imprécision, 
                inexactitude ou omission portant sur des informations disponibles sur ce site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">6. Contact</h2>
              <p>
                Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter :<br />
                Email : contact@meecrogate.com<br />
                Téléphone : [Numéro de téléphone]
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">7. Droit applicable</h2>
              <p>
                Les présentes mentions légales sont régies par le droit français. En cas de litige, 
                les tribunaux français seront seuls compétents.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MentionsLegales;

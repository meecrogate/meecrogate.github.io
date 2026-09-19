import { useTranslation } from "react-i18next";
import { Key, Lock, Settings, Shield, ShieldCheck, Smartphone, Users } from "lucide-react";

import ComponentDetailPage from "./ComponentDetailPage";

interface Entry {
  title: string;
  description: string;
}

/** Protocol badges, a section only this page has. */
const StandardsSection = () => {
  const { t } = useTranslation("componentpages");
  const standards = t("identityServer.standards", { returnObjects: true }) as Entry[];

  return (
    <section className="py-20 px-6 border-t border-brand-light/10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-brand-light text-center mb-16">
          {t("identityServer.standardsTitle")}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {standards.map((standard) => (
            <div key={standard.title} className="bg-brand-orange/15 rounded-xl p-6 text-center border border-brand-orange/20">
              <h3 className="text-xl font-bold text-brand-light mb-2">{standard.title}</h3>
              <p className="text-brand-light/80 text-sm">{standard.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const IdentityServerPage = () => (
  <ComponentDetailPage
    id="identityServer"
    hero={{ icon: ShieldCheck, accent: "orange" }}
    benefitIcons={[Shield, Users, Key]}
    featureIcons={[Users, Shield, Smartphone, Settings, Lock, Key]}
    beforeUseCases={<StandardsSection />}
  />
);

export default IdentityServerPage;

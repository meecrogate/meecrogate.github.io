import Service from "@/components/meecrogate/Service";
import { useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const ServicePage = () => {
  const { t } = useTranslation("service");

  return (
    <div className="min-h-screen bg-slate-900 overflow-x-hidden">
      <Seo title={t("seo.title")} description={t("seo.description")} />
      <Navigation />
      <div className="pt-16">
        <Service />
      </div>
      <Footer />
    </div>
  );
};

export default ServicePage;


import Architecture from "@/components/meecrogate/Architecture";
import { useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const ArchitecturePage = () => {
  const { t } = useTranslation("architecture");

  return (
    <div className="min-h-screen bg-slate-900">
      <Seo title={t("seo.title")} description={t("seo.description")} />
      <Navigation />
      <div className="pt-16">
        <Architecture />
      </div>
      <Footer />
    </div>
  );
};

export default ArchitecturePage;

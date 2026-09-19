
import Features from "@/components/meecrogate/Features";
import { useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const FeaturesPage = () => {
  const { t } = useTranslation("features");

  return (
    <div className="min-h-screen bg-slate-900">
      <Seo title={t("seo.title")} description={t("seo.description")} />
      <Navigation />
      <div className="pt-16">
        <Features />
      </div>
      <Footer />
    </div>
  );
};

export default FeaturesPage;

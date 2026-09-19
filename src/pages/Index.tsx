
import { useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation";
import Hero from "@/components/meecrogate/Hero";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const Index = () => {
  const { t } = useTranslation("home");

  return (
    <div className="min-h-screen bg-slate-900">
      <Seo title={t("seo.title")} description={t("seo.description")} />
      <Navigation />
      <div className="pt-16">
        <Hero />
      </div>
      <Footer />
    </div>
  );
};

export default Index;

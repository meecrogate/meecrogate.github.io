
import ContactForm from "@/components/ContactForm";
import { useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const DemoPage = () => {
  const { t } = useTranslation("demo");

  return (
    <div className="min-h-screen bg-slate-900">
      <Seo title={t("seo.title")} description={t("seo.description")} />
      <Navigation />
      <div className="pt-16">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default DemoPage;

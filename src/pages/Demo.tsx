
import ContactForm from "@/components/ContactForm";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const DemoPage = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <div className="pt-16">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default DemoPage;

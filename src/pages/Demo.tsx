
import ContactForm from "@/components/ContactForm";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const DemoPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-custom-dark via-custom-blue to-custom-dark">
      <Navigation />
      <div className="pt-16">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default DemoPage;

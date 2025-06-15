
import UseCases from "@/components/meecrogate/UseCases";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const UseCasesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-dark via-brand-blue to-brand-dark">
      <Navigation />
      <div className="pt-16">
        <UseCases />
      </div>
      <Footer />
    </div>
  );
};

export default UseCasesPage;

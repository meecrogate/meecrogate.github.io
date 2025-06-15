
import UseCases from "@/components/meecrogate/UseCases";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const UseCasesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation />
      <div className="pt-16">
        <UseCases />
      </div>
      <Footer />
    </div>
  );
};

export default UseCasesPage;

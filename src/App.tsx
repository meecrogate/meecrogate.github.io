import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FeaturesPage from "./pages/Features";
import ArchitecturePage from "./pages/Architecture";
import BenefitsPage from "./pages/Benefits";
import UseCasesPage from "./pages/UseCases";
import ClientProjects from "./pages/ClientProjects";
import DemoPage from "./pages/Demo";
import NotFound from "./pages/NotFound";
import Pricing from "./pages/Pricing";
import Service from "./pages/Service";

// Use cases individual pages
import PortailsApiPage from "./pages/usecases/PortailsApi";
import IntegrationRapidePage from "./pages/usecases/IntegrationRapide";
import ProcessusMetiersPage from "./pages/usecases/ProcessusMetiers";
import OrchestrationPage from "./pages/usecases/Orchestration";
import DeploiementHybridePage from "./pages/usecases/DeploiementHybride";
import StandardisationPage from "./pages/usecases/Standardisation";

// Client projects case studies
import BancaireCaseStudy from "./pages/clientprojects/BancaireCaseStudy";
import EcommerceCaseStudy from "./pages/clientprojects/EcommerceCaseStudy";
import SanteCaseStudy from "./pages/clientprojects/SanteCaseStudy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/architecture" element={<ArchitecturePage />} />
          {/* <Route path="/benefits" element={<BenefitsPage />} /> */} {/* supprimé */}
          <Route path="/service" element={<Service />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/usecases" element={<UseCasesPage />} />
          <Route path="/usecases/portails-api" element={<PortailsApiPage />} />
          <Route path="/usecases/integration-rapide" element={<IntegrationRapidePage />} />
          <Route path="/usecases/processus-metiers" element={<ProcessusMetiersPage />} />
          <Route path="/usecases/orchestration" element={<OrchestrationPage />} />
          <Route path="/usecases/deploiement-hybride" element={<DeploiementHybridePage />} />
          <Route path="/usecases/standardisation" element={<StandardisationPage />} />
          <Route path="/projets-clients" element={<ClientProjects />} />
          <Route path="/projets-clients/bancaire" element={<BancaireCaseStudy />} />
          <Route path="/projets-clients/ecommerce" element={<EcommerceCaseStudy />} />
          <Route path="/projets-clients/sante" element={<SanteCaseStudy />} />
          <Route path="/demo" element={<DemoPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
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
import ComponentsPage from "./pages/Components";
import ControlStation from "./pages/ControlStation";
import ScrollToTop from "./components/ScrollTop";

// Use cases individual pages
import PortailsApiPage from "./pages/usecases/PortailsApi";
import IntegrationRapidePage from "./pages/usecases/IntegrationRapide";
import ProcessusMetiersPage from "./pages/usecases/ProcessusMetiers";
import OrchestrationPage from "./pages/usecases/Orchestration";
import DeploiementHybridePage from "./pages/usecases/DeploiementHybride";
import StandardisationPage from "./pages/usecases/Standardisation";
<<<<<<< HEAD
=======
import ComparatifsPage from "./pages/Comparatifs";
>>>>>>> source-repo/main

// Client projects case studies
import BancaireCaseStudy from "./pages/clientprojects/BancaireCaseStudy";
import EcommerceCaseStudy from "./pages/clientprojects/EcommerceCaseStudy";
import SanteCaseStudy from "./pages/clientprojects/SanteCaseStudy";
import ParisCaseStudy from "./pages/clientprojects/ParisCaseStudy";

// Components individual pages
import ApiGatewayPage from "./pages/components/ApiGateway";
import IdentityServerPage from "./pages/components/IdentityServer";
import OrchestratorPage from "./pages/components/Orchestrator";
import ProcessExecutorPage from "./pages/components/ProcessExecutor";

// Legal pages
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";

import { createInstance, MatomoProvider } from '@datapunt/matomo-tracker-react';
<<<<<<< HEAD
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useMatomo } from '@datapunt/matomo-tracker-react';

// Configuration de l'instance avec les variables d'environnement Vite
const instance = createInstance({
  urlBase: import.meta.env.VITE_MATOMO_URL as string,
  siteId: Number(import.meta.env.VITE_MATOMO_SITE_ID),
});

const queryClient = new QueryClient();




=======
import { useEffect, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { useMatomo } from '@datapunt/matomo-tracker-react';

const matomoUrl = import.meta.env.VITE_MATOMO_URL as string;
const matomoSiteId = import.meta.env.VITE_MATOMO_SITE_ID;

let instance: ReturnType<typeof createInstance> | null = null;
try {
  if (matomoUrl && matomoSiteId) {
    instance = createInstance({
      urlBase: matomoUrl,
      siteId: Number(matomoSiteId),
    });
  }
} catch (e) {
  console.warn('Matomo initialization failed:', e);
}

const queryClient = new QueryClient();

>>>>>>> source-repo/main
const MatomoTracker = () => {
  const location = useLocation();
  const { trackPageView } = useMatomo();

  useEffect(() => {
<<<<<<< HEAD
    // On force l'URL complète pour que le HashRouter soit bien interprété
=======
>>>>>>> source-repo/main
    trackPageView({
      href: window.location.href,
    });
  }, [location, trackPageView]);

  return null;
};

<<<<<<< HEAD

const App = () => (
  /* @ts-ignore - Ignore l'erreur de type 'children' sur React 18 */
  <MatomoProvider value={instance}>
=======
const MatomoWrapper = ({ children }: { children: ReactNode }) => {
  if (!instance) return <>{children}</>;
  // @ts-ignore - React 18 children type
  return <MatomoProvider value={instance}>{children}</MatomoProvider>;
};

const App = () => (
  <MatomoWrapper>
>>>>>>> source-repo/main
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
<<<<<<< HEAD
          <MatomoTracker /> {/* 2. On suit les changements de routes ici */}
=======
          {instance && <MatomoTracker />}
>>>>>>> source-repo/main
          <ScrollToTop />
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/architecture" element={<ArchitecturePage />} />
          {/* <Route path="/benefits" element={<BenefitsPage />} /> */} {/* supprimé */}
          <Route path="/service" element={<Service />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/components" element={<ComponentsPage />} />
          <Route path="/control-station" element={<ControlStation />} />
          <Route path="/usecases" element={<UseCasesPage />} />
          <Route path="/usecases/portails-api" element={<PortailsApiPage />} />
          <Route path="/usecases/integration-rapide" element={<IntegrationRapidePage />} />
          <Route path="/usecases/processus-metiers" element={<ProcessusMetiersPage />} />
          <Route path="/usecases/orchestration" element={<OrchestrationPage />} />
          <Route path="/usecases/deploiement-hybride" element={<DeploiementHybridePage />} />
          <Route path="/usecases/standardisation" element={<StandardisationPage />} />
<<<<<<< HEAD
=======
          <Route path="/comparatifs" element={<ComparatifsPage />} />
>>>>>>> source-repo/main
          <Route path="/projets-clients" element={<ClientProjects />} />
          <Route path="/projets-clients/bancaire" element={<BancaireCaseStudy />} />
          <Route path="/projets-clients/ecommerce" element={<EcommerceCaseStudy />} />
          <Route path="/projets-clients/sante" element={<SanteCaseStudy />} />
          <Route path="/projets-clients/paris" element={<ParisCaseStudy />} />
          <Route path="/components/api-gateway" element={<ApiGatewayPage />} />
          <Route path="/components/identity-server" element={<IdentityServerPage />} />
          <Route path="/components/orchestrator" element={<OrchestratorPage />} />
          <Route path="/components/process-executor" element={<ProcessExecutorPage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
<<<<<<< HEAD
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </MatomoProvider>
=======
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </MatomoWrapper>
>>>>>>> source-repo/main
);

export default App;

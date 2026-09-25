import { Routes, Route } from "react-router-dom";

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
import ComparatifsPage from "./pages/Comparatifs";

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
import ParisCaseStudy from "./pages/clientprojects/ParisCaseStudy";

// Components individual pages
import ApiGatewayPage from "./pages/components/ApiGateway";
import IdentityServerPage from "./pages/components/IdentityServer";
import OrchestratorPage from "./pages/components/Orchestrator";
import ProcessExecutorPage from "./pages/components/ProcessExecutor";

// Legal pages
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";

import { LANGUAGES } from "./i18n/languages";
import LanguageLayout from "./i18n/LanguageLayout";

// Routes are declared once with paths relative to the language branch they
// are mounted under, so `/features` is reachable as both `/features` and
// `/en/features`. A fresh element tree is built per branch.
const appRoutes = () => (
  <>
    <Route index element={<Index />} />
    <Route path="features" element={<FeaturesPage />} />
    <Route path="comparatifs" element={<ComparatifsPage />} />
    <Route path="architecture" element={<ArchitecturePage />} />
    <Route path="service" element={<Service />} />
    <Route path="pricing" element={<Pricing />} />
    <Route path="components" element={<ComponentsPage />} />
    <Route path="control-station" element={<ControlStation />} />
    <Route path="usecases" element={<UseCasesPage />} />
    <Route path="usecases/portails-api" element={<PortailsApiPage />} />
    <Route path="usecases/integration-rapide" element={<IntegrationRapidePage />} />
    <Route path="usecases/processus-metiers" element={<ProcessusMetiersPage />} />
    <Route path="usecases/orchestration" element={<OrchestrationPage />} />
    <Route path="usecases/deploiement-hybride" element={<DeploiementHybridePage />} />
    <Route path="usecases/standardisation" element={<StandardisationPage />} />
    <Route path="projets-clients" element={<ClientProjects />} />
    <Route path="projets-clients/bancaire" element={<BancaireCaseStudy />} />
    <Route path="projets-clients/ecommerce" element={<EcommerceCaseStudy />} />
    <Route path="projets-clients/sante" element={<SanteCaseStudy />} />
    <Route path="projets-clients/paris" element={<ParisCaseStudy />} />
    <Route path="components/api-gateway" element={<ApiGatewayPage />} />
    <Route path="components/identity-server" element={<IdentityServerPage />} />
    <Route path="components/orchestrator" element={<OrchestratorPage />} />
    <Route path="components/process-executor" element={<ProcessExecutorPage />} />
    <Route path="demo" element={<DemoPage />} />
    {/* Legal notices are published in French only; they stay reachable from
        every language so the footer never points at a 404. */}
    <Route path="mentions-legales" element={<MentionsLegales />} />
    <Route path="politique-confidentialite" element={<PolitiqueConfidentialite />} />
    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
    <Route path="*" element={<NotFound />} />
  </>
);

/**
 * The site's route tree: the shared table above, mounted once per
 * language. Kept apart from `App` so the providers and the routing stay
 * readable on their own.
 */
const AppRoutes = () => (
  <Routes>
    {/* One branch per language, all sharing the same route table.
        French sits at the root, every other language behind its
        prefix (see src/i18n/languages.ts). */}
    {LANGUAGES.map((language) => (
      <Route
        key={language.code}
        path={language.pathPrefix || "/"}
        element={<LanguageLayout language={language.code} />}
      >
        {appRoutes()}
      </Route>
    ))}
  </Routes>
);

export default AppRoutes;

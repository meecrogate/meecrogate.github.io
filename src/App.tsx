import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter } from "react-router-dom";
import { createInstance, MatomoProvider, useMatomo } from '@jonkoops/matomo-tracker-react';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollTop';
import AppRoutes from './AppRoutes';

// Initialisation de Matomo
const matomoUrl = import.meta.env.VITE_MATOMO_URL || "https://yupiik.matomo.cloud/";
const matomoId = Number(import.meta.env.VITE_MATOMO_SITE_ID) || 5;

const instance = createInstance({
  urlBase: matomoUrl,
  siteId: matomoId,
});

const queryClient = new QueryClient();

const MatomoTracker = () => {
  const location = useLocation();
  const { pushInstruction } = useMatomo();
  const prevUrl = useRef('');

  useEffect(() => {
    const currentUrl = `${window.location.origin}${location.pathname}`;

    pushInstruction('setReferrerUrl', prevUrl.current);
    pushInstruction('setCustomUrl', currentUrl);
    pushInstruction('setDocumentTitle', document.title);
    pushInstruction('trackPageView');
    pushInstruction('enableLinkTracking');

    prevUrl.current = currentUrl;
  }, [location]); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
};

const App = () => (
  <HelmetProvider>
    <MatomoProvider value={instance}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <HashRouter>
            <MatomoTracker /> {/* On suit les changements de routes ici */}
            <ScrollToTop />
            <AppRoutes />
          </HashRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </MatomoProvider>
  </HelmetProvider>
);

export default App;
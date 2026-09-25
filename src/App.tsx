import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
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
    pushInstruction('enableLinkTracking');
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    // `/pricing/` (a direct visit, served from pricing/index.html) and
    // `/pricing` (in-app navigation) are the same page: report one URL.
    // The query string stays, so campaign parameters (utm_*, mtm_*) count.
    const path = location.pathname.replace(/\/+$/, '') || '/';
    const currentUrl = `${window.location.origin}${path}${location.search}`;

    // Helmet writes the new <title> on the next animation frame; waiting
    // for it keeps the previous page's title off this page view.
    let timeout: ReturnType<typeof setTimeout>;
    const frame = requestAnimationFrame(() => {
      timeout = setTimeout(() => {
        // On the first page view Matomo keeps the real referrer (search
        // engine, LinkedIn, ad...); later ones come from the previous page.
        if (prevUrl.current) pushInstruction('setReferrerUrl', prevUrl.current);
        pushInstruction('setCustomUrl', currentUrl);
        pushInstruction('setDocumentTitle', document.title);
        pushInstruction('trackPageView');

        prevUrl.current = currentUrl;
      });
    });

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timeout);
    };
  }, [location.pathname, location.search]); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
};

const App = () => (
  <HelmetProvider>
    <MatomoProvider value={instance}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <MatomoTracker /> {/* On suit les changements de routes ici */}
            <ScrollToTop />
            <AppRoutes />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </MatomoProvider>
  </HelmetProvider>
);

export default App;
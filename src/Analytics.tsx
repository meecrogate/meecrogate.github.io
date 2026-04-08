import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useMatomo } from '@datapunt/matomo-tracker-react';

export const Analytics = () => {
  const location = useLocation();
  const { trackPageView } = useMatomo();

  useEffect(() => {
    // On suit la page à chaque changement de hash
    // On utilise window.location.pathname + window.location.hash 
    // pour que Matomo voit bien "/#/projects" par exemple.
    trackPageView({
      href: window.location.href,
    });
  }, [location, trackPageView]);

  return null;
};